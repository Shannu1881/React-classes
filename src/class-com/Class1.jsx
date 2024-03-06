import React, { Component } from 'react';

class FirstClass extends Component{
    constructor(){
        super()
        this.state = {
            name : "shannu",
            role : "ui developer",
            address : {
                 street : "#131 A",
                 city : "Bangalore",
                 state : "KA"
            },
            num : [1,2,3,4,5,6,7,8],
            counter : 0
        };

    }

    increment = () =>{
        this.setState({
            counter : this.state.counter + 1
        })
    }

    decrement = () =>{
        this.setState({
            counter : this.state.counter - 1
        })
    }


   render(){
    return(
        <>
          <h1> Hello react js </h1>
          
          <div>
            <p> {this.state.counter} </p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
          </div>

         <div>
            <p> Hello : {this.state.name}  </p>
            <p> Hello : {this.state.role}  </p>
            <p> Hello : {this.state.address.street}  </p>
            <p> Hello : {this.state.address.city}  </p>
            <p> Hello : {this.state.address.state}  </p>
         </div>

         <div>
            {
              this.state.num.map((item)=>{
                return(
                    <li> {item} </li>
                )
              })
            }
         </div>

        </>
    )
   }
}

export default FirstClass;