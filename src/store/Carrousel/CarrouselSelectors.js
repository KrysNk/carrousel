import { createSelector } from "reselect";
import get from "lodash/get";

const carrouselSelector = (state) => get(state, "carrousel");

export const carrouselsSelector = createSelector(
  carrouselSelector,
  (carrousel) => get(carrousel, "carrousels")
);
