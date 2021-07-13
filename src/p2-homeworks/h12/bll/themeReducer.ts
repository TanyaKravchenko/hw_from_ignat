export type RequestThemesType= 'dark' | 'red' | 'some'

const initState = {
    isTheme: 'some' as RequestThemesType
};
export type initialStateType= typeof initState;

export type ActionsType= ReturnType<typeof changeThemeAC>

export const themeReducer = (state:initialStateType = initState, action: ActionsType): initialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME': {
            return {...state, isTheme: action.isTheme};
        }
        default: return state;
    }
};

export const changeThemeAC = (isTheme: RequestThemesType) => ({type: 'SET_THEME', isTheme} as const)