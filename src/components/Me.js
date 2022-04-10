import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const Me = () => {
	return (
		<>
		{/* <section style={{'backgroundImage':'url(https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'}}  */}
			<section className="body">
				<div className="right">
					<section id="intro" className="intro">
						<img src="./images/Me.jpg" alt="me" height="200px" width="270px" />
						<h1>Ashutosh Mohapatra</h1>
						<div id='text'>
							<TypeWriterEffect
								className='text'
								textStyle={{
									fontFamily: 'sans-serif',
									color: 'transparent',
									fontWeight: 600,
									fontSize: '6rem',
								}}
								startDelay={1000}
								cursorColor="#1a83ff"
								multiText={[
									'HTML',
									'CSS',
									'ReactJS',
									'NextJS',
									'Flutter',
									'Java',
									'Python',
									'HTML',
									'CSS',
									'ReactJS',
									'NextJS',
									'Flutter',
									'Java',
									'Python',
									'HTML',
									'CSS',
									'ReactJS',
									'NextJS',
									'Flutter',
									'Java',
									'Python',
									'HTML',
									'CSS',
									'ReactJS',
									'NextJS',
									'Flutter',
									'Java',
									'Python',
								]}
								multiTextDelay={1000}
								typeSpeed={300}
							/>
						</div>
						{/* <button>Enable dark Mode</button> */}
					</section>
				</div>
			</section>
		</>
	)
}

export default Me
