from django.shortcuts import render

# def base_view(request):
#     return render(request, 'layout.html')
def demo_01(request):
    return render(request, 'random.html')
def base_view(request):
    return render(request, 'layout.html')