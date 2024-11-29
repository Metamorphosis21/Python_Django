from django.contrib import admin
from .models import model1 , modelReviews , modelStore , modelCertificate # importing the model here

# Register your models here.
class modelReviewInline(admin.TabularInline):
    model = modelReviews
    extra = 1  # extra slots for review after the first review

class modelVarietyadmin(admin.ModelAdmin):  # customize features , enable / disable feeatures then use ModelAdmin
    list_display = ('name' , 'ml_types' , 'description' , 'price') # adding fields to display on the model admin page
    inlines = [modelReviewInline]

class modelStoreAdmin(admin.ModelAdmin): 
    list_display = ('st_name' , 'st_address' ,)
    filter_horizontal = ('st_varities',)


class modelCertificateAdmin(admin.ModelAdmin):
    list_display = ('cert_name' , 'cert_number')


admin.site.register(model1 , modelVarietyadmin)
admin.site.register(modelStore , modelStoreAdmin)
admin.site.register(modelCertificate , modelCertificateAdmin)

