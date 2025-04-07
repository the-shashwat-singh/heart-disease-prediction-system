FROM python:3.9-slim as backend

WORKDIR /app

# Install dependencies for backend
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY . .

# Build the frontend
FROM node:14 as frontend-builder

WORKDIR /app/frontend

# Copy frontend code
COPY frontend/package*.json ./
RUN npm install

COPY frontend/ ./
RUN npm run build

# Final image
FROM python:3.9-slim

WORKDIR /app

# Copy from backend stage
COPY --from=backend /app /app

# Copy the built frontend from the frontend-builder stage
COPY --from=frontend-builder /app/frontend/build /app/frontend/build

# Install nginx to serve the frontend
RUN apt-get update && apt-get install -y nginx

# Configure nginx
COPY nginx.conf /etc/nginx/sites-available/default

# Expose ports
EXPOSE 8000 80

# Start script
COPY start.sh .
RUN chmod +x start.sh

CMD ["./start.sh"] 