# Generated by Django 3.0.1 on 2020-01-14 15:46

import articles.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0006_auto_20200107_1353'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='content',
            field=models.FileField(upload_to=articles.models.hashFilename, verbose_name='content'),
        ),
    ]
