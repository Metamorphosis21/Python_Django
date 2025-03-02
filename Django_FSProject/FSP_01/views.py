from django.shortcuts import render, get_object_or_404, redirect
from .models import Blog
from .forms import BlogForm, UserRegistrationForm
from django.contrib.auth import login, logout  # Add logout here
from django.contrib.auth.decorators import login_required

# Create your views here. Views are simple functions that return a response.
def view01(request):
    return render(request, 'layout.html')

# Funtionalities:

# 1. List all blog posts
def blog_list(request):
    blog_list = Blog.objects.all().order_by('-created_at')
    return render(request, 'blog_list.html', {'blog_list': blog_list})

# 2. Create new blog posts
@login_required
def blog_create(request):
    if request.method == 'POST':
        blog_form = BlogForm(request.POST , request.FILES)
        if blog_form.is_valid():
            blog = blog_form.save(commit=False)
            blog.author = request.user
            blog.save()
            return redirect('blog_list')
    else:
        blog_form = BlogForm()
    return render(request, 'blog_form.html', {'blog_form': blog_form})

# 3. Edit blog posts
@login_required
def blog_edit(request, blog_id):
    blog = get_object_or_404(Blog, pk=blog_id, author=request.user)
    if request.method == 'POST':
        blog_form = BlogForm(request.POST, request.FILES, instance=blog)
        if blog_form.is_valid():
            blog = blog_form.save(commit=False)
            blog.author = request.user
            blog.save()
            return redirect('blog_list')
    else:
        blog_form = BlogForm(instance=blog)
    return render(request, 'blog_form.html', {'blog_form': blog_form})
        
# 4. Delete blog posts
@login_required
def blog_delete(request, blog_id):
    blog = get_object_or_404(Blog, pk = blog_id, author = request.user)
    if request.method == 'POST':
        blog.delete()
        return redirect('blog_list')
    return render(request, 'blog_delete_form.html', {'blog_delete': blog})

# 5. User registration
def register(request):
    if request.method == 'POST':
        blog_form = UserRegistrationForm(request.POST)
        if blog_form.is_valid():
            user = blog_form.save(commit = False)
            user.set_password(blog_form.cleaned_data['password1'])
            user.save()
            login(request, user)
            return redirect('blog_list')
    else:
        blog_form = UserRegistrationForm()
    return render(request, 'registration/register.html', {'blog_form': blog_form})

@login_required
def logout_view(request):
    logout(request)
    return redirect('blog_list')