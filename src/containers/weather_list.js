import React,{Component} from 'react';
import {connect} from 'react-redux';
// import {Sparklines,SparklinesLine} from 'react-sparklines';
import { Sparklines, SparklinesLine } from 'react-sparklines';




 class WeatherList extends Component{
  //below is a render helper function
  renderWeather(cityData){
  	const name = cityData.city.name;
    const temp = cityData.list.map(weather=>weather.main.temp);
    console.log(temp);
   return(
    //you must use a key!!!! it can be any unique property!!!
    //if not you get warninigs!!

     <tr key={name}>
      <td>{name}</td>
      <td>
        <Sparklines height={120} width={180}  data={temp}>
         <SparklinesLine color="red"/>
        </Sparklines>
      </td>
     </tr>

   	);
  }
	render(){
		return(
        <table className='table table-hover'>
         <thead>
          <tr>
           <th>City</th>
           <th>Temprature</th>
           <th>Pressure</th>
           <th>Humidity</th>
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





