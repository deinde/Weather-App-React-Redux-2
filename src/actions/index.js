//importing the ajax api called axios which returns a promise
//remember that there is middle ware that checks for promises before it is 
//sent to a reducer !!important to know
//the middle ware will wait till the status 200 comes back before 
//sending it to a reducer !!! very important to know this !important
import axios from 'axios';

const API_KEY = 'c378433be0e89480997b0fa3e60db201';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//exporting 'FETCH_WEATHER' so can be used by reducers_weather.js
export const FETCH_WEATHER  = 'FETCH_WEATHER';

//exporting so can be used by search_bar.js
//!!!important once imported into search_bar.js action.type and payload will be dispached to reducer_weather.js

export function fetchWeather(city){
	//root url plus the dynamically adding the city
	const url = `${ROOT_URL}&q=${city},us`;
  //this returns a axios get request promise upon success status
	const request = axios.get(url);
	console.log('Request is :',request);
	//below is the returned action !!this is what is sent to reducer_weather.js
	//this is the part that makes it an action!!!!!!!!!!
	return{
		type:FETCH_WEATHER,
    payload:request
	};
}