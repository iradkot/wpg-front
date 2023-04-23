import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sendWebsiteDetails } from '../api';
import ResponseDisplay from '../components/ResponseDisplay';

export const ResultPage: React.FC = () => {
    const location = useLocation();
    const [response, setResponse] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = location.state.data;
                const result = await sendWebsiteDetails(data);
                setResponse(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [location]);

    return (
        <div>
            <h1>Website Details</h1>
            {response && <ResponseDisplay response={response} />}
        </div>
    );
};
