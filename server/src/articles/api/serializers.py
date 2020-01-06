from rest_framework import serializers
from ..models import Article


class ArticleSerializerFull(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'content')


class ArticleSerializerShort(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title')