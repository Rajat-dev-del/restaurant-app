import React, { Component } from 'react'

export default class RestaurantCreate extends Component {

    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null
        }
    }
    createRestaurant(){
        fetch("http://localhost:3000/restaurant" , {
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((Resp)=>{
                console.warn("success")
                alert(`${this.state.name} has been added successfully`);
            })
        })
    }
    render() {
        return (
            <div className="create-restraurant">
                <h1>Create Restaurant </h1>

                <div >
                   <form>
                        <div>
                            <input type="text" placeholder="enter name" onChange={(e) => {this.setState({name: e.target.value})}} required/>
                        </div>
                        <div>
                            <input type="email" placeholder="enter email" onChange={(e) => {this.setState({email: e.target.value})}} required/>
                        </div>
                        <div>
                            <input type="text" placeholder="enter Rating" onChange={(e) => {this.setState({rating: e.target.value})}} required/>
                        </div>
                        <div>
                            <input type="text" placeholder="enter Address" onChange={(e) => {this.setState({address: e.target.value})}} required/>
                        </div>
                        <div>
                            <input type="submit" value="Add restro" onClick={()=>{this.createRestaurant()}} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
