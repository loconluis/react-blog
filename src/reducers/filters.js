//FILTER REDUCER
const defaultStateFilterReducer = {
  text: '',
  sortBy: 'date',
};

const filtersReducer = (state = defaultStateFilterReducer, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.text };
    default:
      return state;
  }
}

export default filtersReducer;