import Constant from '../../constants/action.constant';

export const fetchUsersBegin = () => ({
	type: Constant.FETCH_TRIPS_BEGIN
});

export const fetchTrip = (trips) => ({
	type: Constant.FETCH_TRIPS,
	payload: { trips }
});

export const addTrip = (trip) => ({
	type: Constant.ADD_TRIP,
	payload: { trip }
});

export const fetchUsersFailure = error => ({
	type: Constant.FETCH_TRIPS_FAILURE,
	payload: { error }
})

