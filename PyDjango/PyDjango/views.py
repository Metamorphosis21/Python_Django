from django.http import HttpResponse  
# Importing HttpResponse class to return simple HTTP responses
from django.shortcuts import render, redirect, get_object_or_404
# to render html files from templates 

def res1(request):
    # return HttpResponse("Hello , This is where you begin.")   # Return an HTTP response with a simple text message
    return render(request, 'html_01.html')  # rendering .html file AFTER directing to templates folder in settings.py file in 

def res2(request):
    # return HttpResponse("Hello , This is your first step.")
    return render(request, 'folder1\html_02.html')

def res3(request):
    # return HttpResponse("Hello , This is your second step.")
    return render(request, 'jinja_temp\jinja_index.html')

def res4(request):
    # return HttpResponse("Hello , This is your second step.")
    return render(request, 'layout.html')