export default function About() {
    return (
        <body>
    {/* NEWSLETTER */}
    <section id="newsletter">
        <div class="container">
            <h2>Subscribe To Our Newsletter</h2>
            <form action="">
                <input type="email" placeholder="Enter Email..." />
                <button type="submit" class="button_1">Subscribe</button>
            </form>
        </div>
    </section>
    {/* MAIN SECTION */}
    <section id="main">
        <div class="container">
            {/* MAIN COLUMN */}
            <article id="main-col">
                <h1 class="page-title">About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt quasi fugit, quae quaerat,
                    corporis voluptatem deleniti qui, quisquam officiis voluptatum voluptates. Sed vitae reprehenderit,
                    sunt, nihil facilis sequi et fugiat quo sapiente, error exercitationem? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Vel reprehenderit consequatur, in magni velit rem. Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Odio dolor dolorum recusandae ex quam iusto temporibus ipsa,
                    molestias, beatae possimus dolore debitis asperiores et voluptatum.</p>
                <p class="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam ad sunt dolor! Deleniti
                    repudiandae perferendis voluptatum error labore eos quisquam impedit quasi sit quo. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quam quo, iusto quas perferendis doloribus ea
                    laudantium, quasi ratione cupiditate vel voluptatem a expedita id assumenda excepturi eos unde
                    exercitationem maxime quisquam odio pariatur, incidunt tempora.</p>
            </article>
            {/* SIDEBAR */}
            <aside id="sidebar">
                <div class="dark">
                    <h3>What We Do</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus necessitatibus ab eligendi,
                        quo
                        officia praesentium exercitationem quisquam tempora dolorem impedit accusamus magnam esse error
                        quis!</p>
                </div>

            </aside>
        </div>
    </section>
    </body>
    )
}