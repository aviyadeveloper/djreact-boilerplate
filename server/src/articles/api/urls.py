from articles.api.views import ArticlesViewSet
from django.urls import path
from rest_framework.routers import DefaultRouter

# from .views import ArticleListView, ArticleDetailView,

router = DefaultRouter()
router.register(r'', ArticlesViewSet, basename='articles')
urlpatterns = router.urls

# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('<pk>', ArticleDetailView.as_view())
# ]
