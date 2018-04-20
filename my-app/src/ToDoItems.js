import React,{Component} from "react";

class ToDoItems extends Component{

    getList(item){
        return <li key={item.key}>{item.text}</li>
    }
    render(){
        var todoEntries = this.props.entries;
        var list = todoEntries.map(this.getList);
        return (
            <ul className = "theList">
                {list}
            </ul>
        );
    }
};

export default ToDoItems;