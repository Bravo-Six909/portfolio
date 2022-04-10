import React from 'react';
import "./Contact.css";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const style = {
    cursor: "pointer"
}

const Contact = () => {
    return (
        <>
            <div className="contact_box" id="contact">
                <h2 className="contact_heading">You can contact me here</h2>
                <div className="icon_container">
                    <a href="https://github.com/Bravo-Six909" target="_blank">
                        <BsGithub style={style} size="50px" color="#8e44ad" className="contact_icons_github" />
                    </a>
                    <a href="https://twitter.com/Bravo_Six909" target="_blank">
                        <BsTwitter style={style} size="50px" color="#48dbfb" className="contact_icons_twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/ashutosh-mohapatra-515176209/" target="_blank">
                        <FaLinkedinIn style={style} size="50px" color="#0a3d62"
                            className="contact_icons_linkedin" />
                    </a>
                    <a href="https://www.facebook.com/ashutosh.mohapatra.7982" target="_blank">
                        <FaFacebook style={style} size="50px" color="#2980b9" className="contact_icons_facebook" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact
