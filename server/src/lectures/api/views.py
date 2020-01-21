from rest_framework.viewsets import ModelViewSet

from ..models import Lecture
from .serializers import LectureSerializer


class LecturesViewSet(ModelViewSet):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer
