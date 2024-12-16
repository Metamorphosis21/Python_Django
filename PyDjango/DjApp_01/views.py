from django.shortcuts import render
from .models import model1 , modelStore
from django.shortcuts import get_object_or_404
from .forms import modelVarietyForm

def app1(request):
    md_types = model1.objects.all()
    return render(request , 'app01.html' , {'md_types' : md_types})  # transfering value from the backend to the frontend
    
def app1_detail(request , md_id):     # to go see more detail and description for the model we add new detail html page in the views,py
    md_details = get_object_or_404(model1 , pk=md_id)
    return render(request , 'app01_detail.html', {'md_details' : md_details}) # go to urls.py to tell where to direct next
    
def app1_store(request):
    md_stores = None # to show all the stores having the model 
    if request.method == 'POST':    # this if block handles the form when submitted
        form = modelVarietyForm(request.POST)
        if form.is_valid(): # checks if the input is valid or not
            md_variety = form.cleaned_data['varietyForm'] # from modelVarietyForm
            md_stores = modelStore.objects.filter(st_varities=md_variety)
    else:
        form = modelVarietyForm()   # default form to show if the form is not submitted
    return render(request ,'app01_store.html' , {'md_stores' : md_stores , 'form' : form})  # have to send the form no exceptions
    
    
    
    
    # where to render ? urls.py doesnt exist in this AppHtml_01 folder , make a urls.py file in this folder 
