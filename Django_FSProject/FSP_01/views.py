from django.shortcuts import render, get_object_or_404, redirect
from .models import Blog
from .forms import BlogForm

# Create your views here. Views are simple functions that return a response.
def view01(request):
    return render(request, 'dummy.html')

# Funtionalities:

# 1. List all blog posts
def blog_list(request):
    blog_list = Blog.objects.all().order_by('-created_at')
    return render(request, 'blog_list.html', {'blog_list': blog_list})

# 2. Create new blog posts
def blog_create(request):
    if request.method == 'POST':
        create_form = BlogForm(request.Post , request.FILE)
        if create_form.is_valid():
            blog = create_form.save(commit=False)
            blog.user = request.user
            blog.save()
            return redirect('blog_list')
    else:
        create_form = BlogForm()
    return render(request, 'blog_create_form.html', {'create_form': create_form})

# 3. Edit blog posts
