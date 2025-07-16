from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *

@api_view(['GET'])
def metal_list(request):
    data = TypeOfMetal.objects.all()
    serializer = TypeOfMetalSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)
