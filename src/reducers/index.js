import { combineReducers } from 'redux';


//does not matter what you call it 'WeatherReducer' it is pulling in the default
//from reducers_weather.js which we did not name speciffically. its just default 
import WeatherReducer from './reducers_weather';


//this is what is shot back out to the app via mapStateToProps!!!!
//'weather' is what will be shot directly back in to app speciffically!!!
const rootReducer = combineReducers({
 weather:WeatherReducer
});

export default rootReducer;

