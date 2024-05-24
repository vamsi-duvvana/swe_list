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
                    //Need to add a toast
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
        <div className="mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-3/4 bg-bright-turquoise-200 rounded-2xl p-6 lg:p-8 shadow-lg">
            <div className="bg-bright-turquoise-500 w-full py-2 lg:py-4 rounded-full font-semibold text-center text-lg lg:text-xl">
                Subscribe
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="px-4 lg:px-6 mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 py-2">
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
                            <span className="ml-2 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">{option}</span>
                        </label>
                    ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 py-2">
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
                            <span className="ml-2 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">{option}</span>
                        </label>
                    ))}
                </div>
                <div className="py-2">
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-bright-turquoise-800 ml-1 lg:ml-2">Name</p>
                    <input
                        className="px-3 sm:px-4 py-1 sm:py-2 my-1 w-full rounded-md bg-bright-turquoise-100 outline-none text-base lg:text-lg xl:text-xl border border-bright-turquoise-500 text-bright-turquoise-700 placeholder-bright-turquoise-500"
                        placeholder="Enter your name ..."
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="py-2">
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-bright-turquoise-800 ml-1 lg:ml-2">Email</p>
                    <input
                        className="px-3 sm:px-4 py-1 sm:py-2 my-1 w-full rounded-md bg-bright-turquoise-100 outline-none text-base lg:text-lg xl:text-xl border border-bright-turquoise-500 text-bright-turquoise-700 placeholder-bright-turquoise-500"
                        placeholder="Enter your email ..."
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                {errorMessage && <p className="text-rose-of-sharon-500">{errorMessage}</p>}
                <div className="mt-4 sm:mt-6 lg:mt-10 flex justify-center">
                    <button
                        disabled={!isActive}
                        className={`px-4 sm:px-6 py-1 sm:py-2 m-2 ${isActive ? 'bg-bright-turquoise-700' : 'bg-bright-turquoise-400'} text-base lg:text-lg xl:text-xl rounded-full font-semibold`}
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
