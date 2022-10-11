const { React, createElement } = require('react');
const { render, fireEvent, cleanup, screen, waitFor, } = require('@testing-library/react');
// import API mocking utilities from Mock Service Worker
// import { rest } from 'msw'
// import { setupServer } from 'msw/node';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'



const { Header } = require('./components/header/header');
const { Footer } = require('./components/footer/footer');
const { Results } = require('./components/results/results');
const { Form } = require('./components/form/form');

// const server = setupServer(
//   rest.get('/pokemon', (req, res, ctx) => {
//     return res(ctx.json({ pokemon: "charmander" }))
//   }),
// )

// beforeAll(() => server.listen())
// // reset any request handlers that are declared as a part of our tests
// // (i.e. for testing one-time error scenarios)
// afterEach(() => server.resetHandlers())
// // clean up once the tests are done
// afterAll(() => server.close())
// afterEach(cleanup);

// test('gets charmander', async () => {
//   server.use(rest.get('/pokemon', req,res,ctx) => {
//     return res(ctx.status(200))
//   }),
// })

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