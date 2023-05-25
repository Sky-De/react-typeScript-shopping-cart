import { createContext, useContext, useReducer } from "react";
import { ProviderProps } from "../types/itemType";


export interface State {
    isDark: boolean;
    isActive: boolean;
}

const initialState: State = {
    isDark: true,
    isActive: false
}
export type Action = 
 | {type: "TOGGLE_MODE"}
 | {type: "TOGGLE_SIDE_CART"}

export interface ActionContextType {
    state: State;
    dispatch: React.Dispatch<Action>;
}

 const ActionsReducer = (state: State, action: Action) : State => {
    switch (action.type) {
        case "TOGGLE_MODE":
            return { ...state, isDark: !state.isDark }
        case "TOGGLE_SIDE_CART":
            return { ...state, isActive: !state.isActive }
        default:
            return state;
    }
 }

export const ActionsContext = createContext<ActionContextType>({
    state: initialState,
    dispatch: () => {},
});

export const ActionsProvider = ({ children} : ProviderProps) => {
    const [state, dispatch] = useReducer(ActionsReducer, initialState);
    return(
        <ActionsContext.Provider value={ {state, dispatch} }>{ children }</ActionsContext.Provider>
    )

}

export const useActions = () => {
    const { state, dispatch } = useContext(ActionsContext);
    const isDark = state.isDark;
    const isActive = state.isActive;
    return { isDark, isActive, dispatch };
}