import { all, takeLatest } from "redux-saga/effects";
import { handleRequest } from "../../helpers/store/sagasHelpers";
import { LOAD_DATA, loadData } from "./CarrouselActions";
import dataClient from "../../httpClient/dataClient";

function* loadDataRequest() {
  yield* handleRequest(loadData, dataClient.get(`test`));
}

function* loadDataSuccess(response) {
  console.info(response);
}

function* loadDataFailure(response) {
  console.info(response);
}

export default function* () {
  yield all([
    takeLatest(LOAD_DATA.REQUEST, loadDataRequest),
    takeLatest(LOAD_DATA.SUCCESS, loadDataSuccess),
    takeLatest(LOAD_DATA.FAILURE, loadDataFailure),
  ]);
}
