import { LanguageActions } from "./LanguageActions";

export const initialState = {
  language: "vi",
};

export const LanguageReducer = (state, action) => {
  switch (action.type) {
    case LanguageActions.SetLanguage:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default initialState;
