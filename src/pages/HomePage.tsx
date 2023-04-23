import React from 'react';
import { Form } from '../components/Form';
import { useHistory } from 'react-router-dom';

export const HomePage: React.FC = () => {
    const history = useHistory();

    const onSubmit = (data: any) => {
        history.push('/result', data);
    };

    return (
        <div>
            <h1>Submit Website Details</h1>
            <Form onSubmit={onSubmit} />
        </div>
    );
};
