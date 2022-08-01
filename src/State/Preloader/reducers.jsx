import React from "react";
import {PAYLOAD} from "./actions.jsx";
import Context from "./context.jsx";

function Reducers(state, action) {
    switch (action.type) {
        case PAYLOAD:
            return {
                ...state,
                loader : action.payload
            }
    }
}

export default Reducers;