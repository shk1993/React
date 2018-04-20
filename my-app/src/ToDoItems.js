import React,{Component} from "react";
import FlipMove from "react-flip-move";

class ToDoItems extends Component{

    constructor(props){
        super(props);
        this.getList = this.getList.bind(this);
    }

    getList(item){
        return <li onClick={()=>this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    delete(key){
        this.props.delete(key);
    }

    render(){
        var todoEntries = this.props.entries;
        var list = todoEntries.map(this.getList);
        return (
            <ul className = "theList">
                <FlipMove duration={250} easing="ease-out">
                    {list}
                </FlipMove>
            </ul>
        );
    }
};

export default ToDoItems;