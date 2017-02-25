import React,{Component} from 'react';
import reactDOM from 'react-dom';
import marked from 'marked';
import defaultText from "./defaultMarkup";

import Input from './input';
import Output from './output';

export default class TextEditor extends Component{

	constructor(props){
		super(props);
		
		this.minWidth = 400;

		this.state = {
			input:defaultText,
			right:'50%',
			isResizing:false
		}
	}
	setHTML(){
		return {__html:marked(this.state.input,{sanitize:true})}
	}
	resize(event){
		if(this.state.isResizing){
			const width = this.container.offsetWidth;
			const offset = this.container.offsetLeft;
			const maxWidth = width - this.minWidth;
			const newWidth = width - event.clientX - offset;
			
			if(this.minWidth <= newWidth && maxWidth>= newWidth) this.setState({right:newWidth+"px"});
		}
	}

	render(){
		return(
			<div id='container' onMouseMove = {(e)=> {this.resize(e)}} ref={self => this.container=self} onMouseUp = {()=> {this.setState({isResizing:false})}}>
				<div id='title'><h3>Markdown Editor</h3></div>
						
				<Input text={this.state.input} onChange = {e=>this.setState({input:e.target.value})} />	
				
				<Output onMouseDown =  {()=>{this.setState({isResizing:true})}} width= {this.state.right} setHTML={this.setHTML()}/>
			</div>
		)
	}
}