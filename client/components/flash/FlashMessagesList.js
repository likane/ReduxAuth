import React from 'react';
import FlashMessage from './FlashMessage';
import {connect} from 'react-redux';

class FlashMessagesList extends React.Component {
	render() {
		return (
			const messages = this.props.messages.map(message => 
				<FlashMessage key={message.id} message={message} />
				);
			<div>
				{messages}
			</div>
			);
	}
}

FlashMessagesList.propTypes ={
	messages: React.propTypes.array.isRequired
}

function mapStateToProps(state){
	return {
		messages:state.FlashMessages
	}
}

export default connect(mapStateToProps) FlashMessagesList;