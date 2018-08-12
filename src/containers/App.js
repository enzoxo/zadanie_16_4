import React from 'react';
import style from './App.css';
import uuid from 'uuid';

class App extends React.Component {
	constructor(props) {
		super(props);
	this.state = {
		data: []
		};
	}
	addTodo(val){
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}


	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder})	
}
}

var remainder = this.state.data.filter(function(todo){
	return todo.id !== id;
});

render() {
	return (
		<div className ={style.TodoApp}>
			Tutaj pojawią się komponenty 
		</div>
		);
	}

export default App;
