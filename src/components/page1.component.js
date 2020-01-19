import React,{useState} from 'react';
import { useDispatch,useSelector }  from 'react-redux';
import { setData } from '../actions/action.js';
import { useHistory } from 'react-router-dom';

const PageOne = ()=>{
	const [text_data, text_data_fun] = useState("");
	const state = useSelector(state=>state);
	const dispatch = useDispatch();
	const history = useHistory();
	return(
		<div>
			<h2>This is Page1</h2>
			<input type="text" onChange={(e)=>text_data_fun(e.target.value)}/>
			<button onClick={()=>dispatch(setData(text_data))}>store</button>
			<button onClick={()=>history.push('/two')}>two</button>
			<p>state values : {JSON.stringify(state)}</p>
		</div>
	)
}

export default PageOne;