'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = {
    options: ['one', 'love']
};

var Narod = function (_React$Component) {
    _inherits(Narod, _React$Component);

    function Narod() {
        _classCallCheck(this, Narod);

        return _possibleConstructorReturn(this, (Narod.__proto__ || Object.getPrototypeOf(Narod)).apply(this, arguments));
    }

    _createClass(Narod, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, null),
                React.createElement(Options, null),
                React.createElement(Form, null)
            );
        }
    }]);

    return Narod;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'reds' },
                React.createElement(
                    'h1',
                    null,
                    'Hello Narod'
                ),
                React.createElement(
                    'h3',
                    null,
                    'Your life your choice...'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'action' },
                React.createElement(
                    'button',
                    null,
                    'ACTION!'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Optionee = function (_React$Component4) {
    _inherits(Optionee, _React$Component4);

    function Optionee() {
        _classCallCheck(this, Optionee);

        return _possibleConstructorReturn(this, (Optionee.__proto__ || Object.getPrototypeOf(Optionee)).apply(this, arguments));
    }

    _createClass(Optionee, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Here is some texts...'
                )
            );
        }
    }]);

    return Optionee;
}(React.Component);

var Options = function (_React$Component5) {
    _inherits(Options, _React$Component5);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'action' },
                React.createElement(
                    'ul',
                    null,
                    app.options.map(function (number) {
                        return React.createElement(
                            'li',
                            { key: number },
                            number
                        );
                    })
                ),
                React.createElement(Optionee, null)
            );
        }
    }]);

    return Options;
}(React.Component);

var Form = function (_React$Component6) {
    _inherits(Form, _React$Component6);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'action' },
                React.createElement(
                    'form',
                    null,
                    React.createElement('input', { type: 'text' }),
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        'Save'
                    )
                )
            );
        }
    }]);

    return Form;
}(React.Component);

ReactDOM.render(React.createElement(Narod, null), document.getElementById('app'));
