// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT',
  text,
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})

export { setTextFilter, sortByDate };