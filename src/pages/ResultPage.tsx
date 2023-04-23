import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

type ResponseData = {
    message: string;
    website_url: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Message = styled.p`
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResultPage: React.FC = () => {
    const location = useLocation<{ data: ResponseData }>();
    const { message, website_url } = location.state.data;

    return (
        <Container>
            <Title>Response from the API</Title>
            <Message>{message}</Message>
            <a href={website_url} target="_blank" rel="noopener noreferrer">
                <Button>Visit Generated Website</Button>
            </a>
        </Container>
    );
};

export default ResultPage;
