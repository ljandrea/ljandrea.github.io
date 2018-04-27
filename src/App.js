import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import scrollToComponent from 'react-scroll-to-component';
import './App.css';

class App extends Component {
    componentDidMount() {
        scrollToComponent(this.Intro, { offset: 0, align: 'top', duration: 400 });
    }

    render() {
        return (
            <div className="App">
                <header id='landing' ref={(section) => { this.Intro = section; }}>
                    <img id='logo' src='./alj.jpg' alt='alj logo' onClick={() => {
                        scrollToComponent(this.Intro, { offset: 0, align: 'top', duration: 400 })
                    }} />
                    <div id='intro'>
                        <h1>hi, i'm andrea.</h1>
                        <hr id='intro-div' />
                        <h6>software supporter | data devotee</h6>
                        <button id='to-bio'
                            // href='#bio'
                            onClick={() => {
                                scrollToComponent(this.Bio, { offset: 0, align: 'top', duration: 400, ease: 'linear' })
                            }}
                            className='btn btn-outline-dark'>who am I?</button>
                    </div>
                </header >

                <section id='bio' ref={(section) => { this.Bio = section; }}>
                    <h3>bio</h3>
                    <br />
                    <div className='row'>
                        <div id='bio-text' className='col col-sm-12 col-md-7'>
                            <p>I'm Andrea Jorge, nice to meet you! I'm a 3rd-year student at the University of Washington majoring in Informatics, with focuses in software development and data science. I love technology, its ubiquity, and overall effect on the human experience. More specifically, I'm passionate about the role tech plays in women's rights and gender equality. My skills include Java, HTML & CSS, React.js, and R, just to name a few. </p>
                            <p>When I'm not running around as a developer or an analyst, I'm a singer (despite what my showerhead might think), ukulele-player (because background music is always good), and foodie (if you're ever in Seattle and want recommendations, let me know!). The best job, though, is being a daughter, sister, and friend.</p>
                        </div>
                        <div id='andrea' className='col'>
                            <img id='andrea-img' src='./Andrea1.jpg' alt='andrea jorge' />
                        </div>
                    </div>
                    <button id='to-proj'
                        onClick={() => {
                            scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 400 })
                        }}
                        className='btn btn-outline-info'>what have I done?</button>
                </section>

                <section id='projects' ref={(section) => { this.Projects = section; }}>
                    <h3>projects</h3>
                    <p id='proj-cont'>(Want to see more? <a href='#contact'>Contact me.</a>)</p>
                    <div id='proj-links'>
                        <a href='#kitch-a-dee'>Kitch-A-Dee</a>
                        <a href='#diversity'>U.S. Restaurant Diversity</a>
                        <a href='#itimeline'>iTimeline</a>
                    </div>
                    <br /><br />
                    <div style={{ paddingBottom: '3em' }} className='container'>
                        <div id='kitch-a-dee' className='row'>
                            <div className='col col-sm-12 col-md-6'>
                                <a href='https://drive.google.com/file/d/1SA1JrPFW3-pfjLwNHIm_LeAM8KKLH9QK/view?usp=sharing'
                                    target="_blank">
                                    <h5>Kitch-A-Dee</h5>
                                </a>
                                <h6 style={{ fontSize: '75%' }}>Jan 2017 - Mar 2017</h6>
                                <p id='kitch-desc'>Solving the problem of food waste at home, Kitch-A-Dee is a 2-part RFID chip + iOS app concept, enabling users to get real-time data of what they have in their kitchens.
                                Inspired by Amazon Go, we worked under the assumption that traditional barcoded products will be a thing of the past:
                            <ul id='kitch-desc'>
                                        <li id='kitch-desc'>
                                            RFID chip sensors are placed in the kitchen, synced via Bluetooth.
                                    </li>
                                        <li id='kitch-desc'>
                                            App features include:
                                            <ul id='kitch-desc'>
                                                <li id='kitch-desc'>Display of food items users have at home</li>
                                                <li id='kitch-desc'>Notifications when food is about to expire</li>
                                                <li id='kitch-desc'>A suggested customizable grocery list</li>
                                                <li id='kitch-desc'>Recipe recommendations based on the ingredients in your kitchen</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div id='kitch' className='col'>
                                <img id='kitch-img' src='./kitch-phone.png' alt='kitch-a-dee logo' />
                            </div>
                        </div>
                        <br /><br />
                        <div id='diversity' className='row'>
                            <div id='div' className='col col-md-6'>
                                <img id='div-img' src='./diversity.png' alt='restaurant diversity map' />
                            </div>
                            <div className='col col-sm-12 col-md-6'>
                                <a href='https://katiebre.shinyapps.io/info-201-git-R-done/' target="_blank"><h5>U.S. Restaurant Diversity</h5></a>
                                <h6 style={{ fontSize: '75%' }}>Mar 2017 - Jun 2017</h6>
                                <p id='rest-desc'>In a study of U.S. restaurant diversity, we employed the Yelp API to examine ten popular cuisines. The data retreived was showcased by different visualizations created in R, with libraries like ggplot and plotly, including:
                                <ul id='rest-desc'>
                                        <li id='rest-desc'>
                                            A Word Cloud that compared the differences in how restaurants of various cuisines choose their names in Washington State
                                    </li>
                                        <li id='rest-desc'>
                                            A Stacked Bar graph that compared restaurant type by price level in major U.S. cities
                                    </li>
                                        <li id='rest-desc'>
                                            A Choropleth Map that displayed the mean restaurant rating by type in each state
                                    </li>
                                        <li id='rest-desc'>
                                            A Scatter Plot that showed where each type of food lands on a scale of ratings vs. average price
                                    </li>
                                    </ul>
                                </p>
                                <div id='github' className='row'>
                                    <a href='https://github.com/yhejazi/info-201-git-R-done' target="_blank" className='btn btn-outline-dark btn-sm'>GitHub</a>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div id='itimeline' className='row'>
                            <div className='col col-sm-12 col-md-6'>
                                <a href='http://students.washington.edu/ljandrea/INFO/info343-final/#/' target="_blank"><h5>iTimeline</h5></a>
                                <h6 style={{ fontSize: '75%' }}>Feb 2018 - Mar 2018</h6>
                                <p id='time-desc'>iTimeline lets users search their favorite artists and learn about the progression of their careers via genre analysis, with data supplied by the iTunes API.
                                    Features comprise of:
                                <ul id='time-desc'>
                                        <li id='time-desc'>
                                            A radar chart that shows the number of singles and albums within a specific genre for a given artist
                                    </li>
                                        <li id='time-desc'>
                                            A time-wise scatter plot mapping out the genre of the searched artist for their album of that year across their career.
                                    </li>
                                        <li id='time-desc'>
                                            A timeline with album information and track previews.
                                    </li>
                                        <li id='time-desc'>
                                            A comment section for users to express their feelings about their favorite artists
                                    </li>
                                    </ul>
                                </p>
                                <div id='github' className='row'>
                                    <a href='https://github.com/ljandrea/itimeline/tree/timeline' target="_blank" className='btn btn-outline-dark btn-sm'>GitHub</a>
                                </div>
                            </div>
                            <div id='time' className='col'>
                                <img id='time-img' src='./itimeline.png' alt='iTimeline preview' />
                            </div>
                        </div>
                    </div>
                    <button id='to-contact'
                        onClick={() => {
                            scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 400 })
                        }}
                        className='btn btn-outline-dark'>like what you see?</button>
                </section>

                <section id='contact' ref={(section) => { this.Contact = section; }}>
                    <h3>contact</h3>
                    <br />
                    <p>Feel free to get in touch! I'm always happy to talk more about my work, professional opportunities, or anything else you may want to discuss.</p>
                    <hr id='contact-div' />
                    <p>Let's connect!</p>
                    <a id='resume'
                        href='https://drive.google.com/file/d/1jVtFJGYYrYBmFQi_EuUiBZ_PrCVEJAOx/view?usp=sharing'
                        target="_blank"
                        style={{ marginBottom: '1em' }}
                        className='btn btn-outline-info'>view my resume</a>
                    <div id='external-links'>
                        <a href='https://github.com/ljandrea' target="_blank">
                            <FontAwesome className='fab fa-github' name='github' />
                        </a>
                        <a id='email-link' href={'mailto:ljandrea@uw.edu'}>ljandrea@uw.edu</a>
                        <a href='https://www.linkedin.com/in/ljandrea/' target="_blank">
                            <FontAwesome className='fab fa-linkedin' name='linkedin' />
                        </a>
                    </div>
                </section>

                <footer>
                    From the inner workings of my mind &copy; 2018
                </footer>
            </div >
        );
    }
}

export default App;