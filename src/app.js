console.log('App.js is running')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderInput();
    }
}

const resetOptions = () => {
    app.options = [];
    console.log('Reset');
    renderInput();
}

const onMakeDecision=()=>{
    const randomNum=Math.floor(Math.random()* app.options.length);
    const option=app.options[randomNum];
    alert(option);
}
const appRoot = document.getElementById('app');

const renderInput = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ?
                <p>Here are you options:</p>
                :
                <p>No options.</p>}
            <button onClick={onMakeDecision} disabled={app.options.length===0}>What should I do?</button>
            <button onClick={resetOptions}>Remove all</button>
            <ol>
                {app.options.map((option) => {
                    return (
                        <li key={option + Math.random(1, 100)}>{option}</li>
                    )
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderInput();