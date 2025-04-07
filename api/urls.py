from django.urls import path
from . import views

urlpatterns = [
    # Authentication endpoints
    path('auth/login/', views.LoginView.as_view(), name='api_login'),
    path('auth/register/', views.RegisterView.as_view(), name='api_register'),
    
    # Prediction endpoints
    path('predictions/submit/', views.submit_prediction, name='api_submit_prediction'),
    path('predictions/result/<int:pk>/', views.get_prediction_result, name='api_get_prediction'),
    path('predictions/history/', views.prediction_history, name='api_prediction_history'),
    
    # User endpoints
    path('users/doctors/', views.get_doctors, name='api_get_doctors'),
] 