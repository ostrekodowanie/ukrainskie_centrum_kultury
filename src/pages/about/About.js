import './about.css';

export default function About() {
    return (
        <>
            <section className="section s1">
                <h1>Lorem ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et pharetra ipsum, in vulputate lectus. Aliquam placerat erat in justo volutpat placerat pulvinar eget nibh.</p>
                <div className="about-image">
                </div>
            </section>
            <section className="section s2">
                <div className="title"><h2>O NAS</h2></div>
                <div className="paragraph-grid">
                    <div>
                        <img src="./assets/about/icon1.png"/>
                        <p>Wspólny wysiłek  Ukrainców żyjących w Polsce, oraz grupy miłośników Ukrainy umożliwił stworzenie Ukraińskiego Centrum Kultury.</p>
                    </div>
                    <div className="lines">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <img src="./assets/about/icon2.png"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et pharetra ipsum, in vulputate lectus. Aliquam placerat erat in justo volutpat placerat pulvinar eget nibh. Etiam efficitur porttitor aliquam.</p>
                    </div>
                    <div className="lines">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <img src="./assets/about/icon3.png"/>
                        <p>Naszym głównym założeniem jest badanie dziedzictwa kulturowego Ukrainy jako integralnej i żywej części świata. Chcemy przyczynić się do rozpowszechnienia się wiedzy na ten temat wśród Polaków, oraz wesprzeć tworzenie się więzi, przyjaźni i współpracy między społecznościami, polską i ukrainską.</p>
                    </div>
                </div>
            </section>
        </>
    )
}