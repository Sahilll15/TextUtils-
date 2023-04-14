import React, { useState } from 'react'




export default function Textform(props) {
    const onClickUpper = () => {
        let newtext = text.toUpperCase();
        setText(newtext)

    }
    const onClickLower = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const onClickClear = () => {
        let newtext = "";
        setText(newtext);

    }

    const onClickCaps = () => {
        let words = text.split(" ");
        let capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        let newtext = capitalizedWords.join(" ");
        setText(newtext);

    }

    const onClickCamel = () => {
        let words = text.split(" ");
        let camelcase = words.map((word) => {
            return word.charAt(0).toLowerCase() + word.slice(1).toUpperCase();
        });
        let newtext = camelcase.join(" ");
        setText(newtext);
    }

    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter the text here!');


    return (
        <>
            <div>

                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.heading}</label>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnchange}></textarea>
                </div>
                <button className='btn btn-primary mx-3' onClick={onClickUpper}>Convert to Uppercase</button>
                <button className='btn btn-primary ' onClick={onClickLower}>Convert to Lowecase</button>
                <button className='btn btn-primary mx-3' onClick={onClickCaps}>Convert CapitalisedCase </button>
                <button className='btn btn-primary ' onClick={onClickCamel}>Convert CamelCase </button>
                <button className='btn btn-danger mx-3 ' onClick={onClickClear}>Clear</button>
            </div>
            <div className="container my-3" >
                <h3>Your Text Summary</h3>
                <p>{text.split(' ').length - 1} words and {text.length} characters</p>
                {/* <p>{text}</p> */}
                <p> It will take you {0.008 * text.split(' ').length} Minutes to Read this.</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )

}
