import React from 'react';
import Window from './window';
import marked from 'marked'

const Output = props => {
	return <Window width= {props.width} id='right'>
				<div id = 'handle' onMouseDown = {props.onMouseDown}></div>
				<span dangerouslySetInnerHTML= {props.setHTML}></span>
			</Window>
}
export default Output;