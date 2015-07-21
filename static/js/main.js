(function($){
    
    var App = {

        init: function() {
            $.getJSON('static/js/credentials.json', this.getRestaurants);
            $('button').on('click', this.shuffle);
        },

        getRestaurants: function(params) {
            $.ajax({
                url: params.apiURL.concat('/restaurants'),
                cache: false,
                type: 'GET',
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    App.showRestaurantsList(data);
                },
                headers: {
                    'Authorization': 'Basic ' + window.btoa(params.apiUsername.concat(':', params.apiPassword)),
                },
            });
        }, 
        
        showRestaurantsList: function(data) {
            var source = $('#restaurants-list').html();
            var template = Handlebars.compile(source);
            var context = {data};
            $('tbody').append(template(context));
        },

        shuffle: function(e) {
            e.preventDefault();
            e.stopPropagation();

            var tbody = $('tbody');
            var shuffled = _.shuffle($('tbody tr'));
            tbody.empty();

            $.each(shuffled, function(index, el) {
                tbody.append($(el));
            });

            $('tbody tr.first-row').removeClass('first-row');
            $('tbody tr:first-child').addClass('first-row');

            return false; 
        },
    };

    App.init();    

  
})(jQuery);
