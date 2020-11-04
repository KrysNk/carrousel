import { LOAD_DATA, APPLICATION_IS_READY } from "./CarrouselActions";

const initialState = { isReady: false };

const carrousel = (state = initialState, action = {}) => {
  switch (action.type) {
    case APPLICATION_IS_READY:
      return {
        ...state,
        isReady: action.isReady,
      };
    case LOAD_DATA.SUCCESS:
      return {
        ...state,
        carrousels: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default carrousel;
