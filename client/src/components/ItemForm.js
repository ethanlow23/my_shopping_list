import React, { Component } from 'react';

class ItemForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onFormSubmit}>
                    <input type="text" name="name" onChange={this.props.onInputChange} value={this.props.name} />
                    <br />
                    <button className="submitBtn" type="submit">Add Item</button>
                </form>
            </div>
        );
    }
}

export default ItemForm;
