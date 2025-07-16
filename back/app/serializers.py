from rest_framework import serializers
from .models import TypeOfMetal

class TypeOfMetalSerializer(serializers.ModelSerializer):

    class Meta:
        model = TypeOfMetal
        fields = ('pk', 'name')