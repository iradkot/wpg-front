import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

type ResponseData = {
    // Define the shape of your response data here
    someField: string;
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

const ResultWrapper = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 1rem;
  width: 100%;
  max-width: 600px;
  overflow: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const ResultPage: React.FC = () => {
    const location = useLocation<{ data: ResponseData }>();
    const data = location.state.data;

    return (
        <Container>
            <Title>Response from the API</Title>
            <ResultWrapper>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </ResultWrapper>
        </Container>
    );
};

export default ResultPage;
