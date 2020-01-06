from rest_framework.generics import ListAPIView, RetrieveAPIView

from ..models import Article
from .serializers import ArticleSerializerFull, ArticleSerializerShort


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializerShort


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializerFull
