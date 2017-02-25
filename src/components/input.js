import React from 'react';
import Window from './window';


const Input = props => {
	return <Window width='100%' id='left'>
		<strong>Enter markdown in the space below:</strong>
		<textarea onChange={props.onChange} value={props.text} autofocus></textarea>
	</Window>
}

export default Input;