import Constant from '../../constants/action.constant';
import NetworkConstant from '../../constants/network.constant';

let { baseURL } = NetworkConstant;
// export const fetchUsers = (userId = 1) => {
// 	console.log("fetchuser");
// 	return dispatch => {
// 		dispatch(fetchUsersBegin());
// 		return fetch(`${baseURL}posts?userId=${userId}`)
// 			.then(res => res.json())
// 			.then(json => {
// 				let Id = json.length && json[0].userId,
// 					hasMore = Id + 1 < 11;
// 				setTimeout(() => {
// 					dispatch(fetchUsersSuccess(json, hasMore, Id));
// 				}, 3000)
// 			})
// 			.catch(error => dispatch(fetchUsersFailure(error)));
// 	};
// }

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

