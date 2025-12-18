import store from '../store';
import { updateName, updateEmail } from '../store/actions/userActions';

describe('Redux Store', () => {
  it('should have initial state with empty name and email', () => {
    const initialState = store.getState();
    expect(initialState.name).toBe('');
    expect(initialState.email).toBe('');
  });

  it('should update name when updateName action is dispatched', () => {
    store.dispatch(updateName('Thomas Edward Stark'));
    const state = store.getState();
    expect(state.name).toBe('Thomas Edward Stark');
    expect(state.email).toBe('');
  });

  it('should update email when updateEmail action is dispatched', () => {
    store.dispatch(updateEmail('tonystark@starkindustries.com'));
    const state = store.getState();
    expect(state.email).toBe('tonystark@starkindustries.com');
    expect(state.name).toBe('Thomas Edward Stark');
  });

  it('should update both name and email correctly', () => {
    // Reset store
    store.dispatch(updateName(''));
    store.dispatch(updateEmail(''));
    
    store.dispatch(updateName('John Doe'));
    store.dispatch(updateEmail('john@example.com'));
    
    const state = store.getState();
    expect(state.name).toBe('John Doe');
    expect(state.email).toBe('john@example.com');
  });
});