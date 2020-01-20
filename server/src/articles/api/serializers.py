from rest_framework import serializers
from ..models import Article


class ArticleSerializerFull(serializers.ModelSerializer):

    content = serializers.SerializerMethodField()

    def get_content(self, article):
        return article.content.file.read()

    class Meta:
        model = Article
        fields = ('__all__')


class ArticleSerializerShort(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id',
                  'title',
                  'description',
                  'uploadDate',
                  'lastModified',
                  'publicationDate',
                  'image'
                  )
