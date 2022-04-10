import React from 'react';
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <>
            <h1 className="skills_head" style={{ textAlign: "center" }}>Projects</h1>
                <div className="dis" id="projects">
                    <ProjectCard color="#4834d4" imgurl="https://media.istockphoto.com/vectors/user-experience-pop-up-windows-and-notifications-of-different-and-vector-id1179661123?k=20&m=1179661123&s=612x612&w=0&h=2gvB-oLzIYZ6rLudo9HtUAIafEvDMQAo1N_ZlsPiXVA=" title="Portfolio Website" info="This is my portfolio website which tells everything about me. " span1="ReactJS" span2="MaterialUI" span3="Javascript" span4="Firebase" url="https://tender-engelbart-731463.netlify.app/"/>
                    
                    <ProjectCard color="#f368e0" imgurl="https://api.backlinko.com/app/uploads/2020/08/instagram-users-post-banner-960x502.webp" title="Instagram Clone" info="Instagram Clone with Google authentication." span1="NextJS" span2="Firebase" span3="MaterialUI" span4="Tailwind" url="https://instagram-clone-tau-six.vercel.app/"/>
                    
                    <ProjectCard color="#1dd1a1" imgurl="https://cdn.vox-cdn.com/thumbor/oxvf21zCP7ZiEtojBaWxrMIDSSg=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69560014/acastro_210119_1777_whatsapp_0002.0.jpg" title="Whatsapp Clone" info="Its a realtime one on one chat application with Google authentication." span1="NextJS" span2="Authentication" span3="Firebase" span4="MaterialUI" />
                


                    <ProjectCard color="#2bcbba" imgurl="https://image.freepik.com/free-vector/weather-concept-illustration_114360-1234.jpg" title="Weather App" info="Tracking the realtime weather using OpenWeather API. " span1="ReactJS" span2="MaterialUI" span3="OpenWeatherAPI" span4="Firebase" url="https://vigorous-morse-0743ac.netlify.app/" />

                    <ProjectCard color="#6c5ce7" imgurl="https://image.freepik.com/free-vector/journalistis-reporters-news-media-isometric-illustrations-set_1284-59699.jpg" title="Daily Khabar" info="It's a news web app which gives latest news as per categories." span1="ReactJS" span2="News API" span3="Bootstrap" span4="Netlify" url="https://pedantic-jackson-23c601.netlify.app/"/>

                    <ProjectCard color="#fa8231" imgurl="https://media.istockphoto.com/vectors/coronavirus-collection-isometric-set-vector-id1221771519" title="Covinf" info="It is a covid-19 tracker web-app.Give latest data on covid worldwide." span3="SSR" span1="NextJS" span2="Covid API" span4="Vercel" url="https://covinf-bravo-six909.vercel.app/"/>




                    <ProjectCard color="#e40000" imgurl="https://mir-s3-cdn-cf.behance.net/projects/404/156b23130449621.Y3JvcCwyNjY0LDIwODQsMjMwLDA.png" title="Netflix Clone" info="It is a Netflix clone whichgives details of different movies,TV series etc." span1="Firebase" span2="NextJS" span3="Movie API" span4="Tailwind CSS" url="https://netflix-clone-chi-rosy.vercel.app/"/>
                    
                    <ProjectCard color="#21c2f7" imgurl="https://cdn.searchenginejournal.com/wp-content/uploads/2020/05/how-to-use-twitter-to-increase-your-google-search-visibility-5eb94d96b1e70-760x400.png" title="Twitter Clone" info="Twitter Clone having upload functionality. " span2="SSR" span1="NextJS" span3="Users API" span4="Firebase" url="https://twitter-cl-bravo-six909.vercel.app/"/>
                    
                    <ProjectCard color="#0961b8" imgurl="https://gotoclient.com/wp-content/uploads/2021/10/linkedin.jpeg" title="LinkedIn Clone" info="LinkedIn Clone" span1="Firebase" span2="NextJS" span3="User API" span4='Upload Functionality' url="https://linked-in-clone-bravo-six909.vercel.app/"/>
                </div>
        </>
    )
}

export default Projects
