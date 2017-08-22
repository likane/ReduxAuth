import {ADD_FLASH_MESSAGE} FROM './types';

export function addFlashMessage(message){
	return {
		type: ADD_FLASH_MESSAGE,
		message
	}
}