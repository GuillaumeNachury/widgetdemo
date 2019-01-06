/**
 * Helper file to process the href data
 * 
 * @author Guillaume Nachury
 */

 /**
  * Methods that will pull specific params from the search query
  * @param {Array} paramsToExtract List of properties to pull from the search params
  */
export const extractParams = paramsToExtract =>{
    const termsMap = new Map(window.location.search.substr(1).split("&").map(term=>term.split('=')));
    const retObject = {};

    paramsToExtract.forEach(el => {
        retObject[el] = termsMap.get(el);
    });

    return retObject;

}