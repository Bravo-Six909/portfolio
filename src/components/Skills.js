import React from 'react'

const Skills = () => {
    return (
        <>
            <div className="skills" id="skills">
                <div className="skills_pic">
                    <img src="././images/Pic1-removebg-preview.png" alt="Pic" />
                </div>
                <div className="skills_lang">
                    <p>Python <img src="./icons/python-icon.svg" alt="Python Logo" height="14px" width="14px" /></p>
                    <div className="bar">
                        <div className="progress">
                            <div className="completed python_completed">60%</div>
                        </div>
                    </div>
                    <p>Java <img src="./icons/java-icon.svg" alt="Java Logo" height="14px" width="14px" /></p>
                    <div className="bar">
                        <div className="progress">
                            <div className="completed java_completed">75%</div>
                        </div>
                    </div>
                    <p>HTML <img src="./icons/w3_html5-icon.svg" alt="HTML Logo" height="14px" width="14px" /></p>
                    <div className="bar">
                        <div className="progress">
                            <div className="completed html_completed">80%</div>
                        </div>
                    </div>
                    <p>CSS(I have also done SCSS, Tailwind CSS) <img src="./icons/icons8-css3.svg" alt="CSS Logo"
                        height="14px" width="14px" /> <img src="./icons/sass-lang-icon.svg" alt="SASS Logo"
                            height="14px" width="14px" /> <img src="./icons/tailwindcss-icon.svg" alt="Tailwindcss Logo"
                                height="14px" width="14px" /></p>
                    <div className="bar">
                        <div className="progress">
                            <div className="completed css_completed">80%</div>
                        </div>
                    </div>
                    <p>JS <img src="./icons/icons8-javascript.svg" alt="JS Logo" height="14px" width="14px" />
                    </p>
                    <div className="bar">
                        <div className="progress">
                            <div className="completed js_completed">75%</div>
                        </div>
                    </div>
                    <p>ReactJS <img src="./icons/reactjs-icon.svg" alt="React Logo" height="14px" width="14px" /></p>
                    <div className="bar">
                        <div className="progress">
                            <div className="completed react_completed">75%</div>
                        </div>
                    </div>
                    <p>NextJS <img src="https://iconape.com/wp-content/files/cf/353046/svg/next-js-seeklogo.com.svg"
                        alt="NextJS Logo" height="16px" width="16px" /></p>
                    <div className="bar">
                        <div className="progress">
                            <div className="completed nextjs_completed">60%</div>
                        </div>
                    </div>
                    <p>Flutter <img src="./icons/flutterio-icon.svg" alt="Flutter Logo" height="14px" width="14px" /></p>
                    <div className="bar">
                        <div className="progress">
                            <div className="completed flutter_completed">70%</div>
                        </div>
                    </div>
                    <p>Node <img src="./icons/nodejs-icon.svg" alt="Node Logo" height="14px" width="14px" /></p>
                    <div className="bar">
                        <div className="progress">
                            <div className="completed node_completed">70%</div>
                        </div>
                    </div>
                    <div>
                        Still Learning: <img src="./icons/python-icon.svg" alt="Python Logo" height="14px" width="14px" />
                        <img src="./icons/flutterio-icon.svg" height="14px" width="14px"/>
                        <img src="./icons/git-icon.svg" height="14px" width="14px"/>
                        <img src="./icons/firebase-icon.svg" height="14px" width="14px"/>
                        ...
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
