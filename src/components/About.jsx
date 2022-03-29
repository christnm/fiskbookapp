import '../AboutUs/AboutUs.css' 
import awantika from '../AboutUs/awantika.jpg'
import christian from '../AboutUs/christian.jpg'
import rejin from '../AboutUs/rejin.jpg'
import rasneet from '../AboutUs/myself.jpg'


const About = () =>{
    return (
        <body>
            <link href='./About.css'/>
            <div className = "content">
                <div className ="vision">
                    
                    <h1> -VISION- </h1>
                </div>
                <div className ="vstatement">
                    <p> To Build largest community of students for acessing opportunties</p>
                </div>

                <div className="mission">
                    <h2> -MISSION- </h2>
                </div>
                <div className ="mstatement">
                    <p> To elevate the academic pursuits of students by guaranteeing awareness about  opportunities </p>
                </div>

                <div className ="values">
                    <h2> -VALUES- </h2>
                </div>
                <div className ="valuesstatement">
                    <p> Student Focused | Collaboration | Success </p>
                </div>
            </div>

    <div className ="teamsection">
        <h3> Meet <br/> Our Team </h3>
        <div className ="team">
            <div className ="member">
                <div>
                    <img className="memberImg" src={awantika} class="memberImg" width="200" height="250"/>
                </div>
                <h4> Awantika Bastola </h4>
                <span> Freshman at Fisk University </span>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit tellus, consequat gravida cursus sed, pretium et enim. Suspendisse et ipsum ac lectus interdum iaculis et iaculis ante. Pellentesque a elit dolor. </p>
            </div>
        

        
            <div className ="member">
                <div>
                    <img className="memberImg" src={christian} width="200" height="250"/>
                </div>
                <h4> Christian Morales </h4>
                <span> Senior at Fisk University </span>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit tellus, consequat gravida cursus sed, pretium et enim. Suspendisse et ipsum ac lectus interdum iaculis et iaculis ante. Pellentesque a elit dolor. </p>
            </div>
        

        
            <div className ="member">
                <div>
                    <img className="memberImg"src={rejin} width="200" height="250"/>
                </div>
                <h4> Rejin Nepal </h4>
                <span> Freshman at Fisk University </span>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit tellus, consequat gravida cursus sed, pretium et enim. Suspendisse et ipsum ac lectus interdum iaculis et iaculis ante. Pellentesque a elit dolor. </p>
            </div>
        

        
            <div className ="member">
                <div>
                    <img className="memberImg" src={rasneet} width="200" height="250"/>
                </div>
                <h4> Rasneet Singh </h4>
                <span> Freshman at Fisk University </span>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit tellus, consequat gravida cursus sed, pretium et enim. Suspendisse et ipsum ac lectus interdum iaculis et iaculis ante. Pellentesque a elit dolor. </p>
            </div>
        
    </div>
    </div>

    
    
</body>
    )
}

export default About