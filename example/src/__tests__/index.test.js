import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import App from '../App';

describe('Snackbar example app', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <App />,
    );
    expect(tree).toMatchSnapshot();
  });
});
