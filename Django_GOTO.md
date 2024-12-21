# Project Setup Guide

## Admin Names :
- **BuriBuriZimon**: `123qwe321`
- **FSProject**: `123ewq123`

## Steps to Set Up a Django Project :

- **Create a New Django Project and run it** :
   ```bash
   django-admin startproject <project_name>
   cd <project_name>
   python manage.py runserver
   # migrate errors
   python manage.py makemigrations
   python manage.py migrate
    ```

- **Create django admin** :
    ```bash
    python manage.py createsuperuser
    ```

- **General Setup** :
    - Import os
    - Static setup (static setup takes time)
    - Templates setup 
    - Media setup 

- **Creating Apps** :
    ```bash
    python manage.py startapp <app_name>
    ```
    - Add in settings.py in INSTALLED_APPS
    - Add necessary files in the new App (urls.py , forms.py, templates, static)
    - Make a static folder inside main project


- **Views and Urls** :

    - Create a view and add its path in urls.py (in the app)
    - Make templates folder to store templates
    - Redirect to the urls.py file in the from the main urls.py file

    <span style="color: orange;">**!! Run the django project to verify !!**</span>
    <br/>
    <span style="color: lightblue;">**To run project check the base url file for name**</span>


- **Adding Tailwind and Bootstrap** :
    
    - For bootstrap just add the link to the bootstrap in the layout.html file
    - For Tailwind and hot-reload, 
    ```bash
        python manage.py tailwind init
        # Add 'tailwind' and 'theme' to INSATLLED_APPS
        python manage.py tailwind install
        # Add the NPM_BIN_PATH = r"C:\Program Files\nodejs\npm.cmd" with INTERNAL_IPS = ["127.0.0.1",]

        # In new terminal , run this command
        python manage.py tailwind start

        # For hot reload,
        # Add 'django_browser_reload' to INSTALLED_APPS
        # Add 'django_browser_reload.middleware.BrowserReloadMiddleware', to MIDDLEWARE
        # Add path("__reload__/", include("django_browser_reload.urls")), to urls.py
        # To use tailwind, add {% load static tailwind_tags %} and {% tailwind_css %} templates to all html files
         
    ```
    
