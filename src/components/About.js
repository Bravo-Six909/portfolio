import React from 'react'

const About = () => {

    


    return (
        <>
            <section className="about" id="about">
                <div className="about_head">
                    <h1>About</h1>
                    <div className="about_me">
                        <div className="about_pic">
                            <img src="././images/pic-removebg-preview.png" alt="Img" />
                        </div>
                        <div className="about_para">
                            <h1>Let Me Introduce Myself</h1>
                            <p>I'm a student in the department computer science and engineering. I have knowledge about Java and
                                python.
                                Currently I'm in Front- end development and learning NextJS. My primary intrest lies in software
                                development and machine learning.</p>
                            {/* <button className="btn">Download Resume</button> */}
                        </div>
                    </div>
                    <h2 className="skills_head">Skills</h2>
                    </div>
            </section >
        </>
    );
}

export default About
