import * as actionTypes from "./actionType"


const initialState = {
	isLoading: false,
	isError: false,
	ROOMCOUNT:1,
	TRAVELERCOUNT:2
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {

		case actionTypes.RoomCountrequest:
			return {
				...state,
				ROOMCOUNT:payload
			}

		case actionTypes.TravelerCountRequest:
			return {
				...state,
				TRAVELERCOUNT:payload
			}


		default:
			return state;
	}
};
