import './index.css';

const Glass = () => {
    return (
        <div className="blurred-wrapper">
            <header className="main-header container">
                <a className="logo" href="index.html">Cat I'm A Kitty Cat!</a>
                <button className="btn sign-up">And I Meow meow meow.</button>
            </header>
            <section className="hero container">
                <div className="content-wrapper">
                    <h5 className="tagline">Meow meow meow I'm a tagline</h5>
                    <h2 className="title">Cause Kitty Mews are Cool! I'm a title.</h2>
                    <p className="message">I'm a fluffy fuzzy wonder. I'm a message.</p>
                    <button className="btn cta">Learn Meor!</button>
                </div>
            </section>
        </div>
    )
}

export default Glass