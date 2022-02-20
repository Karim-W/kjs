import React from 'react';

interface ICircularButtonProps {
    text: string;
}

const CircularButton = (props: ICircularButtonProps) => {
    return (
        <button>
            {props.text}
        </button>
    );
}

export default CircularButton;
