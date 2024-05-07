import React, { useState } from 'react';
import { frequency, jobOptions } from '../constants';
import { checkValidData } from '../utils/checkValidData';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        optedJobOption: jobOptions[0],
        optedFrequency: frequency[0],
        name: '',
        email: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleJobOptionChange = (option) => {
        setFormData({ ...formData, optedJobOption: option });
    };

    const handleFrequencyChange = (option) => {
        setFormData({ ...formData, optedFrequency: option });
    };

    const handleFormSubmission = async () => {
        setIsSubmitting(true);
        const { email } = formData;
        const message = checkValidData(email);
        setErrorMessage(message);

        if (!message && formData.name && formData.email) {
            try {
                console.log("formData :: ", formData);
                const response = await fetch('http://localhost:3001/api/v1/swelist/subscribe', {
                    method: 'POST',
                    headers: {
                        'token': "vcpjiZHLYqDcOGBCYRXF6RfAckI3Gss1",
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setFormData({
                        optedJobOption: jobOptions[0],
                        optedFrequency: frequency[0],
                        name: '',
                        email: '',
                    });
                    setErrorMessage('');
                } else {
                    // Need to add a toast
                    console.error('Failed to submit form:', response.statusText);
                }
            } catch (error) {
                console.error('Error submitting form:', error.message);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setIsSubmitting(false);
        }
    };

    const { optedJobOption, optedFrequency, name, email } = formData;
    const isActive = name && email && !isSubmitting;

    return (
        <div className="-mt-10 w-2/3 h-2/3 bg-bright-turquoise-200 rounded-2xl">
            <div className="bg-bright-turquoise-500 w-1/2 py-3 rounded-full font-semibold relative left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center text-2xl">
                Subscribe
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="px-16 mt-5">
                <div className="flex justify-between py-2">
                    {jobOptions.map((option, index) => (
                        <label key={index} className="inline-flex items-center text-slate-400">
                            <input
                                type="radio"
                                className="form-radio h-4 w-4"
                                name="jobOption"
                                value={option}
                                checked={optedJobOption === option}
                                onChange={() => handleJobOptionChange(option)}
                            />
                            <span className="ml-2 text-lg font-semibold">{option}</span>
                        </label>
                    ))}
                </div>
                <div className="flex justify-between py-2">
                    {frequency.map((option, index) => (
                        <label key={index} className="inline-flex items-center text-slate-400">
                            <input
                                type="radio"
                                className="form-radio h-4 w-4"
                                name="frequency"
                                value={option}
                                checked={optedFrequency === option}
                                onChange={() => handleFrequencyChange(option)}
                            />
                            <span className="ml-2 text-lg font-semibold">{option}</span>
                        </label>
                    ))}
                </div>
                <div className="py-2">
                    <p className="text-lg font-semibold text-bright-turquoise-800 ml-2">Name</p>
                    <input
                        className="px-2 my-1 w-full rounded-md bg-bright-turquoise-100 outline-none text-lg border border-bright-turquoise-500 text-bright-turquoise-700 placeholder-bright-turquoise-500"
                        placeholder="Enter your name ..."
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="py-2">
                    <p className="text-lg font-semibold text-bright-turquoise-800 ml-2">Email</p>
                    <input
                        className="px-2 my-1 w-full rounded-md bg-bright-turquoise-100 outline-none text-lg border border-bright-turquoise-500 text-bright-turquoise-700 placeholder-bright-turquoise-500"
                        placeholder="Enter your email ..."
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                {errorMessage && <p className="text-rose-of-sharon-500">{errorMessage}</p>}
                <div className="mt-10 flex justify-center">
                    <button
                        disabled={!isActive}
                        className={`px-5 py-2 m-2 ${isActive ? 'bg-bright-turquoise-700' : 'bg-bright-turquoise-400'} text-xl rounded-full font-semibold`}
                        onClick={handleFormSubmission}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
