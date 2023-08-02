// class component
import React from "react";
class AddContact extends React.Component{
    state={
        name:"",
        email:"",
    }
    add = (e) =>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("Please fill all the fields")
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
        console.log("FROM AddContact.js");
        console.log(this.state);
    }
    render(){
        return(
            <div className="ui main">
                <h2> Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            onChange={(e)=> this.setState({name:e.target.value})}
                            value={this.state.name}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            onChange={(e)=> this.setState({email:e.target.value})}
                            value={this.state.email}
                        ></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}
export default AddContact