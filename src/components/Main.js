import React from 'react'

const Main = () => {

    const jobOptions = ["Internship", "New-grad"]
    const frequency = ["Daily", "Weekly"]


    return (
        <div className='flex-1'>
            <div className='flex justify-center'>
                <div className='w-1/4 h-96 bg-slate-800 rounded-lg shadow-[10px_10px_50px_rgba(8,_112,_184,_0.7)]'>
                    <div className='py-3 px-5'>
                        <p className='text-white font-mono font-medium text-2xl'>Welcome to OpenHub</p>
                        <p className='text-slate-400 text-sm pt-2'>Don't miss out on any opportunities! Signup now to receive the latest updates straight to your inbox.</p>
                        <p className='text-white text-sm pt-2 font-mono'>Full Name</p>
                        <div className='pt-1'>
                            <input
                                className='px-2 w-full rounded-sm bg-slate-700 outline-none	text-white'
                                placeholder='Enter full name ...'
                                type='text'
                            />
                        </div>
                        <p className='text-white text-sm pt-2 font-mono'>Email</p>
                        <div className='pt-1'>
                            <input
                                className='px-2 w-full rounded-sm bg-slate-700 outline-none	text-white'
                                placeholder='Enter your email ...'
                                type='email'
                            />
                        </div>
                        <p className='text-white text-sm pt-2 font-mono'>You are looking for ?</p>
                        <div className="flex items-center space-x-4 pt-1">
                            {jobOptions.map((option, index) =>
                                <label key={index} className="inline-flex items-center text-slate-400">
                                    <input
                                        type="radio"
                                        className="form-radio h-4 w-4"
                                        value={option}
                                    // checked={selectedOption === 'email'}
                                    // onChange={() => handleOptionChange('email')}
                                    />
                                    <span className="ml-2">{option}</span>
                                </label>
                            )}
                        </div>
                        <p className='text-white text-sm pt-2 font-mono'>Frequency in which you want ?</p>
                        <div className="flex items-center space-x-4 pt-1">
                            {frequency.map((option, index) =>
                                <label key={index} className="inline-flex items-center text-slate-400">
                                    <input
                                        type="radio"
                                        className="form-radio h-4 w-4"
                                        value={option}
                                    // checked={selectedOption === 'email'}
                                    // onChange={() => handleOptionChange('email')}
                                    />
                                    <span className="ml-2">{option}</span>
                                </label>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-16'>
                <button className='text-white px-3 py-1 bg-slate-500 rounded-lg'>
                    Click me
                </button>
            </div>
        </div>
    )
}

export default Main