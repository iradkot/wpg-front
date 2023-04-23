import { useMutation } from 'react-query';
import { submitWPGForm } from '../api';

type FormData = {
    websiteCategory: string;
    styleType: string;
    websitePurpose: string;
};

export const useSubmitWPGForm = () => {
    return useMutation((data: FormData) => submitWPGForm(data));
};
