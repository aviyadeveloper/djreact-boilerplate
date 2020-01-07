from os.path import splitext
from uuid import uuid4
from django.db import models

# Create your models here.


def hashImageFilename(instance, name):
    ext = splitext(name)[1]
    return "images/{}{}".format(uuid4(), ext)


class Article(models.Model):
    title = models.CharField(("title"), max_length=100)
    content = models.TextField(("content"), default='')
    description = models.TextField(("description"), default='')
    uploadDate = models.DateTimeField(("uploadDate"), auto_now=True)
    lastModified = models.DateTimeField(("uploadDate"), auto_now=True)
    publicationDate = models.DateField("publicationDate")
    image = models.ImageField("image", upload_to=hashImageFilename)

    def __str__(self):
        return self.title
