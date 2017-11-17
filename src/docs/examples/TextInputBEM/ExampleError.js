import React from 'react';
import TextInputBEM from '../../../components/TextInputBEM/index';

/** Required TextBox with error */

export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInputBEM
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                onChange={() => {}}
                required
                error="First name is required."
            />
        )
    }
}
