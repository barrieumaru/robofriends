import React, {Component} from 'react';
import CardList from '../components/cardlist';
import SearchBox from '../components/searchBox';
//import { robots} from './robots';
import './App.css';
import Scroll from '../components/Scroll';

// const state = {
	
// }

class App extends Component{
	constructor(){
		super()
		this.state = {
			//robots: robots,
			robots: [],
			searchfield: ''
		}
	}

	//api version
	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
		.then(users => this.setState({robots: users}));
		}
		
	
onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
	
}

	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
		return !robots.length ?
			<h1>Loading</h1> :
		
		(

		<div className="tc">
		<h1 className='f1'>Robofriends</h1>
		<SearchBox searchChange={this.onSearchChange} />
		 <Scroll>
		    <CardList robots={filteredRobots} />
		  </Scroll >

		 <p> &copy; 2020 Barrie Umaru </p>
		 </div>
		);
	}
	
}

export default App;