/**
 * Main app reducer
 * 
 * @author Guillaume Nachury
 */
import {ACTION_TYPES} from '../actions';

const initialState = {
    companyData : [
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
        {name:'aaa'},
      ],
      companyGridSnapPosition : 0,
      companyGridParams :{

      }
}

const reducer = spy((state, action)=>{

    if(!state){
        state = {
            ...initialState
        };
    }

    switch(action.type){
        case ACTION_TYPES.SET_COMPANYGRID_PARAMS:
            return {...state, companyGridParams:{...state.companyGridParams, ...action.params}}
        case ACTION_TYPES.COMPANYGRID_SCROLL_NEXT:
            return {...state, companyGridSnapPosition:state.companyGridSnapPosition+1}
        case ACTION_TYPES.COMPANYGRID_SCROLL_PREVIOUS:
            return {...state, companyGridSnapPosition:state.companyGridSnapPosition-1}
        default :
        return {...state};
    }


}, true);


/**
 * Convinent HOC to track the action and duration during runtime
 * @param {*} ob 
 * @param {*} active 
 */
function spy(ob,active=false){
    return (state, action)=>{

        if(active) console.time(action.type);
        let _o = ob(state, action)
        if(active) console.timeEnd(action.type);
        //debugger;
        return _o;
    }
 }
 
 
 export default reducer;