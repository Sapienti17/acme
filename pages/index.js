import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <body>

    {/* SHOWCASE */}
    <section id="showcase">
        <div class="container">
            <h1>Affordable Professional Web Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae pariatur a officia, inventore fugit illum.
            </p>
        </div>
    </section>
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
    {/* BOXES */}
    <section id="boxes">
        <div class="container">
            <div class="box">
                <img src="./img/logo_html.png" alt="" />
                <h3>HTML5 Markup</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis itaque placeat ad voluptatum
                    consequuntur veritatis dolore asperiores quaerat impedit aliquam.</p>
            </div>
            <div class="box">
                <img src="./img/logo_css.png" alt="" />
                <h3>CSS3 Styling</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam praesentium ullam possimus? Nemo
                    vel optio laborum adipisci perspiciatis reiciendis quod.</p>
            </div>
            <div class="box">
                <img src="./img/logo_brush.png" alt="" />
                <h3>Graphic Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem corrupti vel eos deleniti
                    eligendi aliquid a qui repellendus maiores?</p>
            </div>
        </div>
    </section>
  </body>
  )
}
