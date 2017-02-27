var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return(
        <div>
            <Nav />
            <h2>Main Component</h2>
            {/* we use this anywhere we want to put the children, can remove the this. 
            when using stateless functional component with props already passed Main
            */}
            {props.children}
        </div>
    )
};

module.exports = Main;