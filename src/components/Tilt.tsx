import { Tilt } from 'react-tilt'


const defaultOptions = {
    reverse: true,
    scale: 1.05,
    speed: 1000,
    max: 20,
};


export default function ({ children, options = {} }) {
    options = { ...defaultOptions, ...options };
    return (
        <>
            {/* <Tilt options={options}> */}
            {children}
            {/* </Tilt> */}
        </>
    );
};