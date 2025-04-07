from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import status, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from health.models import Patient, Doctor, Search_Data

# Authentication API Views
class LoginView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = User.objects.filter(username=username).first()
        
        if user and user.check_password(password):
            # In a real app, you would generate a JWT token here
            token = "dummy-token-for-demo"
            
            # Get user type and details
            user_data = {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
            }
            
            # Check if user is admin, patient, or doctor
            if user.is_staff:
                user_data['role'] = 'admin'
            elif Patient.objects.filter(user=user).exists():
                patient = Patient.objects.get(user=user)
                user_data['role'] = 'patient'
                user_data['patient_id'] = patient.id
            elif Doctor.objects.filter(user=user).exists():
                doctor = Doctor.objects.get(user=user)
                user_data['role'] = 'doctor'
                user_data['doctor_id'] = doctor.id
                user_data['status'] = doctor.status
            
            return Response({
                'token': token,
                'user': user_data
            })
        
        return Response(
            {'error': 'Invalid credentials'},
            status=status.HTTP_401_UNAUTHORIZED
        )

class RegisterView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        data = request.data
        
        # Check if username already exists
        if User.objects.filter(username=data.get('username')).exists():
            return Response(
                {'error': 'Username already exists'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Create user
        user = User.objects.create_user(
            username=data.get('username'),
            email=data.get('email'),
            password=data.get('password'),
            first_name=data.get('first_name'),
            last_name=data.get('last_name')
        )
        
        # Create patient or doctor profile
        role = data.get('role', 'patient')
        
        if role == 'patient':
            Patient.objects.create(
                user=user,
                mobile=data.get('mobile'),
                address=data.get('address'),
                dob=data.get('dob')
            )
        elif role == 'doctor':
            Doctor.objects.create(
                user=user,
                mobile=data.get('mobile'),
                address=data.get('address'),
                department=data.get('department'),
                status='pending'
            )
        
        return Response(
            {'message': 'User registered successfully'},
            status=status.HTTP_201_CREATED
        )

# Prediction API Views
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def submit_prediction(request):
    # Extract patient
    patient = get_object_or_404(Patient, user=request.user)
    
    # Extract prediction parameters
    params = {
        'age': request.data.get('age'),
        'sex': request.data.get('sex'),
        'cp': request.data.get('cp'),
        'trestbps': request.data.get('trestbps'),
        'chol': request.data.get('chole'),
        'fbs': request.data.get('fbs'),
        'restecg': request.data.get('restecg'),
        'thalach': request.data.get('thalach'),
        'exang': request.data.get('exang'),
        'oldpeak': request.data.get('old_peak'),
        'slope': request.data.get('slope'),
        'ca': request.data.get('ca'),
        'thal': request.data.get('thal'),
    }
    
    # In a real app, you would run the ML model here
    # For demo purposes, we'll create a mock prediction
    accuracy = 88.52
    prediction = 0  # 0 for healthy, 1 for at risk
    
    # Save prediction to database
    search_data = Search_Data.objects.create(
        patient=patient,
        predict_result=prediction,
        accuracy=accuracy,
        **params
    )
    
    return Response({
        'id': search_data.id,
        'prediction': prediction,
        'accuracy': accuracy,
        'date': search_data.created_date,
    })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_prediction_result(request, pk):
    # Get the prediction
    search_data = get_object_or_404(Search_Data, id=pk)
    
    # Check if user is authorized to view this prediction
    if (not request.user.is_staff and 
        not Doctor.objects.filter(user=request.user).exists() and
        search_data.patient.user != request.user):
        return Response(
            {'error': 'You do not have permission to view this prediction'},
            status=status.HTTP_403_FORBIDDEN
        )
    
    # Format the prediction result
    result = {
        'id': search_data.id,
        'prediction': search_data.predict_result,
        'accuracy': search_data.accuracy,
        'date': search_data.created_date,
        'parameters': {
            'age': search_data.age,
            'sex': search_data.sex,
            'cp': search_data.cp,
            'trestbps': search_data.trestbps,
            'chole': search_data.chol,
            'fbs': search_data.fbs,
            'restecg': search_data.restecg,
            'thalach': search_data.thalach,
            'exang': search_data.exang,
            'old_peak': search_data.oldpeak,
            'slope': search_data.slope,
            'ca': search_data.ca,
            'thal': search_data.thal,
        },
        'patient': {
            'id': search_data.patient.id,
            'name': f"{search_data.patient.user.first_name} {search_data.patient.user.last_name}",
        }
    }
    
    # Add risk factors and recommendations based on prediction
    if search_data.predict_result == 0:  # Healthy
        result['risk_factors'] = [
            {'name': 'Overall Risk', 'value': 'Low Risk', 'description': 'Your parameters indicate low risk for heart disease'}
        ]
        result['recommendations'] = [
            'Maintain regular exercise routine',
            'Continue heart-healthy diet',
            'Schedule regular checkups',
            'Monitor your blood pressure and cholesterol',
        ]
    else:  # At risk
        result['risk_factors'] = [
            {'name': 'Overall Risk', 'value': 'High Risk', 'description': 'Your parameters indicate elevated risk for heart disease'}
        ]
        result['recommendations'] = [
            'Consult with a cardiologist soon',
            'Increase physical activity',
            'Adopt a heart-healthy diet',
            'Monitor blood pressure regularly',
            'Consider medication if prescribed by doctor',
        ]
    
    return Response(result)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def prediction_history(request):
    # Get user role
    is_admin = request.user.is_staff
    is_doctor = Doctor.objects.filter(user=request.user).exists()
    
    # Filter predictions based on user role
    if is_admin or is_doctor:
        # Admin and doctors can see all predictions
        predictions = Search_Data.objects.all().order_by('-created_date')
    else:
        # Patients can only see their own predictions
        patient = get_object_or_404(Patient, user=request.user)
        predictions = Search_Data.objects.filter(patient=patient).order_by('-created_date')
    
    # Format the results
    results = []
    for p in predictions:
        results.append({
            'id': p.id,
            'prediction': p.predict_result,
            'accuracy': p.accuracy,
            'date': p.created_date,
            'patient': {
                'id': p.patient.id,
                'name': f"{p.patient.user.first_name} {p.patient.user.last_name}",
            }
        })
    
    return Response(results)

# User API Views
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_doctors(request):
    # Get approved doctors
    doctors = Doctor.objects.filter(status='approved')
    
    # Format the results
    results = []
    for doc in doctors:
        results.append({
            'id': doc.id,
            'name': f"{doc.user.first_name} {doc.user.last_name}",
            'department': doc.department,
            'contact': doc.mobile,
            'address': doc.address,
        })
    
    return Response(results) 