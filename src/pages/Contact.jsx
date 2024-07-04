const Contact = () => {
    return (
     <>
            <section className='pageHead'>
            <div className='pageHeadBx'>
                <div className='container'>
                    <div className='pageHeadTxt'>
                        <div className='pageHeadPic'>
                            <img src='images/pageHeadPic.png' alt='' loading='lazy' />
                        </div>
                        <h1>Contact Us</h1>
                        <ul>
                            <li>
                                <a href='index.html'>Home</a>
                            </li>
                            <li>/</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className='contactPgBlk1 PBth80'>
            <div className='container'>
                <div className='row clearfix'>
                    <div className='col-md-6 contactPgBlk1Col contactPgBlk1ColL'>
                        <div className='contactPgBlk1ColLBx'>
                            
                        </div>
                    </div>
                    <div className='col-md-6 contactPgBlk1Col contactPgBlk1ColR'>
                        <div className='contactPgBlk1ColRBx'>
                            <div className='primaryHead'>
                                <h5 className='wow fadeInUp'>Contact Us</h5>
                                <h2 className='wow fadeInUp'>
                                    Get in Touch
                                </h2>
                            </div>
                            <div className='contactPgBlk1ColRIntro PT30'>
                                <div className='contactPgBlk1ColRRow'>
                                    <div className='contactPgBlock1IntroColBx1 wow fadeInUp'>
                                        <img src='images/location.png' alt='' />
                                    </div>
                                    <div className='contactPgBlock1IntroColBx2 wow fadeInUp'>
                                        <p>
                                            A60, Noida Sector 2, Noida Uttar Pradesh
                                        </p>
                                    </div>
                                </div>
                                <div className='contactPgBlk1ColRRow'>
                                    <div className='contactPgBlock1IntroColBx1 wow fadeInUp'>
                                        <img src='images/email.png' alt='' />
                                    </div>
                                    <div className='contactPgBlock1IntroColBx2 wow fadeInUp'>
                                        <p>
                                            <a href='#'>gleeimpex@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className='contactPgBlk1ColRRow'>
                                    <div className='contactPgBlock1IntroColBx1 wow fadeInUp'>
                                        <img src='images/call.png' alt='' />
                                    </div>
                                    <div className='contactPgBlock1IntroColBx2 wow fadeInUp'>
                                        <p>
                                            93192 94022
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='contactPgBlk2 PBth80'>
            <div className='container'>
                <div className='primaryHead'>
                    <h5 className='wow fadeInUp'>Have a any Questions ?</h5>
                    <h2 className='wow fadeInUp'>
                        Leave A Message
                    </h2>
                </div>
                <div className='contactPgBlk2Intro PT40'>
                    <div className='contactPgBlk2Bx'>
                        <div className='row clearfix'>
                            <div className='col-md-12 contactPgBlock2ColLCol wow fadeInUp'>
                                <div className='inptBox'>
                                    <input type='text' name='nm' placeholder='Full Name' className='input'  />
                                    <span className='inptIcon'>
                                        <img src='images/person-outline-O.svg' alt='' />
                                    </span>
                                </div>
                            </div>
                            <div className='col-md-6 contactPgBlock2ColLCol wow fadeInUp'>
                                <div className='inptBox'>
                                    <input type='text' name='nm' placeholder='Email' className='input' />
                                    <span className='inptIcon'>
                                        <img src='images/mail-outline-O.svg' alt='' />
                                    </span>
                                </div>
                            </div>
                            <div className='col-md-6 contactPgBlock2ColLCol wow fadeInUp'>
                                <div className='inptBox'>
                                    <input type='text' name='nm' placeholder='Number' className='input' />
                                    <span className='inptIcon'>
                                        <img src='images/call-outline-O.svg' alt='' />
                                    </span>
                                </div>
                            </div>
                            <div className='col-md-12 contactPgBlock2ColLCol wow fadeInUp'>
                                <div className='inptBox'>
                                    <textarea className='textarea' placeholder='Your Message'></textarea>
                                    <span className='inptIcon'>
                                        <img src='images/chatbubble-ellipses-outline-O.svg' alt='' />
                                    </span>
                                </div>
                            </div>
                            <div className='col-md-12 contactPgBlock2ColLCol wow fadeInUp text-center'>
                                <button className='primaryBtn Big'>Submit <i className='fa fa-arrow-right'></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

     </>
    );
 }
 
 export default Contact