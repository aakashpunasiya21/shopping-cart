import LOGIN from '../constants/ActionTypes'
const initialState = {
  usr: [],
  addshow: false,
  show: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    
    case LOGIN:
      return {
        ...state,
        show: action.payload

      }
    default:
      return state;
  }
}
export default login;