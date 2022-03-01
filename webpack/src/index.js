import Taggle from 'taggle';

(function() {
   

var taggle = new Taggle('tag',{
    hiddenInputName : [String='taggles'],
    onTagAdd: function(event, tag) {
        document.getElementById("id_search_term").disabled = true
    },
    onTagRemove: function(event, tag) {
        if (taggle.getTags().values.length == 0) {
            document.getElementById("id_search_term").disabled = false
            }
            }
    
});

}());