# Generated by Django 3.0.1 on 2020-01-21 11:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0007_auto_20200114_1546'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='content',
        ),
    ]