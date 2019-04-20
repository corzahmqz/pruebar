//import { routerReducer } from "@angular-redux/router";
//import { composeReducers, defaultFormReducer } from "@angular-redux/form";

import { combineReducers } from "redux";

import { AppState, INITIAL_STATE } from "./store.model";

import { gpsReducer } from "./gps/gps.reducer";
import { accelerometerReducer } from "./accelerometer/accelerometer.reducer";
import { gyroscopeReducer } from "./gyroscope/gyroscope.reducer";
import { magnetometerReducer } from "./magnetometer/magnetometer.reducer";

export default function reduceReducers(...reducers)
{
  return (previous, current) => reducers.reduce((p, r) => r(p, current), previous);
}

export const rootReducer = reduceReducers(
  combineReducers({
    gps: gpsReducer,
    accelerometer: accelerometerReducer,
    gyroscope: gyroscopeReducer,
    magnetometer: magnetometerReducer,
  }),
  mainReducer
);

export function mainReducer(state: AppState = INITIAL_STATE, action: any): any
{
  return state;
}
