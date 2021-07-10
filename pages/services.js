export default function Services() {
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
                <h1 class="page-title">Services</h1>
                <ul id="services">
                    <li>
                        <h3>Website Design</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quos perferendis
                            voluptates iure, iusto eligendi quo harum sint maiores animi!</p>
                            <p>Pricing: $1,000 - $3,000</p>
                    </li>
                    <li>
                        <h3>Website Maintenance</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quos perferendis
                            voluptates iure, iusto eligendi quo harum sint maiores animi!</p>
                            <p>Pricing: $250 per month</p>
                    </li>
                    <li>
                        <h3>Website Hosting</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quos perferendis
                            voluptates iure, iusto eligendi quo harum sint maiores animi!</p>
                            <p>Pricing: $25 per  month</p>
                    </li>
                </ul>
            </article>
            {/* SIDEBAR */}
            <aside id="sidebar">
                <div class="dark">
                    <h3>Get A Quote</h3>
                    <form class="quote" action="">
                        <div>
                            <label for="">Name</label><br />
                            <input type="text" name="" id="" placeholder="Name" />
                        </div>
                        <div>
                            <label for="">Email</label><br />
                            <input type="email" name="" id="" placeholder="Email Address" />
                        </div>
                        <div>
                            <label for="">Message</label><br />
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <button class="button_1" type="submit">Send</button>
                    </form>
                </div>

            </aside>
        </div>
    </section>
    </body>
    )
}
