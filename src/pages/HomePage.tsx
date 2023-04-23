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
        from: { opacity: 0, transform: 'translateX(-100%)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        delay: 500,
        config: { tension: 120, friction: 10 },
    });

    return (
        <Container>
            <AnimatedTitle style={titleSpring}>WELCOME TO THE FUTURE</AnimatedTitle>
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

// Wrap the Title component with the "animated" higher-order component from react-spring
export const AnimatedTitle = animated(Title);

export const Title = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

// Define a before pseudo-element to create a background layer for the Title component
export const TitleBg = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0c0c0c;
  z-index: 1;
`;

// Define a gradient background animation for the TitleBg component
export const TitleBgGradient = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #00f, #0ff, #f0f);
  opacity: 0;
  animation: gradient 3s ease-in-out infinite alternate;

  @keyframes gradient {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
