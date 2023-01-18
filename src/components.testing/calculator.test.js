import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

test('Calculator snapshot test', () => {
  const component = renderer.create(
    <Calculator />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
