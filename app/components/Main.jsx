var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
    render: function() {
        return(
            <div>
                <Nav />
                <h2>Main Component</h2>
                {/* we use this anywhere we want to put the children */}
                {this.props.children}
            </div>
        );
    }

});

module.exports = Main;