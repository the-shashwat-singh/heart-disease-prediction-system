#!/bin/bash

# Start Nginx in the background
service nginx start

# Apply migrations
python manage.py migrate

# Collect static files
python manage.py collectstatic --noinput

# Start Django server
python manage.py runserver 0.0.0.0:8000 