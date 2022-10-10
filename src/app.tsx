import React, {useState} from 'react';

import './app.scss';

import {Header} from './components/header';
import {Footer} from './components/footer';
import {Form} from './components/form';
import {Results} from './components/results';



const App = () => {
 const [data, setData] = useState({});
 const [requestParams, setRequestParams] = useState({method: "Get", url: "localHost"});
 
  const callApi = (requestParams: any) => {
    // mock output
    setData({
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    });
    setRequestParams(requestParams);
  }
    return (
      <>
        <Header />
        <section>
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        </section>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </>
    );
}


// class App extends React.Component <{}, {data: any, requestParams: any}> {

//   constructor(props:any) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams: any) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <section>
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         </section>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

export default App;
