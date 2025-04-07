#!/bin/bash
# Build script for Vercel deployment

# Make build_files.sh executable
chmod a+x build_files.sh

# Install setuptools first
pip3 install setuptools==69.0.2

# Install Python dependencies
pip3 install -r requirements.txt

# Collect static files
python3 manage.py collectstatic --noinput

# Create directory for static files
mkdir -p staticfiles_build
mkdir -p staticfiles_build/static

# Copy static files to build directory
cp -r static/* staticfiles_build/static/ || echo "No static files to copy" 