import '../contact.css'
import { Button, Form } from 'react-bootstrap'

const ContactUs = () => {
    return (
        <>
            <body>
                <br /><br />

                <h1 class="section-header"> Contact Us</h1>

                <div class="contact-wrapper">

                    <Form id="contact-form" class="form-horizontal" role="form">

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                            <Form.Control type="email" placeholder="Enter full name" />
                        </Form.Group>
                        

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        


                        <textarea class="form-control message" rows="10" placeholder="Write your Message Here..." name="message" required></textarea>
                        <br />

                        <Button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            SEND
                        </Button>

                    </Form>



                    <div class="direct-contact-container">

                        <ul class="contact-list">
                            <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">FiskBook</span></i></li>
                            <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Nashville, TN</span></i></li>

                            <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">helpdesk@fiskbook.com</a></span></i></li>

                        </ul>



                    </div>

                </div>
                <div class="end-part">
                    <div class="connection">Connect with us SOCIALLY !!! </div>

                    <footer>
                        <p class="cr">© FiskBook 2022</p>
                    </footer>
                </div>

            </body>

        </>
    )
}

export default ContactUs