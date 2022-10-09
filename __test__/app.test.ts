import React, { createElement } from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../src/components/header/index';
import Footer from '../src/components/footer/index';
import Results from '../src/components/results/index';
import Form from '../src/components/form/index';

describe('Main App tests', () => {
  it('renders a header element', () => {
    let header = createElement(Header);
    render(header);
    expect(header).toBeTruthy();
    expect(screen.getByText('RESTy')).toBeTruthy();
  });

  // it('renders a footer element', () => {
  //   let footer = createElement(Footer);
  //   render(footer);
  //   expect(footer).toBeTruthy();
  //   // expect(screen.getByText('&copy; 2018')).toBeTruthy();
  // })

  // it('renders a results component', () => {
  //   let results = createElement(Results);
  //   render(results);
  //   expect(results).toBeTruthy();
  //   // expect(screen.getByText(2018)).toBeTruthy();
  // })

  // it('renders a form component', () => {
  //   let form = createElement(Form);
  //   render(form);
  //   expect(form).toBeTruthy();
  //   // expect(screen.getByText(2018)).toBeTruthy();
  // })
}); 