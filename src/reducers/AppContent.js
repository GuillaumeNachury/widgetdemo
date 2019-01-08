/**
 * Main app reducer
 * 
 * @author Guillaume Nachury
 */
import {ACTION_TYPES, onCompanyDataResult} from '../actions';
import {LayoutUtil_getPercentDisplayed} from '../components/MozaiGrid';
import {grabData} from '../services/HTTPService';
import Automator from '../utils/ActionAutomator';

const initialState = {
        companyData : [],
        companyGridSnapPosition : 0,
        companyGridParams :{}
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
            Automator.reset(ACTION_TYPES.AUTO_SCROLL_COMPANY);
            if(LayoutUtil_getPercentDisplayed(state.companyGridSnapPosition, state.companyGridParams.rows, state.companyGridParams.cols, state.companyData.length) === 100){
                return {...state}
            }
            else return {...state, companyGridSnapPosition:state.companyGridSnapPosition+1}
        case ACTION_TYPES.COMPANYGRID_SCROLL_PREVIOUS:
            Automator.reset(ACTION_TYPES.AUTO_SCROLL_COMPANY);
            if(state.companyGridSnapPosition-1 < 0) return {...state}    
            else return {...state, companyGridSnapPosition:state.companyGridSnapPosition-1}
        case ACTION_TYPES.GET_COMPANY_DATA:
            grabData("company").then(companyData=>action.asyncDispatch(onCompanyDataResult(companyData)))
            return {...state}
        case ACTION_TYPES.ON_COMPANY_DATA:
            return {...state, companyData : [...action.data]}
        case ACTION_TYPES.AUTO_SCROLL_COMPANY:
            if(LayoutUtil_getPercentDisplayed(state.companyGridSnapPosition, state.companyGridParams.rows, state.companyGridParams.cols, state.companyData.length) === 100){
                return {...state, companyGridSnapPosition:0}
            }
            else{
                return {...state, companyGridSnapPosition:state.companyGridSnapPosition+1}
            }
           
        default :
        return {...state};
    }


}, false);


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