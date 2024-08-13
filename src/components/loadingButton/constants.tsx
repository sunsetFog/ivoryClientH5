import React from 'react';
export const dotDom = () => {
    return (
        <svg height='1em' viewBox='0 0 100 40' style={{ verticalAlign: '-0.125em' }}>
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g transform='translate(-100.000000, -71.000000)'>
                    <g transform='translate(95.000000, 71.000000)'>
                        <g transform='translate(5.000000, 0.000000)'>
                            <rect fill='currentColor' x='20' y='16' width='8' height='8' rx='2'>
                                <animate
                                    attributeName='y'
                                    from='16'
                                    to='16'
                                    dur='2s'
                                    begin='0s'
                                    repeatCount='indefinite'
                                    values='16; 6; 26; 16; 16'
                                    keyTimes='0; 0.1; 0.3; 0.4; 1'
                                ></animate>
                            </rect>
                            <rect fill='currentColor' x='46' y='16' width='8' height='8' rx='2'>
                                <animate
                                    attributeName='y'
                                    from='16'
                                    to='16'
                                    dur='2s'
                                    begin='0.2s'
                                    repeatCount='indefinite'
                                    values='16; 6; 26; 16; 16'
                                    keyTimes='0; 0.1; 0.3; 0.4; 1'
                                ></animate>
                            </rect>
                            <rect fill='currentColor' x='72' y='16' width='8' height='8' rx='2'>
                                <animate
                                    attributeName='y'
                                    from='16'
                                    to='16'
                                    dur='2s'
                                    begin='0.4s'
                                    repeatCount='indefinite'
                                    values='16; 6; 26; 16; 16'
                                    keyTimes='0; 0.1; 0.3; 0.4; 1'
                                ></animate>
                            </rect>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export const broccoli = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
            <path
                opacity='.25'
                d='M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4'
            />
            <path
                d='M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z'
                transform='rotate(84.0713 16 16)'
            >
                <animateTransform
                    attributeName='transform'
                    type='rotate'
                    from='0 16 16'
                    to='360 16 16'
                    dur='0.8s'
                    repeatCount='indefinite'
                />
            </path>
        </svg>
    );
};
