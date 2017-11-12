const defaultState = {
  name: 'rogan@gmail.com',
  email: '1231238'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return action.payload
  
    default:
      console.log('>', state, action)
      return state;
  }
}