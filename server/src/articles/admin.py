from django.contrib import admin

# Register your models here.
from markdownx.admin import MarkdownxModelAdmin
from .models import Article

admin.site.register(Article, MarkdownxModelAdmin)
