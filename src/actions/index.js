/**
 * Redux Actions 
 * @author Guillaume Nachury
 */

 export const ACTION_TYPES = {
    COMPANYGRID_SCROLL_NEXT: "COMPANY_SCROLL_NEXT",
    COMPANYGRID_SCROLL_PREVIOUS:"COMPANY_SCROLL_PREVIOUS",
    SET_COMPANYGRID_PARAMS :"SET_COMPANYGRID_PARAMS",
    GET_COMPANY_DATA:"GET_COMPANY_DATA",
    ON_COMPANY_DATA:"ON_COMPANY_DATA",
 };

 /**
  * Request the company widget to scroll the grid cells to the left
  */
 export const requestCompanyGridScrollNext = ()=>{
     return {
         type:ACTION_TYPES.COMPANYGRID_SCROLL_NEXT
     }
 }

/**
 * Request the company widget to scroll the grid cells to the right
 */
 export const requestCompanyGridScrollPrevious = ()=>{
    return {
        type:ACTION_TYPES.COMPANYGRID_SCROLL_PREVIOUS
    }
}


/**
 * Set the company grid global params (cols, rows, scroll limit)
 */
export const setCompanyGridParams = params=>{
    return {
        type:ACTION_TYPES.SET_COMPANYGRID_PARAMS, params
    }
}

/**
 * Request a call to retrieve company data 
 */
export const getCompanyData = ()=>{
    return {
        type:ACTION_TYPES.GET_COMPANY_DATA
    }
}

export const onCompanyDataResult = data =>{
    return {
        type:ACTION_TYPES.ON_COMPANY_DATA, data
    }
}