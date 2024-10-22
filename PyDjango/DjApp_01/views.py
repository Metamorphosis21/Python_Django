from django.shortcuts import render

def app1(request):
    return render(request , 'app01.html')  # where to render ? urls.py doesnt exist in this AppHtml_01 folder
    # make a urls.py file in this folder 