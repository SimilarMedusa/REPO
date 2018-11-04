import React, {Component} from 'react';


/*const items = ['Eat chicken', 'Sleep', 'Walk around']*/


class ToDoList extends Component {


    constructor(props) {
        super(props);

        this.state = {
            items: ["valgyk", "gerk", "miegok"],
            inputValue: "",
        }
    }

    //
    // addItem(e) {
    //
    //     e.preventDefault();
    //     const {items} = this.state;
    //     const newItems = this.newItems.value;
    //     this.setState({
    //         items: [...this.state.items, newItems]
    //     })
    // }

    addItem(e) {
        const {items, inputValue} = this.state;
        this.setState({items: [...items, inputValue], inputValue: ""})
    }


    onTextChange = (e) => {
        this.setState({inputValue: e.target.value})
    }


    render() {

        const {items, inputValue} = this.state;

        return (
            <div>
                <h1>To do list:</h1>
                <body> {
                    items.map((item) => {
                        return (
                            <li key={item.toString()}>
                                <div>
                                    {item}
                                </div>
                                <button>x</button>
                            </li>
                        )
                    })
                }
                </body>
                <button onClick={(e) => {
                    this.addItem(e)
                }}> Add to list:
                </button>
                <input type="text" value={inputValue} onChange={this.onTextChange}/>
            </div>
        )
    }
}


export default ToDoList;