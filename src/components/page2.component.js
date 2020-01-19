import React from 'react';
import { useSelector } from 'react-redux';

const PageTwo = ()=>{
	const store_data = useSelector(state=>state);
	return(
		<div>
			<h2>This is Page2</h2>
			This is store data
			<p>{JSON.stringify(store_data)}</p>
		</div>
	)
}

export default PageTwo;