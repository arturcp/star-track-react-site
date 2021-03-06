import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';

describe('Footer UI', () => {
  it('should match the snapshot', () => {
    const component = renderer.create(
      <Router>
        <Footer />
      </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
