import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorText from '../components/CalculatorText';

test('Home SnapShot test ', () => {
  const component = renderer.create(
    <CalculatorText />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
