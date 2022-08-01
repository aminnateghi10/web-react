export const GET_DATA = 'GET_DATA';

export  function getData(payload){
    return { type: GET_DATA , payload }
}