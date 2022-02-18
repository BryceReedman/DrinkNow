from .views import search as search_view
from django.urls import path
urlpatterns = [
    path('', search_view, name='search'),
]