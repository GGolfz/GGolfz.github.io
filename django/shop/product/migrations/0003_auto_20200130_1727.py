# Generated by Django 2.2 on 2020-01-30 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_allproduct_product_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='BMW',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=100)),
                ('product_price', models.CharField(max_length=100)),
                ('product_detail', models.TextField(blank=True, null=True)),
                ('product_image', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Lambo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=100)),
                ('product_price', models.CharField(max_length=100)),
                ('product_detail', models.TextField(blank=True, null=True)),
                ('product_image', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.RenameModel(
            old_name='AllProduct',
            new_name='Benz',
        ),
    ]
