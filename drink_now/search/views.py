from django.shortcuts import render

import cocktailDB
# Create your views here.
from django.http import HttpResponse
from .forms import SearchForm
from django.shortcuts import render




def search(request):
    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():
            search_term = form.cleaned_data.get('search_term')
            result = cocktailDB.search_by_name(search_term)
            return render(request, 'result.html', {'result': result, 'form': form})
        else:
            form = SearchForm
            return render(request, 'search.html', {'form': form})


    else:
        form = SearchForm
        return render(request, 'search.html', {'form': form})
