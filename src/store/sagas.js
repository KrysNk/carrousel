import {all} from "redux-saga/effects";
import carrousel from "./Carrousel/CarrouselSagas"

export default function* (){
    yield all([carrousel()]);
}