const React = require("react");
const ReactDOM = require("react-dom");
const ReactDOMServer = require("react-dom/server");

var ErrorModal = React.createClass({
    getDefaultProps: function(){
        return {
            title: "Error"
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        const {title, message} = this.props;
        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );

        // Thirdparty libraries that manipulate the DOM don't work well with React.
        // That's why we use this little trick to re-render the component when it's mounted.
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    },
    render: function () {
        return (
            <div>
            </div>
        );
    }
});

module.exports = ErrorModal;