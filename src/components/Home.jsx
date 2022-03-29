import '../HomeF/Home.css'

const Home = () => {

    return (
        <div>
            <body>

                <div class="container-1">
                    <div class="img-container">
                        <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFDKpuRDEVtzuIA4UzRcwoCT4HCoFSB1zEA&usqp=CAU" />
                    </div>
                    <div class="main-name-container">
                        <p className="p-class">FiskBook</p>
                        <p class="a" className="p-class">... in service of students, always</p>
                    </div>
                </div>

                <hr />

                <div class="container-2">
                    <button type="button" class="btnH btn-posts">Posts</button>
                    <button type="button" class="btnH btn-secondary">About Us</button>
                    <button type="button" class="btnH btn-success">Bookmarks</button>
                    <button type="button" class="btnH btn-danger">Contact Us</button>
                    <button type="button" class="btnH btn-warning">FAQs</button>
                </div>

                <hr />
                <br /><br />


                <div class="container-3">
                    <div id="about-fiskbook">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>

                <br /><br />

                <hr />
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-google"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-pinterest"></i>
                <i class="fab fa-vk"></i>
                <i class="fab fa-stack-overflow"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-slack-hash"></i>
                <i class="fab fa-github"></i>
                <i class="fab fa-dribbble"></i>
                <i class="fab fa-reddit-alien"></i>
                <i class="fab fa-whatsapp"></i>
            </body>
        </div>
    )
}

export default Home
