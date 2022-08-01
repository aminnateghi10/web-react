import React from "react";

function Works(){
    return(
    <>
        <section id="works">
            <div className="container">
                {/* section title */}
                <h2 className="section-title wow fadeInUp">Recent works</h2>
                <div className="spacer" data-height={60} />
                {/* portfolio filter (desktop) */}
                <ul className="portfolio-filter list-inline wow fadeInUp">
                    <li className="current list-inline-item" data-filter="*">
                        Everything
                    </li>
                    <li className="list-inline-item" data-filter=".creative">
                        Creative
                    </li>
                    <li className="list-inline-item" data-filter=".art">
                        Art
                    </li>
                    <li className="list-inline-item" data-filter=".design">
                        Design
                    </li>
                    <li className="list-inline-item" data-filter=".branding">
                        Branding
                    </li>
                </ul>
                {/* portfolio filter (mobile) */}
                <div className="pf-filter-wrapper">
                    <select className="portfolio-filter-mobile">
                        <option value="*">Everything</option>
                        <option value=".creative">Creative</option>
                        <option value=".art">Art</option>
                        <option value=".design">Design</option>
                        <option value=".branding">Branding</option>
                    </select>
                </div>
                {/* portolio wrapper */}
                <div className="row portfolio-wrapper">
                    {/* portfolio item */}
                    <div className="col-md-4 col-sm-6 grid-item art">
                        <a href="http://a-nateghi.ir/images/works/1.svg" className="work-image">
                            <div className="portfolio-item rounded shadow-dark">
                                <div className="details">
                                    <span className="term">Art</span>
                                    <h4 className="title">Project Managment Illustration</h4>
                                    <span className="more-button">
                    <i className="icon-magnifier-add" />
                  </span>
                                </div>
                                <div className="thumb">
                                    <img src="http://a-nateghi.ir/images/works/1.svg" alt="Portfolio-title" />
                                    <div className="mask" />
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* portfolio item */}
                    <div className="col-md-4 col-sm-6 grid-item creative design">
                        <a href="#small-dialog" className="work-content">
                            <div className="portfolio-item rounded shadow-dark">
                                <div className="details">
                                    <span className="term">Creative</span>
                                    <h4 className="title">Guest App Walkthrough Screens</h4>
                                    <span className="more-button">
                    <i className="icon-options" />
                  </span>
                                </div>
                                <div className="thumb">
                                    <img src="http://a-nateghi.ir/images/works/2.svg" alt="Portfolio-title" />
                                    <div className="mask" />
                                </div>
                            </div>
                        </a>
                        <div
                            id="small-dialog"
                            className="white-popup zoom-anim-dialog mfp-hide"
                        >
                            <img src="images/single-work.svg" alt="Title" />
                            <h2>Guest App Walkthrough Screens</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                hendrerit nibh in massa semper rutrum. In rhoncus eleifend mi id
                                tempus.
                            </p>
                            <p>
                                Donec consectetur, libero at pretium euismod, nisl felis
                                lobortis urna, id tristique nisl lectus eget ligula.
                            </p>
                            <a href="#" className="btn btn-default">
                                View on Dribbble
                            </a>
                        </div>
                    </div>
                    {/* portfolio item */}
                    <div className="col-md-4 col-sm-6 grid-item branding">
                        <a
                            href="https://www.youtube.com/watch?v=qf9z4ulfmYw"
                            className="work-video"
                        >
                            <div className="portfolio-item rounded shadow-dark">
                                <div className="details">
                                    <span className="term">Branding</span>
                                    <h4 className="title">Delivery App Wireframe</h4>
                                    <span className="more-button">
                    <i className="icon-camrecorder" />
                  </span>
                                </div>
                                <div className="thumb">
                                    <img src="http://a-nateghi.ir/images/works/3.svg" alt="Portfolio-title" />
                                    <div className="mask" />
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* portfolio item */}
                    <div className="col-md-4 col-sm-6 grid-item creative">
                        <a
                            href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/240233494&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                            className="work-video"
                        >
                            <div className="portfolio-item rounded shadow-dark">
                                <div className="details">
                                    <span className="term">Creative</span>
                                    <h4 className="title">Onboarding Motivation</h4>
                                    <span className="more-button">
                    <i className="icon-music-tone-alt" />
                  </span>
                                </div>
                                <div className="thumb">
                                    <img src="images/works/4.svg" alt="Portfolio-title" />
                                    <div className="mask" />
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* portfolio item */}
                    <div className="col-md-4 col-sm-6 grid-item art branding">
                        <a href="#gallery-1" className="gallery-link">
                            <div className="portfolio-item rounded shadow-dark">
                                <div className="details">
                                    <span className="term">Art, Branding</span>
                                    <h4 className="title">iMac Mockup Design</h4>
                                    <span className="more-button">
                    <i className="icon-picture" />
                  </span>
                                </div>
                                <div className="thumb">
                                    <img src="images/works/5.svg" alt="Portfolio-title" />
                                    <div className="mask" />
                                </div>
                            </div>
                        </a>
                        <div id="gallery-1" className="gallery mfp-hide">
                            <a href="images/works/5.svg" />
                            <a href="images/works/4.svg" />
                        </div>
                    </div>
                    {/* portfolio item */}
                    <div className="col-md-4 col-sm-6 grid-item creative design">
                        <a
                            href="https://themeforest.net/user/pxlsolutions/portfolio"
                            target="_blank"
                        >
                            <div className="portfolio-item rounded shadow-dark">
                                <div className="details">
                                    <span className="term">Creative, Design</span>
                                    <h4 className="title">Game Store App Concept</h4>
                                    <span className="more-button">
                    <i className="icon-link" />
                  </span>
                                </div>
                                <div className="thumb">
                                    <img src="images/works/6.svg" alt="Portfolio-title" />
                                    <div className="mask" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                {/* more button */}
                <div className="load-more text-center mt-4">
                    <a className="btn btn-default">
                        <i className="fas fa-spinner" /> Load more
                    </a>
                    {/* numbered pagination (hidden for infinite scroll) */}
                    <ul className="portfolio-pagination list-inline d-none">
                        <li className="list-inline-item">1</li>
                        <li className="list-inline-item">
                            <a href="works-2.html">2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    </>
)
}

export default Works;