/**
 * Middleware that enhance redux actions they can used in asynchronous sequence
 * @author Guillaume Nachury
 */

const asyncDispatcMiddleware = store => next => action => {
    let syncActivityFinished = false;
    let actionQueue = [];
  
    function flushQueue() {
      actionQueue.forEach(a => store.dispatch(a));
      actionQueue = [];
    }
  
    function asyncDispatch(asyncAction) {
      actionQueue = actionQueue.concat([asyncAction]);
  
      if (syncActivityFinished) {
        flushQueue();
      }
    }
  
    const actionWithAsyncDispatch = Object.assign({}, action, {asyncDispatch});
  
    next(actionWithAsyncDispatch);
    syncActivityFinished = true;
    flushQueue();
  };
  
  export default asyncDispatcMiddleware;
  