# Generated by Django 3.0.1 on 2020-01-07 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='description',
            field=models.TextField(default='', verbose_name='description'),
        ),
        migrations.AddField(
            model_name='article',
            name='image',
            field=models.ImageField(default='/', upload_to='', verbose_name='image'),
        ),
        migrations.AddField(
            model_name='article',
            name='publicationDate',
            field=models.DateField(auto_now=True, verbose_name='publicationDate'),
        ),
        migrations.AddField(
            model_name='article',
            name='uploadDate',
            field=models.DateTimeField(auto_now=True, verbose_name='uploadDate'),
        ),
        migrations.AlterField(
            model_name='article',
            name='content',
            field=models.TextField(default='', verbose_name='content'),
        ),
        migrations.AlterField(
            model_name='article',
            name='title',
            field=models.CharField(max_length=100, verbose_name='title'),
        ),
    ]
