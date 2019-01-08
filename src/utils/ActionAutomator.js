/**
 * Helper class to schedule auto dispatched redux action
 *
 * @author Guillaume Nachury
 */

class Automator{

    /**
     * Register the redux store you want to use
     * @param {*} store Redux store
     */
    init(store){
        this._store = store;
        this._tasks = {};
    }

    /**
     * Start the interval dispatch for the given action
     * @param {*} actionType Redux action type
     * @param {*} interval time between 2 activations
     */
    start(actionType, interval){
        if(this._tasks[actionType] === undefined){
            this._tasks[actionType] = {intervalID : setInterval(()=>this._store.dispatch({type:actionType}), interval), interval};
        }
    }

    /**
     * Stop and remove the action schedule
     * @param {*} actionType Redux action type
     */
    stop(actionType){
        if(this._tasks[actionType] !== undefined){
            clearInterval(this._tasks[actionType].intervalID);
            delete this._tasks[actionType];
        }
    }

    /**
     * Stop and restart the schedule for the given action
     * @param {*} actionType Redux action type
     */
    reset(actionType){
        if(this._tasks[actionType] !== undefined){
            const {intervalID, interval} = this._tasks[actionType];
            clearInterval(intervalID);
            this._tasks[actionType] = {intervalID : setInterval(()=>this._store.dispatch({type:actionType}), interval), interval};
        }
        
    }
 }
 

export default new Automator();