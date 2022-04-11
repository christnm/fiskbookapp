import React, { useEffect } from "react"
import { useState } from "react"
import { Row, Col, Card, Button, Container} from "react-bootstrap"
import { MainModal } from "."

const Main = () =>{
    const [posts, setPosts] = useState([
        {
            'title': "Google software engineering internship",
            'description': "Our engineers create, fix, extend and scale the code to keep it working and to harden it against all the vagaries of the internet. We drive reliability and performance across a massive scale. You will work on software development projects to keep important revenue-critical systems up and running, from code-level troubleshooting of traffic anomalies to maintenance of our most cutting-edge services; from monitoring and alerts to building new automation infrastructure.",
            "link": 'https://www.google.com/about/careers/applications-a/apply/5e740313-afc1-4d2f-a4bb-0858b049fa25/form',
            "picture": 'https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png'
        },
        {
            'title': "Meta software engineering internship, Speech And Audio Render Algorithms",
            'description': "These roles are focused on developing the next generation of speech and audio enhancement algorithms for wearables in various acoustic environments. In particular we welcome PhD students in Electrical Engineering, Computer Science, Physics, or similar fields, with a strong background in digital signal processing, spatial sound render, adaptive system identification, sound source localization & separation, and machine learning with application to speech and audio enhancement.",
            "link": 'https://www.metacareers.com/v2/jobs/448120353434072/',
            "picture": 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA6lBMVEX///8cKzMAgfsDZ+ETJS0OIitqcXUADRtQWV8AABAAABUYKDDs7u8LICp3fYBdZWoAFCACde8sOUAAGiVxeHwAfvtYYGYAdfsDbOa4u7wCdO4Ae/sAePsAAAvR09UAZOEAWt8AYOAAAAAAVt+EiY0AER47RUyqra/J3fyFqezi7f3j5eaYnaC50/zd3+ChpaioyPvw9v4wjfq/1/xVnPqeuvDm7/2QlZl/sfsPhPqLuPvV4fhqpvtCTFLEx8hWlPGRse19pOpSieY9feVvm+ofcOJGk/ivxfE1euUxi/lnpPp3rfuYwPsAZ++MGIudAAAMJUlEQVR4nO2cbVvaPBTHqRZLKQUUeS4iCujtM7qpyHBubu520+//de4+5CRpclLQi3uXL87/3Wga2p8nJ/+chOVyJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUir0ezXw7dvD79m2a0OL25v7y4O/84jfVAdft3dHcTa3f/+y9Tq6lMz6Hbr3W7Q/HT6F5/uQ+nq525/nas/GHzGWh0+B/U1UD1YWwJXuQEqHC/zIAXefPi2N/hrmjzKqGINWvpA+90UqGIFl9eLui7UbKZaYYknGVZ58433vMn/rysNVRRd+9/Sra6n3TVV9eai4CrYFqh4v/BJjnu8df79sG6S8CxU3t2DWQ/7Oqo4uB7lVrOgrrEK1bzN7lyC5W0tfJRKfhWwtpNozi/+vjfrn12cVRhcrQlvddiU4knGFvzJ7F2CZTkHCx5lx7VWAavsL/vHeasejKxCWn2gJVh1m9Ony24ghmSQGVsyLM9f8Cxj+2PD+rWv4EFpHQGr7vQi/uTorstxNS8y+pdhWbWTzGdpO9aHhnUksxrs/3x87O8OUiMxajWBcdd8Ebf+4cHWzLCxKVhWsZT1MJ73sWGti0ga9D/HQXP9eV3C1f83/OiZwQpSduIq4EnM/AVpWH4541nOq9aHhvVDYNn9IT6W58fBj9wXNuK6R+m7Z0Cr+9v4DWlYVi/DmTrWh4Y1E1D2U5Z9NpAi7itjEhxp98NIbBqXigqsvNmZDmsfG9ZPjmRfWQ1OpPHZ30yAXOkdXEBsTU1focCyijuGhqWe9aFh/eKuYfcf9ZpMaz2Oqzusi0+QzUwzIofF7KbxDcCP5j8oLI6j/6hfvJayfCvM4U9oFxNuIAzfAbDyZUbBaaPtwI/60M4E67h9s90oNDaGB6YYXRZW0lNl++Q+c45OJAXWBLksJbT1Tj3AmoS6gORvCC2AVSyx/G1wpsyPenloh8I6vrGK1Vo+H65l/JrjlNO8KoVEW2BBCkJzBW3pxHLDnuKORm4h+Qu250njsf7NLYgsvB6Tu5C8vXnBvJadtQCWmzthzgB1puBHR+1S0QjruNKryVbM8t1U3WfsJwUL3sYWUnLl0E31ZDtb0fUDhzXWvvpKsDBwkIyFqYkIrQCfEAWsHLwE5kwtD0aOGdZNL2+pyvck9GNPu87lyLB2/Jp63esNQ1jsY0d7vu88sIx1UR5764MHIy0Gq/5lESyIHsSZgh8N//5GWPOqhckRhZhlYZ3sYQ2rBTOsyW6r1UrSu5HDTATfvrHMd8doNRfB4utk3ZlCngpdmAFWydPDKpEoKi4Ja1g0dFRpm2B9HrQiWq2soLlrCbP1r6kRLLIDNK3JsGDGyzeURuBHI4oGWJ7k12zf96V/VqHlcrBODKzCkIeZQYP1uN5KhE6FgEEkrV18FsjxlWMdXfPIsLiXUrIt+NF4fOKwxjyu7JFTKA/LjZrDPyqyOtmWU40FIL2q0B585Y5kfvPVYtH3neLIZzcAWeUl4lEYx9Z3E4SYgkTLBPUF3MNCWFA1VhwQZ1gywRryfOXMoTi9U3Hh5diU0WZqMBuydd8WgllFzIK2W2nHCaF0Xy76qTBUXuJ0wGCZ03sMoSMGookqH4dYpSYFi4+3lDOF0VmNJzYM1hlEg1eUb7yvshf3t1PfmWVKxQp0lLIdw540hlVY3xaOwuuEgRRaptVyNxmH3RfkWhpWDnOm3I/G/8Jg8TWTc5bqvARhkp4yMmCJFWhRsXs7VUFLhfWz1el0IljISifRE0tFYo3YMrT8nZG0FFjnujMFR8GiDYHFS/M9dYUDIeenNhkzYJVhuDnn6qWSoKXAmrx2EvUfDASgoFB/XGi2wJdi60MFFrhPyZmy+qjN1hgIrI28Rhg0ZC8/kj/MgAUzoY8spkTqV2AdAqxXw9iaAKtLsd425fhD1raJXFZhac4UYs1lUYPAgmnB07svsaBz5D1JM6w2TBRV7D14PlNgXfQBliFlQe2lOcudcmtqyPGTjAyvwsrNFWcKfhSMuA4L3rCG7aSxqEuNQzOsjBiNNMJh3bY2Y3U20btypxBYUR4SA9GQ48E7ILZUg3WWdqayH42lw4I842KVFEbSkwsFZlgwIaBdiW9SYH3tMFhf0bvg9ZORdS2KNXiOfzJPhxos/teNnSnMTjUeGTos5qtttCJ9XFT7z4AFfeNdiQyowJpuMlj4DukXNgi7SXn0H15+wHM8TIfI5rQOqyQ7U/Cj4vF0WG7m0GHNZVNhhHU/yuzKBCtgsAL8aBFsRMAel5TjsQX1bRKI9U/6JR2W7Ey5HxUTuQYLYsdubCMqs/5HUoY3wjqo6o1lGWC9Aix09QsFPX51QY5nCx6s9IzAyjFDE7pQlu09S1zUYO3AFpmdx8QuViVrb4R1An+mM/VKIhzWpBmRqtfr6B7WLZSoLvlHUo5HlkfMaEntuTBY8Ae2C/Bw0ptqsGDsZKsmmUwjrBsGy7QxjsO6btYTYTvvYjdQXJS2+Qf6HWzuXBYWpGyLXbPn0rX3wpLSkBEWwHgbrKMQ1poJ1rQu2QbQN57j+z+0O94K6z5dUnLlVcz/Cet9kRXDil4P8ZF3KdvAxcdhSzdbb4WV3npNV67MOctDcxbTaBlY78tZ1zDSdFh8EHbTu6qwcRYtvtV73gzrTN5+7qX+zhqsM6hUzCsZakj2fsWz4YTD0qJkClOhuixmOT5k1VdOm8Kie9nZMNS2KLbV0seSNViw/KtpdQKTFvssQ1cG68DDR90b/QODUDMVSY5PamBKPN69yWdFKokDkcqaVjel+SwHj8kI69i4zZbIAGsNkrji4K+4HdWjJPbxrGSYvsJW3WpnkQyweK61qsryWIcF6yPDgk6XeW0I6U/fGIxlgAVFBWUj+ZqfT2siTr0lYKXrfBlb+CZYuaJbjNRT6y46LMg0S49DWA/rBwVgdVXFD1zk8d0dPuWlMzy4BrxEPNtnqFqdV5kLHGrDNqWNsEzSYfHF5KLzuyAIEP07gTt+ZuTEUM/iRxxTeeYJWNWf0af4Absc6aIhr30tUfxbKKT4B33UlvyFitkh8BJ8FYnSY55H1VHKT89KifxJHEDWDvklaq0zViEtHpKnrC/MOawE1j2kGhed8sfqi7fN43YDZmGtnJ8r5U01eJG0+MnsGR+DawE2COM2+8Cqw0fiKZ9Zl9jdWSxsd4efj0donXl59cXBxsrrc2gN0eM56k3SJrcKSxw1XgueX05PX57EB4aDa5EeBsBqc7M5je67FCe8serNSmCJrYTejdK63PPCF1fmSSBS04+gVCC0PDdV1LrJ2jfkZZg4JkJJPzHJOKmd+77OYW12glCbPM8hLmtFsHJlvjVasySrsVN243e3lXzd4IWbAsRPifGUDZ51zmrZO0MndQZJg3UarBmU9RuAMG0JWEmVp55522pg5bb4GPGq7nx4fn5+Miw4DoSJn/4BWJuvvW1nFK6SClsOP+twIBbxXq3ojAvzrSL0w/dytad6Qn/lFb509q/irl9bglVMKyuwVgWrJB+bsf1aKPkTay9tnPLSmLLtvO1Jp2g2UkHkSQcFqxu2CdZE//mgnO+Nmr1KsCJWSf2ii++prQhWOFeZzmdFb9xTlgFtV20i5fOCduwvUfHceD5Lqi+8iRWjJUVWPWvsrgpWrjTGT/5FEWFphmpDbSxPfhW0QuYOM45JYr+3rGO/DNB0tNnaFLCiyMLL05FWBgs/Uxqq5t4g3TQUICmncNOz1V7sKDizYOUmT2lcwfPC3zwn+v0qjcN6PZgaTGwIC1bBy3WcBSs6rewrh/vy1eIQX1/f9NJHrlK26mzspHDZxXk0MbLVkGdYZ19dNplpqHeD6fL/+cDs62uzE7Pqdpv1jKE7H9Vi7S3bc2kvucHBfuF8PPSLVd/2IoVp3nEb+Io4blt2neiguxefmd9TPOh9occ6sv1qr5CY3QN3wcMevfx+DoNj+uluwX9+oWhy8eU5pLX2dPd3/z+Ms4NhYxya83GjfG78jQXT/cl2YT6eV8rnyDqp1B4WtjxvqzFsL1v7IZFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQy6z8P2yjlIXv9HAAAAABJRU5ErkJggg=='
        }
        

    ])

    const addPost = (title, description, logo, link) => {
        setPosts([
            {
                'title': title,
                'description': description,
                'link': link,
                'picture': logo
            },
            ...posts
        ])
        
    }
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'job-search4.p.rapidapi.com',
            'X-RapidAPI-Key': 'e918046c81msh5eec9c55e10aa92p1c2343jsn62da6a16d0dc'
        }
    };

    // useEffect(()=>{
    //     fetch('https://job-search4.p.rapidapi.com/indeed/search?query=Software%20Engineer%20internship&page=1', options)
    //     .then(response => response.json())
    //     .then(response => setPosts([response,]))
    // }, [])

    // useEffect(()=>{
    //     fetch('https://github.com/christnm/fiskbookapp/blob/master/data.json')
    //     .then(response => response.json())
    //     .then(response => setPosts([response]))
    // }, [])
    
     

    return (
        <>
        <Container fluid style={{'margin': '0', 'height': '100%', 'padding': '0'}}>
            <Row className="text-center" style={{'height': '100%', 'margin': '0'}}>
                <Col xs={3} >
                </Col>
                <Col  md>
                    <h1 style={{fontSize: '50px', color: '#FFF'}}>Announcements and Opportunities</h1>
                    <MainModal onPost={addPost}/>
                    {posts.reverse().map(co => (
                        <Card style={{ width: '100%', heigth: '30rem', backgroundColor: '#A9B0AC', marginBottom: '1rem' }}>
                        <Card.Img variant="top" src={co.picture}  style={{width:'150px',left:'40%', position: 'relative', marginTop: '1rem'}}/>
                        <Card.Body>
                          <Card.Title>{co.title}</Card.Title>
                          <Card.Text>
                            {co.description}
                          </Card.Text>
                          <Button variant="primary" href={co.link}>Apply on Site!</Button>
                        </Card.Body>
                      </Card>

                    ))}
                </Col>
                <Col xs={3}>
                    
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Main