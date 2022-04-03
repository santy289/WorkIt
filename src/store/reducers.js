const initialState = {};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'X':
      return {
        name: state.id,
      };
    case 'Y':
      return {
        name: state.id,
      };
    default:
      return state;
  }
}
export default reducer;
