import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';


 class WeatherList extends Component{
  //below is a render helper function
  renderWeather(cityData){
    
    const orange ='orange';
    const black ='black';
    const green ='green';

  	const name = cityData.city.name;
    const temp = cityData.list.map(weather=>weather.main.temp);
    const pressure = cityData.list.map(weather=>weather.main.pressure);
    const humidity = cityData.list.map(weather=>weather.main.humidity);
    console.log(temp);
    console.log('the Pressure is :',pressure);
    console.log('The Humidity is :', humidity)
  
   return(
    //you must use a key!!!! it can be any unique property!!!
    //if not you get warninigs!!

     <tr key={name}>
      <td>{name}</td>
      
       <td><Chart data={temp} color={orange} units="K"/> </td>
       <td><Chart data={pressure} color={green} units="hpa"/> </td>
       <td><Chart data={humidity} color={black} units="%"/> </td>
      
     
     </tr>

   	);
  }
	render(){
		return(
        <table className='table table-hover'>
         <thead>
          <tr>
           <th>City</th>
           <th>Temprature: units:'K'</th>
           <th>Pressure units:'hPa'</th>
           <th>Humidity units:'%'</th>
          </tr>
         </thead>
         <tbody>
          {this.props.weather.map(this.renderWeather)}
         </tbody>
        </table>
		);
	}
}

// function mapStateToProps(state){
// 	return {weather:state.weather}
// }
//remember 
// below equivalent to above with new es6 syntax

function mapStateToProps({weather}){
	return {weather};
}

export default connect(mapStateToProps)(WeatherList)





