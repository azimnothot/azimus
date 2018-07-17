const app = {
    title: 'I love ',
    subtitle: 'If u want me marry, thus get me her',
    options: ['one', 'love']
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
        console.log(app.options);
    }

}
const onFormRemove = (e) => {
    app.options = [];
    render();
    console.log(app.options);
}

const render = () => {
    const template = (
        <div> 
            <h1>h1</h1>
            <p>Print</p>
            <p>Assakom</p>
            <ol>
            {
                app.options.map((number) => {

                    /*var rotr ="https://www.google.com/search?q=" + String(number) + "&rlz=1C1GGRV_ruUZ762UZ762&oq=" + String(number) + "+&aqs=chrome..69i57j0l5.7298j0j8&sourceid=chrome&ie=UTF-8";
                    */
                   var telega = "https://web.telegram.org/#/im?p=@"+ String(number);

                    return <li key={number}><a href={telega}>{number}</a></li>
                })
            }

            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
                <button onClick ={onFormRemove}>remove all</button>

            </form>
        </div>
    );
    ReactDOM.render(template, appRoot); 
}

const appRoot = document.getElementById('app');

render();