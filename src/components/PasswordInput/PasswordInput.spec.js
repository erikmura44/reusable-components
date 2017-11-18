import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';

test('hides password quality by default', () => {
    const tree = renderer.create(<PasswordInput
        htmlId="test"
        name="test"
        onChange={() => {}}
        value="Uisi38#8iad" />).toJSON();
    expect(tree).toMatchSnapshot();
});