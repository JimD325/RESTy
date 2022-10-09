import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// const rootElement = document.getElementById('root');
// ReactDOM.render(<Main />, rootElement);
