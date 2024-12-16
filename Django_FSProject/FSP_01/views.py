from django.shortcuts import render

# Create your views here. Views are simple functions that return a response.
def view01(request):
    return render(request, 'dummy.html')