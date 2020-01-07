from rest_framework.viewsets import ModelViewSet

from ..models import Article
from .serializers import ArticleSerializerFull, ArticleSerializerShort


class ArticlesViewSet(ModelViewSet):
    queryset = Article.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            serializer = ArticleSerializerShort
        else:
            serializer = ArticleSerializerFull
        return serializer

    queryset = Article.objects.all()


# from rest_framework.generics import ListAPIView, RetrieveAPIView
# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializerShort


# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializerFull
