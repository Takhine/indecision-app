console.log('build-it-visible.js is running')

const appRoot = document.getElementById('app');

const renderChallenge = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
        </div>
    );
    ReactDOM.render(template,appRoot);
}

renderChallenge();