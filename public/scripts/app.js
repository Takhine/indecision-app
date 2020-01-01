'use strict';

console.log('build-it-visible.js is running');

var appRoot = document.getElementById('app');

var renderChallenge = function renderChallenge() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        )
    );
    ReactDOM.render(template, appRoot);
};

renderChallenge();
