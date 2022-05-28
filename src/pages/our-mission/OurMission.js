import './our-mission.css';

export default function OurMission() {
    return (
        <>
            <Title />
            <Landing />
            <OurGoals />
        </>
    )
}

function Title() {
    return (
        <>
            <section className="section om-s1">
                <div className="title-div">
                    <img src="./assets/our-mission/title1.png" alt='' />
                    <h2>Nasza wizja</h2>
                    <p>Być miejscem spotkań kultury polskiej z ukraińską, poprzez stworzenie przestrzeni do wzajemnego kontaktu i współdziałania.</p>
                </div>
                <div className="title-div">
                    <img src="./assets/our-mission/title2.png" alt='' />
                    <h2>Nasza misja</h2>
                    <p>Opracowanie sposobów dostępu do rozpowszechniania dziedzictwa audiowizualnego i zmysłowego wywodzącego się z kultury ukraińskiej w Polsce.</p>
                </div>
                <a href="#s2"></a>
            </section>
        </>
    )
}

function Landing() {
    return (
        <>
            <section className="section om-s2" id="om-s2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et pharetra ipsum, in vulputate lectus. Aliquam placerat erat in justo volutpat placerat pulvinar eget nibh.</p>
            </section>
        </>
    )
}

function OurGoals() {
    return (
        <>
            <section className="section om-s3">
                <div className="our-goals">
                    <h2><img src="./assets/our-mission/our-goals.png" alt="" />Nasze cele</h2>
                </div>
                <div className="goals-line-div">
                    <div className='line'>
                        <div className="blue-line">
                            <div className="point">
                                <p>Zaoferowanie wszystkim zainteresowanym miejsca do spotkań, rekreacji i różnych form ekspresji kultury ukraińskiej.</p>
                            </div>
                            <div className="point"></div>
                            <div className="point">
                                <p>Generowanie doświadczenia w społeczności polskiej i europejskiej kultury globalnej, która będzie zachęcać do rozpoznania wspólnych i odróżniających je cech ze społecznością ukraińską.</p>
                            </div>
                            <div className="point"></div>
                        </div>
                        <div></div>
                        <div className="yellow-line">
                            <div className="point"></div>
                            <div className="point">
                                <p>Przyczynienie się do konsolidacji i waloryzacji tożsamości kulturowej Ukrainców, poprzez wiedzę i zrozumienie korzeni, historii i różnorodności kulturowej.</p>
                            </div>
                            <div className="point"></div>
                            <div className="point">
                                <p>Zgromadzenie społeczności Ukraińskiej, która żyje w Polsce.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}