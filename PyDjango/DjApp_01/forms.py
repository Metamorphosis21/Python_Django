from django import forms
from .models import model1

class modelVarietyForm(forms.Form):
    varietyForm = forms.ModelChoiceField(queryset=model1.objects.all() , label='')
    # varietyForm = forms.CharField()