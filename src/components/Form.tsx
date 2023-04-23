import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormContainer } from './Form.styles';

type FormData = {
    websiteCategory: string;
    styleType: string;
    websitePurpose: string;
};

interface FormProps {
    onSubmit: SubmitHandler<FormData>;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            websiteCategory: '',
            styleType: '',
            websitePurpose: '',
        },
    });

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('websiteCategory' as keyof FormData, {
                    required: 'This field is required',
                })}
                placeholder="Website Category"
            />
            {errors.websiteCategory && <p>{errors.websiteCategory.message}</p>}

            <select
                {...register('styleType' as keyof FormData, {
                    required: 'This field is required',
                })}
            >
                <option value="">Select Style Type</option>
                <option value="vintage">Vintage</option>
                <option value="futuristic">Futuristic</option>
                <option value="minimalist">Minimalist</option>
                <option value="modern">Modern</option>
                <option value="classic">Classic</option>
            </select>
            {errors.styleType && <p>{errors.styleType.message}</p>}

            <textarea
                {...register('websitePurpose' as keyof FormData, {
                    required: 'This field is required',
                })}
                placeholder="General Details About the Website Purpose"
            />
            {errors.websitePurpose && <p>{errors.websitePurpose.message}</p>}

            <button type="submit">Submit</button>
        </FormContainer>
    );
};
