import Link from 'next/link'

export default function Header() {
    return (
        <header>
        <div class="container">
            <div id="branding">
                <h2><span class="highlight">Acme</span> Web Design</h2>
            </div>
            <nav>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/services"><a>Services</a></Link></li>
                </ul>
            </nav>
        </div>
        </header>
    )
}
