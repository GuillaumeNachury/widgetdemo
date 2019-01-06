/**
 *  Merge redux reducers
 *  @author Guillaume Nachury
 */
import { combineReducers } from 'redux';
import appContent from './AppContent';

const appReducers = combineReducers({
  appContent
});

export default appReducers