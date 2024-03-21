import About_icon from '../images/about.png'
import Play_1 from '../images/play-icon.png'
function About({setPlayState}) {
    return (
        <div className='about'>
            <div className="about__left">
                <img src={About_icon} alt="" className="about__img" />
                <img src={Play_1} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
            </div>
            <div className="about__right">
                <h3 className="about__right-title">ABOUT UNIVERSITY</h3>
                <h2 className="about__right-titles">Nurturing Tomorrow's Leaders Today</h2>
                <p className="about__right-text">Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                <p className="about__right-text">With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
                <p className="about__right-text">Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
        </div>
    )
}

export default About