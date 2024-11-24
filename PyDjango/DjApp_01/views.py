from django.shortcuts import render
from .models import model1
from django.shortcuts import get_object_or_404

def app1(request):
    md_types = model1.objects.all()
    return render(request , 'app01.html' , {'md_types' : md_types})  # transfering value from the backend to the frontend
    
def app1_detail(request , md_id):     # to go see more detail and description for the model we add new detail html page in the views,py
    md_details = get_object_or_404(model1 , pk=md_id)
    return render(request , 'app01_detail.html', {'md_details' : md_details}) # go to urls.py to tell where to direct next
    

    
    
    
    
    
    
    
    
    # where to render ? urls.py doesnt exist in this AppHtml_01 folder , make a urls.py file in this folder 
