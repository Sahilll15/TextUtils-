import React, { useState } from 'react'

export default function About() {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    // const [btntext, setbtntext] = useState('Enable Dark mode');

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtntext("Enable Dark Mode")
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //         })
    //         setbtntext("Enable Light Mode")
    //     }
    // }


    return (
        <div className='container'>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>1.</strong>Welcome to textUtils! We are a text processing and manipulation tool that helps you make the most out of your written content. Our platform is designed to simplify and streamline the process of working with text, whether you're a professional writer, editor, or simply someone who needs to clean up and format text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>2.</strong> At textUtils, we are passionate about creating a user-friendly platform that empowers our users to work with text in new and innovative ways. Our team of experts has years of experience in software development and text processing, which enables us to create tools that are intuitive, efficient, and effective.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>3..</strong>Our platform includes a wide range of text processing tools, including formatting, text conversion, case conversion, and more. We understand that working with text can be a time-consuming and often frustrating process, which is why we have designed our platform to save you time and make your life easier.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div onClick={toggleStyle} className="container my-3"><button className='btn btn-primary'>{btntext}</button></div> */}

        </div>
    )
}
