import React from "react"
import { useState } from "react"
import { Row, Col, Carousel, CarouselItem, Container} from "react-bootstrap"

const Main = () =>{
    const [posts, setPosts] = useState([
        {
            'title': "Google software engineering internship",
            'description': "Our engineers create, fix, extend and scale the code to keep it working and to harden it against all the vagaries of the internet. We drive reliability and performance across a massive scale. You will work on software development projects to keep important revenue-critical systems up and running, from code-level troubleshooting of traffic anomalies to maintenance of our most cutting-edge services; from monitoring and alerts to building new automation infrastructure.",
            "link": 'https://www.google.com/about/careers/applications-a/apply/5e740313-afc1-4d2f-a4bb-0858b049fa25/form'
        }
    ])

    return (
        <>
        <Container fluid style={{'margin': '0', 'height': '100%', 'padding': '0'}}>
            <Row style={{'height': '100%', 'margin': '0'}}>
                <Col xs={2} style={{'backgroundColor':'#000'}}>
                    <p>Left</p>
                </Col>
                <Col xs={8}>
                    <p>Hello</p>
                    {posts.map(co => {
                        <p>{co.title}</p>

                    })}
                </Col>
                <Col xs={2} style={{'backgroundColor':'#000'}} >
                    <p>Right</p>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Main