import React,{Component} from "react";
class Classproperties extends Component{
    constructor(props){
        super();
        console.log(this);
    }
    render(){
        return <div>
            <h1>{this.props.id}</h1>
        </div>
    }
}
export default Classproperties;