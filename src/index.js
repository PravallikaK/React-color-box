import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            color:"",
            initialbgcolor:"red"
        }

    this.inputvaluefun= this.inputvaluefun.bind(this);
    this.formvaluefun=  this.formvaluefun.bind(this);
    }
   
    inputvaluefun=(e)=>{
        this.setState({
            color : e.target.value
        });
    }

    
    //form event
    formvaluefun= (e)=>{
        this.setState({
            initialbgcolor : this.state.color
        });
        e.preventDefault();
    }
    render(){
        var bgcolorStyle = {
            backgroundColor: this.state.initialbgcolor
          };  
        return(
            <div id="container">
            <h1>COLORED BOX</h1>
            <p>Enter the color name or RGB number in the textbox</p>
                <div className="box" style={bgcolorStyle}></div>
                <form className="colorArea" onSubmit= {this.formvaluefun}>
                    <input type="text" onChange= {this.inputvaluefun}></input>
                    <button type="submit" >GO</button>
                    </form>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
