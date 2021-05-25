import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
export default class RestaurantList extends Component {
    constructor(){
        super();
        this.state={
            list:null,
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/restaurant").then((response)=>{
            response.json().then((result) => {
                this.setState({list:result})
            })
        })
    }
    render() {
        console.warn(this.state);
        return ( 
            <div className="restaurant-list">
                <h1> Restaurant List </h1> 
                {
                    this.state.list ?
                    <div className="container-fluid">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>address</th>
                                    <th>rating</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                        {
                            this.state.list.map((item,i)=>
                                <tr className="" key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.email}</td>
                                    <td><Link to={/update/+item.id}>Edit</Link></td>
                                </tr>
                            )
                        }
                            </tbody>
                        </Table>
                    </div>
                    :
                    <p>Loading...</p>
                }
            </div>
        )
    }   
}

   
  
    
   