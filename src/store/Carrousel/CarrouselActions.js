import {
  createRequestTypes,
  generateRequestActions,
} from "../../helpers/store/actionsHelpers";

export const LOAD_DATA = createRequestTypes("LOAD_DATA");
export const loadData = generateRequestActions(LOAD_DATA);
export const APPLICATION_IS_READY = "APPLICATION_IS_READY";
export const APPLICATION_IS_LOADING = "APPLICATION_IS_LOADING";

export const loadingData = (isLoading) => ({
  type: APPLICATION_IS_LOADING,
  isLoading,
});

export const loadApplication = () => ({
  type: APPLICATION_IS_READY,
  isReady: true,
});