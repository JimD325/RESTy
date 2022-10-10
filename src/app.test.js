const {React,  createElement } =require ('react');
const { render, fireEvent, cleanup, screen } = require('@testing-library/react');

const {Header} = require('./components/header/index');
const {Footer} = require('./components/footer/index');
const {Results} = require('./components/results/index');
const {Form} = require('./components/form/index');


afterEach(cleanup);

describe('Component Tests', () => {
  it('renders a header element', () => {
    let header = createElement(Header);
    render(header);
    expect(header).toBeTruthy();
    expect(screen.queryByText("RESTy")).toBeTruthy();
  });
  it('renders a footer element', () => {
    let footer = createElement(Footer);
    render(footer);
    expect(footer).toBeTruthy;
    expect(screen.queryAllByText("Jim Doyle")).toBeTruthy();
  });
  it('renders a results element', () => {
    let results = createElement(Results);
    render(results);
    expect(results).toBeTruthy;
    expect(screen.queryAllByText("Results")).toBeTruthy();
  });
  it('renders a results element', () => {
    let form = createElement(Form);
    render(form);
    expect(form).toBeTruthy;
    expect(screen.queryAllByText("Enter URL:")).toBeTruthy();
  });
}); 