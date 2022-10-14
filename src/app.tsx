import React, { useState, useReducer, useCallback } from 'react';

import './app.scss';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Form } from './components/form/form';
import { Results } from './components/results/results';



export interface AppState {
  data: any,
  requestParams:{
    url: string,
    method: string,
  },
  history: any[]
}

export const dispatchAction = (
  state: AppState,
  action: {
    action: string,
    body: any,
  }) => {
  switch (action.action) {
    case 'data':
      return setData(state, action.body as object)
    case 'requestParams':
      return setRequestParams(state, action.body as any)
    case 'history':
      return setHistory(state, action.body as any[])
    default:
      return state;
  }
}

export const setData = (
  state: AppState,
  data: any,
) => {
  state.data = data;
  return {...state};
}

export const setRequestParams = (
  state: AppState,
  requestParams:{
    url: string,
    method: string,
  },
) => {
  state.requestParams = requestParams;
  return state;
}

export const setHistory = (
  state: AppState,
  data: object,
) => {
  console.log("data on set history", data);
  console.log("state.history on set history", state.history);
  if(state.history[state.history.length-1] !== data){
    state.history.push(data);
  }
  
  return state;
}




const App: React.FC = () => {
  const [state, dispatch] = useReducer(
    dispatchAction, {
    data: {},
    requestParams: {
      method: "Pick a method",
      url: "Pick an API"
    },
    history: [],
  }
  )

  async function APICall(req: any) {
    if(Object.values(state?.data).length>1){
      dispatch({action: "history", body: state.data })
    }
    if (req.method === "GET") {
      const res = await fetch(req.url, { method: req.method });
      let parsedRes = await res.json();

      // setData(state,{ parsedRes });
      dispatch({action: "data", body:parsedRes })
      dispatch({action: "requestParams", body:req })
      // dispatch({action: "history", body:parsedRes })
      // setRequestParams(state,req);
      // setHistory(state,{ parsedRes });

    } else {
      dispatch({action: "data", body: {} })
      dispatch({action: "requestParams", body:req })
    }
  }
  
  // console.log("state on app --->", state);
  return (
   <>
    <Header />
      <section>
        <div>Request Method: {state.requestParams.method}</div>
        <div>URL: {state.requestParams.url}</div>
      </section>
      <div id="main">
        <Form APICall={APICall} />
        <Results data={state.data} />
       
      </div>
      <Footer/>
   </>

  );
}

export default App;

