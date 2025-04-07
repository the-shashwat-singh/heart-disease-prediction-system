#!/bin/bash
# Build script for Vercel deployment

# Make build_files.sh executable
chmod a+x build_files.sh

# Install Python dependencies
pip install -r requirements.txt

# Collect static files
python3 manage.py collectstatic --noinput

# Create directory for static files
mkdir -p staticfiles_build
mkdir -p staticfiles_build/static

# Copy static files to build directory
cp -r static/* staticfiles_build/static/ 