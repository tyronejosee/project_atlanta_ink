#!/bin/bash
set -o errexit
set -o pipefail
set -o nounset

# Define color and style codes directly
bold="\033[1m"
normal="\033[0m"
red="\033[31m"
green="\033[32m"
yellow="\033[33m"
blue="\033[34m"
orange="\033[38;2;255;66;0m"

# # Apply database migrations using Django's manage.py script
# echo -e "${bold}${green}Check database migrations...${normal}"
# python manage.py makemigrations

# echo -e "${bold}${green}Starting database migrations...${normal}"
# python manage.py migrate

# Collect static files from each app into a single location (for serving in production), suppressing prompts
echo -e "${bold}${yellow}Collecting static files...${normal}"
# python manage.py collectstatic --noinput

# Start the Django development server on all network interfaces, listening on port 8100
echo -e "${bold}${orange}Starting Atlanta Ink backend...${normal}"
echo -e "${bold}${blue}Access at${normal} ${bold}${red}http://127.0.0.1:8100/${normal}"
python manage.py runserver 0.0.0.0:8100

# Start the Gunicorn server, which is a production WSGI HTTP server for Django,
# echo -e "${bold}${red}Starting Gunicorn server on port 8000...${normal}"
# binding to all network interfaces on port 8000
# exec gunicorn config.wsgi:application --bind 0.0.0.0:8000
