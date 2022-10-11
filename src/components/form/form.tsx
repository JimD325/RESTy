import './form.scss';

const handleSubmit = (e:any, callback: Function) => {
  e.preventDefault();
  console.log('handle sub e.target', e)
  const formData = {
    method:'GET',
    url: e.target[0].value//'https://pokeapi.co/api/v2/pokemon',
  };
  callback(formData);
}

export const Form = (props:any) => {
  console.log("Props on FORM ---->", props);
  return (
    <>
      <form onSubmit={(e) =>handleSubmit(e, props.APICall)}>
        <label >
          <span>Enter URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}


