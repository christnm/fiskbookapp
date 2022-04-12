import '../Fiskies.css'
import { useState, useEffect} from 'react';
import { Row, Col, Card } from 'react-bootstrap';



const Fiskies = () => {

    // const superheroGrid = document.querySelector('#superhero-grid');
    // const searchBtn = document.querySelector('#btnsearch')
    const [superHeros, setSuperheroes] = useState([]);
    const [searchInput, setSearch] = useState('')

    

    const getAlldata = () =>{
        fetch("https://raw.githubusercontent.com/christnm/fiskbookapp/rejin/Fiskites-Write.json")
            .then(response => response.json())
            .then((data) => {
                setSuperheroes(data);
            });
    }
    useEffect(()=>{
        getAlldata()
    }, [])

    const handleSearchInput = (e) => {
        setSearch(e.target.value)
    }

    function filterByName() {

        let filteredArray = [];
        if (searchInput != "") {
            superHeros.forEach((hero) => {
                if (hero.name.toLowerCase()
                    .startsWith(searchInput.toLowerCase()))
                    filteredArray.push(hero);
                    setSuperheroes(filteredArray)
                
            });
        } else {
            getAlldata();
        }
        console.log({ searchInput });
        return filteredArray;
    }


    return (
        <>
            <body >


                <h1 id="first">Latest Advice From Our Students</h1>

                <p id="second"> Want to advice people who look up to you? Contact Us.</p>

                <div class="row" style={{ marginLeft: '20px', marginBottom: '30px' }}>
                    <div class="col-6">
                        <div class="input-group">
                            <input id="search-input" type="text" class="form-control" placeholder="Search Your Post" aria-label="" onChange={handleSearchInput} />
                            <button id="btn-search" type="button" class="btns btn-primary" onClick={filterByName}>Search</button>
                        </div>
                    </div>
                </div>



                <Row xs={1} md={2} className="g-4">
                    {superHeros.map(hero => (
                        <Col style={{ marginLeft: '20px' }}>
                            <Card>
                                <Card.Img style={{ maxHeight: '300px' }} variant="top" src={hero.image} />
                                <Card.Body>
                                    <Card.Title>{hero.name}</Card.Title>
                                    <Card.Text>
                                        {hero.by}
                                    </Card.Text>
                                    <Card.Text>
                                        {hero.advice}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
                {/* <div class="container mt-4">
                    

                   {/* <div id="superhero-grid" class="row row-cols-1 row-cols-md-4 g-4 mt-4">
                        <div class="col">
                            <div class="card">
                                <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                                    class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Advice 1 Title</h5>
                                    <p class="card-by">Adviced by: </p>
                                    <p class="card-on">Adviced on: </p>
                                    <p class="card-text">Advice...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                                    class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Advice 2 Title</h5>
                                    <p class="card-by">Adviced by: </p>
                                    <p class="card-on">Adviced on: </p>
                                    <p class="card-text">Advice...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                                    class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Advice 2 Title</h5>
                                    <p class="card-by">Adviced by: </p>
                                    <p class="card-on">Adviced on: </p>
                                    <p class="card-text">Advice...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                                    class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Advice 2 Title</h5>
                                    <p class="card-by">Adviced by: </p>
                                    <p class="card-on">Adviced on: </p>
                                    <p class="card-text">Advice...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <br /><br /><br />

                <div class="end-part">
                    <div class="connection">Connect with us SOCIALLY !!! </div>

                    <footer class="social-footer">
                        <div class="social-icons">
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-youtube"></a>
                            <a href="#" class="fa fa-instagram"></a>
                        </div>
                    </footer>

                    <footer>
                        <p class="cr">© FiskBook 2022</p>
                    </footer>
                </div>
            </body>
        </>

    )
}

export default Fiskies