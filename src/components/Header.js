import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <Header>
                 <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/list">List</Link></li>
                    <li><Link to="/create">Create</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/detail">Details</Link></li>
                    <li><Link to="/update">Update</Link></li>
                </ul> 
            </Header>
        )
    }
}
