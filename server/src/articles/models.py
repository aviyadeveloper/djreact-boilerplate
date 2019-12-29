from django.db import models

# Create your models here.


class Article(models.Model):
    title = models.CharField(("title"), max_length=50)
    content = models.TextField(("content"))

    def __str__(self):
        return self.title
