import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <>
            <section id="contact" class="contact" className='pt-[11rem] pb-[11rem]'>
                <div className="container">
                    <div class="contact__content">
                        <div class="contact__title">
                            <p>contact</p>
                            <h3>Don't be shy! Hit me up! 👇</h3>
                        </div>
                        <div class="contact__icons">
                            <div class="contact__icon-box">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-map-search">
                                    <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                                    <path d="M9 4v13"></path>
                                    <path d="M15 7v5"></path>
                                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                    <path d="M20.2 20.2l1.8 1.8"></path>
                                </svg></span>
                                <div class="contact__info">
                                    <h3>Location</h3>
                                    <p>Karachi, Pakistan</p>
                                </div>
                            </div>
                            <div class="contact__icon-box">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail">
                                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                    <path d="M3 7l9 6l9 -6"></path></svg></span>
                                <div class="contact__info">
                                    <h3>Mail</h3>
                                    <a href="">Tahirkhanji007@gmail.com</a>
                                </div>
                            </div>
                            <div class="contact__icon-box">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail">
                                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                    <path d="M3 7l9 6l9 -6"></path></svg></span>
                                <div class="contact__info">
                                    <h3>Whatsapp</h3>
                                    <a href="https://wa.me/message/OS47LHV72MO5P1">+92-30520-9595-1</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact