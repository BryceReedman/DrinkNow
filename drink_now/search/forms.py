from crispy_forms.bootstrap import InlineCheckboxes
from django import forms
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit, Row, Column, Layout, Div


class SearchForm(forms.Form):
    search_term = forms.CharField(label='',widget=forms.TextInput(attrs={'size':80}))

    def __init__(self, *args, **kwargs):
        self.helper = FormHelper()
        self.helper.form_tag = False
        self.helper.layout = Layout(

                Div('search_term', css_class='col-sm-5'),
                Div(Submit('submit', 'Search'), css_class='col-sm-1'),

        )
        super().__init__(*args, **kwargs)

        self.helper.form_method = 'post'





