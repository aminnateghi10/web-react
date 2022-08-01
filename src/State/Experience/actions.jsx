export const GET_DATA = 'getData'

export default function getData(payload){
    return {type:GET_DATA , payload:payload}
}