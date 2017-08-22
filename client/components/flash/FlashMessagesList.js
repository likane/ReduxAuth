import React from 'react';
import FlashMessage from './FlashMessage';
import {connect} from 'react-redux';
import {deleteFlashMessage} from '../../actions/FlashMessages';

class FlashMessagesList extends React.Component {
	render() {
		return (
			const messages = this.props.messages.map(message => 
				<FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
				);
			<div>
				{messages}
			</div>
			);
	}
}

FlashMessagesList.propTypes ={
	messages: React.propTypes.array.isRequired,
	deleteFlashMessage: React.propTypes.func.isRequired
}

function mapStateToProps(state){
	return {
		messages:state.FlashMessages
	}
}

export default connect(mapStateToProps, {deleteFlashMessage}) FlashMessagesList;