import React from 'react';

function Results ({data}:any){
  return (
    
    <section>
      Results
      <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
    </section>
  );
}

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

export default Results;
