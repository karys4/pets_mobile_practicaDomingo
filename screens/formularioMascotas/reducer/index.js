import { actions } from "./actions";
import { initialState } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.saveForm:
      return {
        ...state,
        petition: {
          loading: true,
          success: false,
          error: null,
        },
      };
    case actions.saveFormSuccess:
      return {
        ...state,
        petition: {
          loading: false,
          success: true,
          error: null,
        },
      };
    case actions.saveFormError:
      return {
        ...state,
        petition: {
          loading: false,
          success: false,
          error: action.value,
        },
      };
    case actions.modifyForm:
      return {
        ...state,
        form: {
          ...state.form,
          [action.name]: action.value,
        },
      };

    default:
      return state;
  }
};
export { reducer, initialState, actions };
