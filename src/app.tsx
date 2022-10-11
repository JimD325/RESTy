import React, {useState} from 'react';

import './app.scss';

import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {Form} from './components/form/form';
import {Results} from './components/results/results';



const App = () => {
 const [data, setData] = useState({});
 const [requestParams, setRequestParams] = useState({method: "Pick a method", url: "Pick an API"});
 async function APICall (req:any){
  console.log("req on the APP ---->", req);
  const res = await fetch(req.url, {method: req.method});
  let parsedRes = await res.json();
  let data = {parsedRes, res};
  setData(data);
  setRequestParams(req);
 }
 
  // const callApi = (requestParams: any) => {
  //   // mock output
  //   setData({
  //     count: 2,
  //     results: [
  //       {name: 'fake thing 1', url: 'http://fakethings.com/1'},
  //       {name: 'fake thing 2', url: 'http://fakethings.com/2'},
  //     ],
  //   });
  //   setRequestParams(requestParams);
  // }
    return (
      <>
        <Header />
        <section>
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        </section>
        <div id="main">
          <Form APICall={APICall} />
        <Results data={data} />
        </div>
        
        <Footer />
      </>
    );
}




export default App;
