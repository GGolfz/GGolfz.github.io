from django.db import models

# Create your models here.
class Benz(models.Model):
    product_name =models.CharField(max_length=100)
    product_price =models.CharField(max_length=100)
    product_detail =models.TextField(null=True,blank = True)
    product_image = models.TextField(null=True,blank = True)
    def __str__(self):
        return self.product_name
class BMW(models.Model):
    product_name =models.CharField(max_length=100)
    product_price =models.CharField(max_length=100)
    product_detail =models.TextField(null=True,blank = True)
    product_image = models.TextField(null=True,blank = True)
    def __str__(self):
        return self.product_name
class Lambo(models.Model):
    product_name =models.CharField(max_length=100)
    product_price =models.CharField(max_length=100)
    product_detail =models.TextField(null=True,blank = True)
    product_image = models.TextField(null=True,blank = True)
    def __str__(self):
        return self.product_name