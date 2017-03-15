var React = require('react');
import Nav from 'Nav';

var Main = (props) => {
    return(
        <div>
            <Nav />
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
            {/* we use this anywhere we want to put the children, can remove the this. 
            when using stateless functional component with props already passed Main
            */}
            
        </div>
    )
};

export default Main;