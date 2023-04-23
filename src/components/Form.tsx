import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormContainer } from './Form.styles';

type FormData = {
    websiteUrl: string;
    websiteName: string;
};

interface FormProps {
    onSubmit: SubmitHandler<FormData>;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm<FormData>();

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <input {...register('websiteUrl')} placeholder="Website URL" required />
            <input {...register('websiteName')} placeholder="Website Name" required />
            <button type="submit">Submit</button>
        </FormContainer>
    );
};
