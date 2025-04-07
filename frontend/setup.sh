#!/bin/bash

# Heart Disease Prediction System - Frontend Setup Script

echo "========================================="
echo "Heart Disease Prediction System - Frontend Setup"
echo "========================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js v14 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 14 ]; then
    echo "Node.js version is $NODE_VERSION. Please upgrade to v14 or higher."
    exit 1
fi

echo "Node.js version: $(node -v)"
echo "npm version: $(npm -v)"

# Install dependencies
echo "Installing dependencies..."
npm install

# Create necessary directories if they don't exist
echo "Creating necessary directories..."
mkdir -p public/images
mkdir -p src/assets/images

# Download sample images for the application
echo "Downloading sample images..."
curl -o public/images/heart-illustration.png "https://picsum.photos/seed/heart/600/400"
curl -o public/images/heart-health.jpg "https://picsum.photos/seed/health/600/400"
curl -o public/favicon.ico "https://picsum.photos/seed/favicon/64/64"
curl -o public/logo192.png "https://picsum.photos/seed/logo/192/192"
curl -o public/logo512.png "https://picsum.photos/seed/logo/512/512"

echo "Setup completed successfully!"
echo ""
echo "To start the development server, run:"
echo "  npm start"
echo ""
echo "The application will be available at: http://localhost:3000" 