import ActionConstant from '../../constants/action.constant';

const initialState = {
  trips: [],
  isLoading: false,
  error: null
};

export default function tripReducer(state = initialState, action) {
  console.log({ action })
  let { FETCH_TRIPS_BEGIN, FETCH_TRIPS, FETCH_TRIPS_FAILURE, PUT_TRIPS_SUCCESS, ADD_TRIP } = ActionConstant;
  switch (action.type) {
    case FETCH_TRIPS_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case FETCH_TRIPS:
      return {
        ...state,
        isLoading: false
      };

    case FETCH_TRIPS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        trips: []
      };

    case ADD_TRIP:
      console.log("reduce: ", {
        ...state,
        trips: [...state.trips, action.payload.trip]
      })
      return {
        ...state,
        trips: [...state.trips, action.payload.trip]
      }

    case PUT_TRIPS_SUCCESS:
      let { id } = (action.payload || {}).trips || {};
      let trips = state.trips.map(itm => {
        if (itm.id === id) {

        }
        return itm;
      });
      return {
        ...state,
        trips: trips || []
      }

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}