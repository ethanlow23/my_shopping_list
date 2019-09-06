import React, { Component } from 'react';
import ItemForm from './ItemForm';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            name: ''
        };
    }

    componentDidMount() {
        fetch('/items')
            .then(res => res.json())
            .then(data => this.setState({ items: data }));
    }

    deleteItem = (id) => {
        fetch('/items/' + id, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    this.setState((state) => ({
                        items: state.items.filter((item) => item._id !== id)
                    }))
                }
            });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const item = {
            name: this.state.name
        }
        fetch('/items', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(item)})
            .then(res => res.json())
            .then(data => this.setState(state => ({
                items: [data, ...state.items],
                name: ''
            })));
    }

    render() {
        const { items, name } = this.state;
        return (
            <div>
                <li>
                    {items.map((item, id) => (
                        <ul key={id}><button className="deleteBtn" onClick={(e) => this.deleteItem(item._id, e)}>X</button>{item.name}</ul>
                    ))}
                </li>
                <ItemForm name={name} onInputChange={this.onChange} onFormSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default ShoppingList;
