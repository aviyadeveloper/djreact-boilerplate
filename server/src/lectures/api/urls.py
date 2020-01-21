from lectures.api.views import LecturesViewSet
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', LecturesViewSet, basename='lectures')
urlpatterns = router.urls
