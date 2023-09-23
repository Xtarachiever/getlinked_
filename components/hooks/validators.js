import { object, string, ref, number } from 'yup';

export const ContactValidator = object().shape({
    email: string().trim().email().required(),
    message: string()
        .min(8, 'Must be more than 8 characters')
        .required('Fill in your message'),
    first_name: string().trim()
        .required('Name is required')
        .matches( /^[a-zA-Z]{2,}$/, 'Only Alphabets are allowed'),
    phone_number: string().trim()
        .required('Phone number is required')
        .matches( /^[0-9]{5,}$/, 'Only Numbers are allowed (Minimum of 5)'),
});

export const RegisterValidator = object().shape({
    team_name: string().trim()
    .required('Name is required')
    .matches( /^[a-zA-Z]{2,}$/, 'Only Alphabets are allowed'),
    email: string().trim().email().required(),
    phone_number: string().trim()
        .required('Phone number is required')
        .matches( /^[0-9]{5,}$/, 'Only Numbers are allowed (Minimum of 5)'),
    project_topic: string().required('Fill in your message'),
    category:string().trim().required('Please select a category'),
    group_size: string().trim()
        .required('Group size is required')
        .matches( /^[0-9]{1,}$/, 'Only Numbers are allowed'),
    privacy_policy_accepted: string().required(),
})
