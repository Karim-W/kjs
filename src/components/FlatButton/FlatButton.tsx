import React from 'react';
import './flatButton.css';
interface IFlatButtonProps {
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const FlatButton = (props: IFlatButtonProps) => {
    return (
        <button className='flatbutton' style={props.style}>
            {props.children}
        </button>
    );
}

export default FlatButton;
