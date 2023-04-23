import React from 'react';
import { Form } from '../components/Form';
import { useNavigate } from 'react-router-dom';
import { useSubmitWPGForm } from '../hooks/useSubmitWPGForm';
import styled from "styled-components";

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const submitWPGFormMutation = useSubmitWPGForm();

    const onSubmit = async (data: any) => {
        try {
            const response = await submitWPGFormMutation.mutateAsync(data);
            navigate('/result', { state: { data: response } });
        } catch (error) {
            // Handle error, e.g., show a toast or an error message
            console.error(error);
        }
    };

    return (
        <Container>
            <Title>Submit Website Details</Title>
            <Form onSubmit={onSubmit} />
        </Container>
    );
};
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 16px;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
`;
