// Simple test to verify Redux implementation
import store from './store/index.js';
import { updateName, updateEmail } from './store/actions/userActions.js';

console.log('Initial state:', store.getState());

store.dispatch(updateName('Thomas Edward Stark'));
console.log('After updating name:', store.getState());

store.dispatch(updateEmail('tonystark@starkindustries.com'));
console.log('After updating email:', store.getState());