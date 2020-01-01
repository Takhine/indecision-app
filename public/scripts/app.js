'use strict';

console.log('build-it-visible.js is running');

var appRoot = document.getElementById('app');

var isToggled = false;
var handleToggle = function handleToggle() {
    isToggled = !isToggled;
    renderChallenge();
};
var renderChallenge = function renderChallenge() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: handleToggle },
            isToggled ? 'Hide Details' : 'Show Details'
        ),
        isToggled && React.createElement(
            'p',
            null,
            'Hey there!'
        )
    );
    ReactDOM.render(template, appRoot);
};

renderChallenge();
