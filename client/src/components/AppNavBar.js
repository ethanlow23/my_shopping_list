import React, { Component } from 'react';

class AppNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="navBar">
                <h1>MY SHOPPING LIST</h1>
            </div>
        );
    }
}

export default AppNavBar;
