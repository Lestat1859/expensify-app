import authReducer from '../../reducers/auth';


test('should login with id', () => {
  const action = {
    type: 'LOGIN',
    uid: 'toto'
  };
  const state = authReducer({},action);
  expect(state.uid).toBe(action.uid)
});

test('should logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid:'123soleil'},action);
  expect(state).toEqual({});
});
