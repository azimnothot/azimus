const app = {
    options: ['one', 'love']
}

class Narod extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <Form />
            </div>
        );
    }
}

class Header extends React.Component {
     render(){
        return (
            <div id="reds">
                <h1>Hello Narod</h1>
                <h3>Your life your choice...</h3>
            </div>
        );
     }
}

class Action extends React.Component {
    render(){
        return(
            <div id="action">
                <button>ACTION!</button>
            </div>
        );
    }
}

class Optionee extends React.Component{
    render(){
        return(
            <div>
                <p>Here is some texts...</p>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return(
            <div id="action">
                <ul>
                    {
                        app.options.map((number) => {
                            return <li key={number}>{number}</li>
                        })
                        
                    }
                    
                </ul>
                <Optionee/>
            </div>
        )
    }
}

class Form extends React.Component {
    render(){
        return(
            <div id="action">
                <form>
                    <input type="text"/>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

 ReactDOM.render(<Narod />, document.getElementById('app'));