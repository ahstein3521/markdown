import React from 'react';

const Window = (props) => {
	return (
		<div id={props.id} style={{width:props.width}}>
			{props.children}
		</div>
	)
}

export default Window;