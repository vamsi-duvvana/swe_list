import React, { useState } from 'react'
import { Button, InputField, Radio, Typography, VerticalSpacer } from '@cred/neopop-web/lib/components';

import { colorGuide, colorPalette, FontVariant } from '@cred/neopop-web/lib/primitives';



const Body = () => {
    const [selectedVal, setSelectedVal] = useState("");
    const [frequency, setFrequency] = useState("");

    const handle1Change = (e) => {
        console.log(e.target.value);
        setSelectedVal(e.target.value);
    };

    const handle2Change = (e) => {
        console.log(e.target.value);
        setFrequency(e.target.value);
    };

    return (
        <div className='flex flex-1 justify-around'>
            <div className='px-10'>
                <div>
                    <Typography {...FontVariant.CirkaHeadingBold20} color={colorPalette.popWhite[300]} className=''>
                        You are missing out!!!
                    </Typography>
                    <div className='pt-2'>
                        <Typography  {...FontVariant.BodyMedium16} color={colorPalette.popWhite[300]} className=''>
                            530 tech internships from 2024Summer-Internships
                        </Typography>
                        <Typography {...FontVariant.BodyMedium16} color={colorPalette.popWhite[300]} className=''>
                            530 tech internships from 2024Summer-Internships
                        </Typography>
                    </div>
                </div>
                <div className='pt-10'>
                    <Typography {...FontVariant.CirkaHeadingBold20} color={colorPalette.popWhite[300]} className=''>
                        Fill out the details to not miss any updates...
                    </Typography>
                    <div className='pt-2'>
                        <Typography {...FontVariant.BodyMedium16} color={colorPalette.popWhite[300]} className=''>
                            Are you looking for an ?
                        </Typography>
                        <div className='flex pt-2'>
                            <Radio
                                id="internship"
                                name="internship"
                                value="internship"
                                label="Internship"
                                isChecked={selectedVal === 'internship'}
                                colorConfig={colorGuide.darkComponents.radio}
                                onChange={handle1Change}
                            />
                            <VerticalSpacer n={5} />
                            <Radio
                                id="newGrad"
                                name="newGrad"
                                value="newGrad"
                                label="New-grad"
                                isChecked={selectedVal === 'newGrad'}
                                colorConfig={colorGuide.darkComponents.radio}
                                onChange={handle1Change}
                            />
                        </div>
                    </div>
                    <div className='pt-2'>
                        <Typography {...FontVariant.BodyMedium16} color={colorPalette.popWhite[300]} className=''>
                            Would you like to sign-up for updates ?
                        </Typography>
                        <div className='flex pt-2'>
                            <Radio
                                id="daily"
                                name="daily"
                                value="daily"
                                label="Daily"
                                isChecked={frequency === 'daily'}
                                colorConfig={colorGuide.darkComponents.radio}
                                onChange={handle2Change}
                            />
                            <VerticalSpacer n={5} />
                            <Radio
                                id="weekly"
                                name="weekly"
                                value="weekly"
                                label="Weekly"
                                isChecked={frequency === 'weekly'}
                                colorConfig={colorGuide.darkComponents.radio}
                                onChange={handle2Change}
                            />
                        </div>
                    </div>
                    <div className='pt-2'>
                        <InputField
                            textStyle={{
                                label: { ...FontVariant.BodyMedium16 }
                            }}
                            colorConfig={{
                                labelColor: "#FFFFFF",
                                textColor: "#D2D2D2",
                                placeholderColor: "8A8A8A"
                            }}
                            id="text_field"
                            inputMode="text"
                            label="Your name"
                            maxLength={100}
                            onBlur={function noRefCheck() { }}
                            onChange={function noRefCheck() { }}
                            onFocus={function noRefCheck() { }}
                            placeholder="enter your name here ..."
                            type="text"
                        />
                    </div>
                    <div className='pt-2'>
                        <InputField
                            textStyle={{
                                label: { ...FontVariant.BodyMedium16 }
                            }}
                            colorConfig={{
                                labelColor: "#FFFFFF",
                                textColor: "#D2D2D2",
                                placeholderColor: "8A8A8A"
                            }}
                            id="text_field"
                            inputMode="text"
                            label="Your email"
                            maxLength={100}
                            onBlur={function noRefCheck() { }}
                            onChange={function noRefCheck() { }}
                            onFocus={function noRefCheck() { }}
                            placeholder="enter your email address here ..."
                            type="text"
                        />
                    </div>
                    <div className='pt-10'>
                        <Button
                            colorMode="light"
                            kind="elevated"
                            onClick={function noRefCheck() { }}
                            size="big"
                            showArrow
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='px-10'>
                    <img src="https://res.cloudinary.com/dhqgc5kzm/image/upload/v1714166372/New_Project_5_vvghig.png" alt='side-img' className="w-auto h-auto max-w-xs max-h-xs object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Body