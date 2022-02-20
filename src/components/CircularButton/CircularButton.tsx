import React from 'react';
import './circularButton.css';
interface ICircularButtonProps {
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const CircularButton = (props: ICircularButtonProps) => {
    console.log(props);
    return (
        <button style={props.style}>
            {props.children}
        </button>
    );
}

export default CircularButton;
