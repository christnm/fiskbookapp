import '../Faq/Faq.js'
import '../Faq/faq.css'

const Faq = () => {
    return (
        <body>
            <div class="Container">
                <div class="UpperContainer">
                    <div class="ask">
                        <h2 id="help">How can we help you?</h2>
                        <button type="button" id="button">Contact Us</button>
                    </div>
                </div>
                <div class="LowerContainer">
                </div>
                <button type="button" class="collapsible" >What should we include in our posts?</button>
                <div class="content">
                    <p>The posts should include brief information of the program along with application deadline for internships and event date for events.</p>
                </div>
                <button type="button" class="collapsible">Can only Fisk students apply?</button>
                <div class="content">
                    <p>No the information provided is open to everyone.</p>
                </div>
                <button type="button" class="collapsible">Does applying guarantee an acceptance?</button>
                <div class="content">
                    <p>No, it does not. Our role is just to compile the available opportunities.</p>
                </div>
                <button type="button" class="collapsible">When is the right time to apply?</button>
                <div class="content">
                    <p>There is no such right time to apply as long as it is before the deadline, but the earlier the better.</p>
                </div>
                <button type="button" class="collapsible">How can I get in touch with you?</button>
                <div class="content">
                    <p>Send us a message in our contact us form.</p>
                </div>
            </div>
        </body>
    )
}

export default Faq