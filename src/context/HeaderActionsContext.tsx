import { createContext, useContext, useReducer } from "react";
import { Actions, HeaderActionsContextType, ProviderProps, State } from "../types/itemType";

const initialState: State = {
    isDark: true,
    isActive: false
}


 const HeaderActionsReducer = (state: State, action: Actions) : State => {
    switch (action.type) {
        case "TOGGLE_MODE":
            return { ...state, isDark: !state.isDark }
        case "TOGGLE_SIDE_CART":
            return { ...state, isActive: !state.isActive }
        default:
            return state;
    }
 }

export const HeaderActionsContext = createContext<HeaderActionsContextType>({
    state: initialState,
    dispatch: () => {},
});

export const HeaderActionsProvider = ({ children} : ProviderProps) => {
    const [state, dispatch] = useReducer(HeaderActionsReducer, initialState);
    return(
        <HeaderActionsContext.Provider value={ {state, dispatch} }>{ children }</HeaderActionsContext.Provider>
    )

}

export const useHeaderActions = () => {
    const { state, dispatch } = useContext(HeaderActionsContext);
    const isDark = state.isDark;
    const isActive = state.isActive;
    return { isDark, isActive, dispatch };
}