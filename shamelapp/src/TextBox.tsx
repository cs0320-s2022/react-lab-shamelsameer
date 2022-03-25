import React from 'react';

interface TextBoxProps {
    label: string
    change: (value: string) => void;
}

function TextBox(props: TextBoxProps) {
    return (
        <div>
            <label>{props.label}: </label>
            <input type={'text'} onChange={event => props.change(event.target.value)}/>
        </div>
    )
}

export default TextBox;