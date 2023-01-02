import { ACTIONS } from "../constants/actions";

export const exerciceReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA: {
      return {
        ...state,
        contents: action.contents,
      };
    }
    case ACTIONS.FILTER_BY_CODE: {
      return {
        ...state,
        contents: state.contents
          ? [
              ...state.contents.filter(
                (item) => item.code.toLowerCase() === action.code.toLowerCase()
              ),
            ]
          : [],
      };
    }
    case ACTIONS.FILTER_BY_ID: {
      return {
        ...state,
        contents: state.contents
          ? [...state.contents.filter((item) => item.id === action.id)]
          : [],
      };
    }
    case ACTIONS.GROUP_BY_CODE: {
      return {
        ...state,
        groupByYear: false,
        groupByMonth: false,
        groupByCode: true,
      };
    }
    case ACTIONS.DISABLE_GROUP_BY_CODE: {
      return {
        ...state,
        groupByCode: false,
      };
    }
    case ACTIONS.GROUP_BY_YEAR: {
      return {
        ...state,
        groupByCode: false,
        groupByMonth: false,
        groupByYear: true,
      };
    }
    case ACTIONS.DISABLE_GROUP_BY_YEAR: {
      return {
        ...state,
        groupByYear: false,
      };
    }
    case ACTIONS.GROUP_BY_MONTH: {
      return {
        ...state,
        groupByCode: false,
        groupByYear: false,
        groupByMonth: true,
      };
    }
    case ACTIONS.DISABLE_GROUP_BY_MONTH: {
      return {
        ...state,
        groupByMonth: false,
      };
    }
    default:
  }
};
