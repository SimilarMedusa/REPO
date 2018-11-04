import React, {Component} from 'react';


/*const items = ['Eat chicken', 'Sleep', 'Walk around']*/


class ToDoList extends Component {


    constructor(props) {
        super(props);
        props.test
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

    onRemoveItem = (item) => {
        let items = [...this.state.items];
        const index = items.indexOf(item);
        items.splice(index, 1);
        this.setState({items});
    };


    render() {
        const {items, inputValue} = this.state;

        return (
            <div className="App-header">
                <h1>To do list:</h1>
                <div>{

                    items.map((item) => {
                        return (
                            <div className="List-item" key={item.toString()}>
                                <div>
                                    {item}
                                </div>
                                <button onClick={() => this.onRemoveItem(item)}>x</button>
                            </div>
                        )
                    })
                }
                </div>
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