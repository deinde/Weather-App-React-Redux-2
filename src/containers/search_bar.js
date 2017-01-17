import React,{Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term:''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event){
		console.log(event.target.value);
		//term is passed to this.props.fetchWeather(this.state.term)
		//which calls the action caller fetchWeather(city) in actions folder
		//made available by redux {connect}, {bindActionsCreators} and{fetchWeater}
		this.setState({term: event.target.value});

	}
	//prevents user from submiting by just pressing enter
	//while form is on focus
	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term:''})
	}
	render(){
		return(
     <form onSubmit={this.onFormSubmit} className="input-group">
      <input
        placeholder='Get the next 5 day forcast in your favorite city!'
        className='form-control'
        value={this.state.term}
        onChange = {this.onInputChange}
       />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">submit</button>
      </span>
     </form>
		);
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);



