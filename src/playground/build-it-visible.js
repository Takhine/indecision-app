console.log('build-it-visible.js is running')

const appRoot = document.getElementById('app');

let isToggled =false;
const handleToggle=()=>{
    isToggled=!isToggled;
    renderChallenge();
}
const renderChallenge = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={handleToggle}>{isToggled ? 'Hide Details':'Show Details'}</button>
            {isToggled &&
                <p>Hey there!</p>
            }
        </div>
    );
    ReactDOM.render(template,appRoot);
}

renderChallenge();