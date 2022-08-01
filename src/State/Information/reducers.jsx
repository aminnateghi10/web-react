import React from "react";
import {GET_DATA} from "./actions.jsx";

function Reducers(state, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                information : action.payload
            }
    }
}

export default Reducers;