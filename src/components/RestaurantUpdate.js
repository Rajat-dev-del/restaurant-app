import React, { Component } from 'react'

export default class RestaurantUpdate extends Component {

    constructor(props){
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/restaurant/'+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                
                this.setState({
                    name:result.name,
                    email:result.email,
                    rating:result.rating,
                    address:result.address
                })
                console.log(result);
            })
        })
    }
    
    updateRestaurant(){
        fetch("http://localhost:3000/restaurant/"+ this.props.match.params.id , {
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((Resp)=>{
                console.warn("success")
                alert(`${this.state.name} has been updated successfully`);
            })
        })
    }
    

    render() {
        //console.warn("id is : " + this.props.match.params.id );

        return (
            <div className="create-restraurant">
                <h1> Update Restaurant </h1>

                <form>
                    <div>
                        <input type="text" placeholder="enter name" onChange={(e) => {this.setState({name: e.target.value})}} value={this.state.name} required/>
                    </div>
                    <div>
                        <input type="email" placeholder="enter email" onChange={(e) => {this.setState({email: e.target.value})}} value={this.state.email} required/>
                    </div>
                    <div>
                        <input type="text" placeholder="enter Rating" onChange={(e) => {this.setState({rating: e.target.value})}} value={this.state.rating} required/>
                    </div>
                    <div>
                        <input type="text" placeholder="enter Address" onChange={(e) => {this.setState({address: e.target.value})}} value={this.state.address} required/>
                    </div>
                    <div>
                        <input type="submit" value="Update restro" onClick={()=>{this.updateRestaurant()}} />
                    </div>
                </form>
            </div>
        )
    }
}
