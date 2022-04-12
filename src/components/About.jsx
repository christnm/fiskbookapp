import '../AboutUs/AboutUs.css' 
import awantika from '../AboutUs/awantika.jpg'
import christian from '../AboutUs/christian.jpg'
import rejin from '../AboutUs/rejin.jpg'
import rasneet from '../AboutUs/myself.jpg'


const About = () =>{
    return (
        <body>
        <div>
            <div class="vision">
                <h1> OUR VISION </h1>
            </div>
            <div class="vstatement">
                <p> "To Build largest community of students for acessing opportunties"</p>
            </div>

            <div class="vision">
                <h1> OUR MISSION </h1>
            </div>
            <div class="mstatement">
                <p> "To elevate the academic pursuits of students by guaranteeing awareness about  opportunities" </p>
            </div>

            <div class="vision">
                <h1> OUR VALUES </h1>
            </div>
            <div className="mstatement">
                <p>Student Focused | Collaboration | Success</p>
            </div>
        </div>

        <div class="wrapper">
            <h1>Our Team</h1>
            <div class="our_team">
                <div class="team_member">
                  <div class="member_img">
                     <img src={awantika} alt="our_team"/>
                    <div class="social_media">
                       <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
                       <div class="twitter item"><i class="fab fa-twitter"></i></div>
                       <div class="instagram item"><i class="fab fa-instagram"></i></div>
                     </div>
                  </div>
                  <h3>Awantika Bastola</h3>
                  <span>Freshman</span>
                  <p>Computer Science Major</p>
                </div>
                <div class="team_member">
                   <div class="member_img">
                     <img src={christian} alt="our_team"/>
                     <div class="social_media">
                       <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
                       <div class="twitter item"><i class="fab fa-twitter"></i></div>
                       <div class="instagram item"><i class="fab fa-instagram"></i></div>
                     </div>
                  </div>
                  <h3>Christian Morales</h3>
                  <span>Senior</span>
                  <p>Computer Science Major </p>
              </div>
                <div class="team_member">
                   <div class="member_img">
                     <img src={rasneet} alt="our_team"/>
                     <div class="social_media">
                       <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
                       <div class="twitter item"><i class="fab fa-twitter"></i></div>
                       <div class="instagram item"><i class="fab fa-instagram"></i></div>
                     </div>
                  </div>
                  <h3>Rasneet Singh</h3>
                  <span>Sophomore</span>
                  <p>Computer Science Major </p>
              </div>
                <div class="team_member">
                   <div class="member_img">
                     <img src={rejin} alt="our_team"/>
                     <div class="social_media">
                       <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
                       <div class="twitter item"><i class="fab fa-twitter"></i></div>
                       <div class="instagram item"><i class="fab fa-instagram"></i></div>
                     </div>
                  </div>
                  <h3>Rejin Nepal</h3>
                  <span>Freshman</span>
                  <p>Computer Science Major</p>
              </div>  
            </div>
        </div>
        <br/><br/><br/>
        
        <div class="end-part">
            <div class="connection">Connect with us SOCIALLY!!! </div>
            <footer>
                <p class="cr">© FiskBook 2022</p>
            </footer>
        </div>
  
    </body>
    )
}

export default About