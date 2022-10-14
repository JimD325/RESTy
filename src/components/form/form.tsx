
import './form.scss';
import { Body } from "../body/body"
import { useState, useReducer, useCallback } from 'react';
import { url } from 'inspector';



// everything with these properties will be treated as the type "FormState"
// interface is used to make types that you specify. 
// follows principals of "duck typing"
export interface FormState {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  body: object | undefined;
}

//Change state.body to undefined if the a method is selected which does not require the body
export const changeMethod = (
  state: FormState,
  method: "GET" | "POST" | "PUT" | "DELETE",
) => {

  if (method === "GET" || method === "PUT") {
    state.body = undefined
  } return {
    ...state, method
  };
};

export const changeUrl = (
  state: FormState,
  url: string
) => {
  state.url = url;
  console.log("State on change URL ---> ", state);
  return state
}

// Change state.body to an object if the a method is selected which does not require the body
export const changeBody = (
  state: FormState,
  body: object
) => {
  if (state.method !== "GET" && state.method !== "PUT") {
    state.body = body;
  };
  return state;
}

export const dispatchAction = (
  state: FormState,
  action: {
    action: string,
    body: unknown,
  }) => {
  switch (action.action) {
    case 'method':
      // as used below is a type assertion, and tells the compiler to consider the type as other than the type potentially inferred by the compiler. because type is set to unkown, we can specify that the type of action.body should be the type of what is to the right of the as keyword. 
      return changeMethod(state, action.body as 'GET' | 'POST' | 'PUT' | "DELETE");
    case 'body':
      return changeBody(state, action.body as object);
    case 'url':
      return changeUrl(state, action.body as string)
    default:
      return state;
  }
}

export const Form = (props: any) => {

  const handleSubmit = (e: any, callback: Function) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target[1].value)
    changeBody(state, e.target[1].value);
    let formData = {
      method: state.method,
      url: e.target[0].value,
      body: "",
    };
    callback(formData);

  }

  const [state, dispatch] = useReducer(dispatchAction, {
    method: "GET",
    url: "http://localhost:3000",
    body: undefined,
  });

  const updateMethod = (e:any, method: "GET" | "POST" | "PUT" | "DELETE") => {
    e.preventDefault();
    e.stopPropagation();
    dispatch ({action: "method", body: method})
  }



  return (
    <>
      <form onSubmit ={(e) => handleSubmit(e, props.APICall)} >
        <label >
          <span>Enter URL: </span>
          <input name='url' type='text' />
          <span>Enter Body: </span>
          <input name='body' type='text' />
          <button type="submit">GO!</button>
        </label>
        <div className="methods">
          <button onClick={(e) => updateMethod(e,"GET")}  value="GET" >GET</button>
          <button onClick={(e) => updateMethod(e,"POST")} value="POST">POST</button>
          <button onClick={(e) => updateMethod(e, "PUT")} value="PUT">PUT</button>
          <button onClick={(e) => updateMethod(e, "DELETE")} value="DELETE">DELETE</button>
        </div>
      </form>
      

    </>
  
  );
}


