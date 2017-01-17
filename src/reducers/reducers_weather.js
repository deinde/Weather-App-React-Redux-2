//import action into reducer
import {FETCH_WEATHER} from '../actions/index'
export default function(state=[],action){
	switch(action.type){
		case FETCH_WEATHER:
		//switch will loop and find correct case of action type
		//since data structure is a list we use an array not just 'state' variable
		//the first return below is adding current'state' (empty array intially)
		// to next state(list of cities)'action.payload.data'
		//important!!! states should not be mutated
		//VERY IMPORTANT !!!!!return state.concat([action.payload.data]);
		//below is the es6 equivalence to above.
		return [action.payload.data,...state]
	}
 return state;
}


//remeber that all this goes back to combine reducers in reducers index.js!!!!
//this is your apps data being retured !!!! 