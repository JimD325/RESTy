import React from 'react';

type Props = {
  data: any
}


export const Results: React.FC<Props> = ({data}:any) => {


  return (
    <>
    <section id ="resultsSection">
      Results
      <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
    </section>
    </>
    
  );
}



