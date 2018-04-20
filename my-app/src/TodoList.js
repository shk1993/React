import React,{Component} from "react";
import ToDoItems from "./ToDoItems";
class TodoList extends Component{

	constructor(props){
		super(props);
		this.state = {
			items:[]
		};
		//defining addItem handler
		this.addItem = this.addItem.bind(this);
	}

	addItem(e){
		if(this._inputElement.value != ""){
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()
			};
	

			this.setState((prevState)=>{
				return {
					items: prevState.items.concat(newItem)
				};
			});

			this._inputElement.value = "";
		}
		e.preventDefault();
		console.log(this.state.items)
		
	}



	render(){
		return(
			<div className = "todoListMain">
				<div className = "header">
					<form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a} placeholder = "enter task">
						</input>
						<button type = "submit"> add </button>
					</form>
				</div>
				<ToDoItems entries = {this.state.items}/>
			</div>
			);
	}
}

export default TodoList;