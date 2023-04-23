import React from 'react';
import { Form } from '../components/Form';
import { useNavigate } from 'react-router-dom';
import { useSubmitWPGForm } from '../hooks/useSubmitWPGForm';
import styled from "styled-components";
import { useSpring, animated } from 'react-spring';

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

    // Define a spring animation for the Title component
    const titleSpring = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    });

    return (
        <Container>
            <AnimatedTitle style={titleSpring}>Submit Website Details</AnimatedTitle>
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

// Wrap the Title component with the "animated" higher-order component from react-spring
export const AnimatedTitle = animated(Title);
