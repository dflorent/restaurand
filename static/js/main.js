var RestaurandComponent = React.createClass({
    getRestaurants: function() {
        $.ajax({
            url: 'https://restaurand-api.herokuapp.com/api/v1/restaurants',
            cache: false,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: function(data) {
                this.setState({
                    loaded: true,
                    data: _.shuffle(data)
                });
            }.bind(this)
        });
    },
    componentDidMount: function() {
        this.getRestaurants();
    },
    getInitialState: function() {
        return {
            loaded: false,
            data: []
        };
    },
    handleClick: function() {
        this.getRestaurants();
    },
    render: function() {
        if (!this.state.loaded) {
            return (
                <div className="ajax-loader">
                    <img src="static/images/ajax-loader.gif" />
                </div>
            );
        }

        var rows = this.state.data.map(function(restaurant, index) {
            if (index === 0) {
                return (
                    <tr key={restaurant.id} className="active">
                        <td>{restaurant.name}</td>
                    </tr>
                );
            }
            return (
                <tr key={restaurant.id}>
                    <td>{restaurant.name}</td>
                </tr>
            );
        });

        return (
            <div className="restaurand">
                <button onClick={this.handleClick} className="btn btn-primary" type="button">Randomiser</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Liste des restaurants</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
});

ReactDOM.render(
    <RestaurandComponent />,
    document.getElementById('restaurandapp')
);
