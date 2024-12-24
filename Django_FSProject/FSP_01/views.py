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
        blog_form = BlogForm(request.Post , request.FILE)
        if blog_form.is_valid():
            blog = blog_form.save(commit=False)
            blog.user = request.user
            blog.save()
            return redirect('blog_list')
    else:
        blog_form = BlogForm()
    return render(request, 'blog_form.html', {'create_form': blog_form})

# 3. Edit blog posts
def blog_edit(request, blog_id):
    blog = get_object_or_404(Blog, pk = blog_id, user = request.user)
    if request.method=='POST':
        blog_form = BlogForm(request.Post , request.FILE, instance = blog)
        if blog_form().is_valid():
            blog = blog_form.save(commit=False)
            blog.user = request.user
            blog.save()
            return redirect('blog_list')
    else:
        blog_form = BlogForm(instance = blog)
    return render(request, 'blog_form.html', {'create_form': blog_form})
        
# 4. Delete blog posts
def blog_delete(request, blog_id):
    blog = get_object_or_404(Blog, pk = blog_id, user = request.user)
    if request.method == 'POST':
        blog.delete()
        return redirect('blog_list')
    return render(request, 'blog_delete_form.html', {'blog_delete': blog})

        