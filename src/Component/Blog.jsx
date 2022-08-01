import React from "react";

function Blog(){
    return(
        <>
            <section id="blog">
                <div className="container">
                    {/* section title */}
                    <h2 className="section-title wow fadeInUp">Latest Posts</h2>
                    <div className="spacer" data-height={60} />
                    <div className="row blog-wrapper">
                        <div className="col-md-4">
                            {/* blog item */}
                            <div className="blog-item rounded bg-white shadow-dark wow fadeIn">
                                <div className="thumb">
                                    <a href="#">
                                        <span className="category">Reviews</span>
                                    </a>
                                    <a href="#">
                                        <img src="http://a-nateghi.ir/images/blog/1.svg" alt="blog-title" />
                                    </a>
                                </div>
                                <div className="details">
                                    <h4 className="my-0 title">
                                        <a href="#">5 Best App Development Tool for Your Project</a>
                                    </h4>
                                    <ul className="list-inline meta mb-0 mt-2">
                                        <li className="list-inline-item">09 February, 2020</li>
                                        <li className="list-inline-item">Bolby</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            {/* blog item */}
                            <div className="blog-item rounded bg-white shadow-dark wow fadeIn">
                                <div className="thumb">
                                    <a href="#">
                                        <span className="category">Tutorial</span>
                                    </a>
                                    <a href="#">
                                        <img src="http://a-nateghi.ir/images/blog/2.svg" alt="blog-title" />
                                    </a>
                                </div>
                                <div className="details">
                                    <h4 className="my-0 title">
                                        <a href="#">Common Misconceptions About Payment</a>
                                    </h4>
                                    <ul className="list-inline meta mb-0 mt-2">
                                        <li className="list-inline-item">07 February, 2020</li>
                                        <li className="list-inline-item">Bolby</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            {/* blog item */}
                            <div className="blog-item rounded bg-white shadow-dark wow fadeIn">
                                <div className="thumb">
                                    <a href="#">
                                        <span className="category">Business</span>
                                    </a>
                                    <a href="#">
                                        <img src="http://a-nateghi.ir/images/blog/3.svg" alt="blog-title" />
                                    </a>
                                </div>
                                <div className="details">
                                    <h4 className="my-0 title">
                                        <a href="#">3 Things To Know About Startup Business</a>
                                    </h4>
                                    <ul className="list-inline meta mb-0 mt-2">
                                        <li className="list-inline-item">06 February, 2020</li>
                                        <li className="list-inline-item">Bolby</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;