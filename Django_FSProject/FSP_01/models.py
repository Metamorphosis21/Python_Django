from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Blog(models.Model):
    title = models.CharField(("Blog_Title"), max_length=60)
    content = models.TextField(max_length=400)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    thumbnail = models.ImageField(upload_to='blog_post/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f'{self.title}  ~{self.author.username}'