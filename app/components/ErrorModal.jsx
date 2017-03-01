var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function() {
         var {title, message} = this.props;
        //this is so that we dont Mutate the DOM
        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">Okay</button>
                </p>
            </div>
        );
        //jQuery object with contents we want to add to DOM
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        //returns DOM node where this component lives, use jQuery html method to pass markup to show to screen
        $(ReactDOM.findDOMNode(this)).html($modal);
        //new instance of model 
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {
       
        return (
            <div>
            </div>
        )
        
    }
});

module.exports = ErrorModal;
