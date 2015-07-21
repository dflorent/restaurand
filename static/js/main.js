(function($){
    
    var App = {

        init: function() {
            this.getRestaurants();
            $('button').on('click', this.shuffle);
        },

        getRestaurants: function(params) {
            $.ajax({
                url: 'https://restaurand-api.herokuapp.com/api/v1/restaurants',
                cache: false,
                type: 'GET',
                dataType: 'json',
                contentType: 'application/json',
                complete: function() {
                    $('#ajax-loader').remove();
                },
                success: function(data) {
                    App.showRestaurantsList(data);
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
