import React from 'react';
import style from './faq.module.css';

function faq() {
    return (
        <main id='accordionParent'>
            <div className={style['page-header']}>
                <div className={style['page-header__wrapper']}>
                    <h1 className={style['page-header__title']}>
                        Frequently Asked Questions
                    </h1>
                </div>
            </div>

            <section className={style['faq-container']}>
                <h2 className={style['faq-container__title']}>General</h2>
                <div className='accordion'>
                    <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingOne'>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseOne'
                                aria-expanded='false'
                                aria-controls='collapseOne'
                            >
                                Is Cryptonate Secure?
                            </button>
                        </h2>
                        <div
                            id='collapseOne'
                            className='accordion-collapse collapse'
                            aria-labelledby='headingOne'
                            data-bs-parent='#accordionParent'
                        >
                            <div className='accordion-body'>
                                <strong>
                                    This is the first item's accordion body.
                                </strong>{' '}
                                It is shown by default, until the collapse
                                plugin adds the appropriate classNamees that we
                                use to style each element. These classNamees
                                control the overall appearance, as well as the
                                showing and hiding via CSS transitions. You can
                                modify any of this with custom CSS or overriding
                                our default variables. It's also worth noting
                                that just about any HTML can go within the
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingTwo'>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseTwo'
                                aria-expanded='false'
                                aria-controls='collapseTwo'
                            >
                                Is Cryptonate the best?
                            </button>
                        </h2>
                        <div
                            id='collapseTwo'
                            className='accordion-collapse collapse'
                            aria-labelledby='headingTwo'
                            data-bs-parent='#accordionParent'
                        >
                            <div className='accordion-body'>
                                <strong>
                                    This is the second item's accordion body.
                                </strong>{' '}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classNamees that we
                                use to style each element. These classNamees
                                control the overall appearance, as well as the
                                showing and hiding via CSS transitions. You can
                                modify any of this with custom CSS or overriding
                                our default variables. It's also worth noting
                                that just about any HTML can go within the
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingThree'>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseThree'
                                aria-expanded='false'
                                aria-controls='collapseThree'
                            >
                                What is Cryptonate?
                            </button>
                        </h2>
                        <div
                            id='collapseThree'
                            className='accordion-collapse collapse'
                            aria-labelledby='headingThree'
                            data-bs-parent='#accordionParent'
                        >
                            <div className='accordion-body'>
                                <strong>
                                    This is the third item's accordion body.
                                </strong>{' '}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classNamees that we
                                use to style each element. These classNamees
                                control the overall appearance, as well as the
                                showing and hiding via CSS transitions. You can
                                modify any of this with custom CSS or overriding
                                our default variables. It's also worth noting
                                that just about any HTML can go within the
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style['faq-container']}>
                <h2 className={style['faq-container__title']}>Users</h2>
                <div className='accordion'>
                    <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingFour'>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseFour'
                                aria-expanded='false'
                                aria-controls='collapseFour'
                            >
                                How to create an account?
                            </button>
                        </h2>
                        <div
                            id='collapseFour'
                            className='accordion-collapse collapse'
                            aria-labelledby='headingFour'
                            data-bs-parent='#accordionParent'
                        >
                            <div className='accordion-body'>
                                <strong>
                                    This is the first item's accordion body.
                                </strong>{' '}
                                It is shown by default, until the collapse
                                plugin adds the appropriate classNamees that we
                                use to style each element. These classNamees
                                control the overall appearance, as well as the
                                showing and hiding via CSS transitions. You can
                                modify any of this with custom CSS or overriding
                                our default variables. It's also worth noting
                                that just about any HTML can go within the
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingFive'>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseFive'
                                aria-expanded='false'
                                aria-controls='collapseFive'
                            >
                                How to donate?
                            </button>
                        </h2>
                        <div
                            id='collapseFive'
                            className='accordion-collapse collapse'
                            aria-labelledby='headingFive'
                            data-bs-parent='#accordionParent'
                        >
                            <div className='accordion-body'>
                                <strong>
                                    This is the second item's accordion body.
                                </strong>{' '}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classNamees that we
                                use to style each element. These classNamees
                                control the overall appearance, as well as the
                                showing and hiding via CSS transitions. You can
                                modify any of this with custom CSS or overriding
                                our default variables. It's also worth noting
                                that just about any HTML can go within the
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingSix'>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseSix'
                                aria-expanded='false'
                                aria-controls='collapseSix'
                            >
                                How much can I donate?
                            </button>
                        </h2>
                        <div
                            id='collapseSix'
                            className='accordion-collapse collapse'
                            aria-labelledby='headingSix'
                            data-bs-parent='#accordionParent'
                        >
                            <div className='accordion-body'>
                                <strong>
                                    This is the third item's accordion body.
                                </strong>{' '}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classNamees that we
                                use to style each element. These classNamees
                                control the overall appearance, as well as the
                                showing and hiding via CSS transitions. You can
                                modify any of this with custom CSS or overriding
                                our default variables. It's also worth noting
                                that just about any HTML can go within the
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style['faq-container']}>
                <h2 className={style['faq-container__title']}>Charity</h2>
                <div className='accordion'>
                    <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingSeven'>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseSeven'
                                aria-expanded='false'
                                aria-controls='collapseSeven'
                            >
                                How to create a campaign?
                            </button>
                        </h2>
                        <div
                            id='collapseSeven'
                            className='accordion-collapse collapse'
                            aria-labelledby='headingSeven'
                            data-bs-parent='#accordionParent'
                        >
                            <div className='accordion-body'>
                                <strong>
                                    This is the first item's accordion body.
                                </strong>{' '}
                                It is shown by default, until the collapse
                                plugin adds the appropriate classNamees that we
                                use to style each element. These classNamees
                                control the overall appearance, as well as the
                                showing and hiding via CSS transitions. You can
                                modify any of this with custom CSS or overriding
                                our default variables. It's also worth noting
                                that just about any HTML can go within the
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingEight'>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseEight'
                                aria-expanded='false'
                                aria-controls='collapseEight'
                            >
                                How to create track monthly donations?
                            </button>
                        </h2>
                        <div
                            id='collapseEight'
                            className='accordion-collapse collapse'
                            aria-labelledby='headingEight'
                            data-bs-parent='#accordionParent'
                        >
                            <div className='accordion-body'>
                                <strong>
                                    This is the second item's accordion body.
                                </strong>{' '}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classNamees that we
                                use to style each element. These classNamees
                                control the overall appearance, as well as the
                                showing and hiding via CSS transitions. You can
                                modify any of this with custom CSS or overriding
                                our default variables. It's also worth noting
                                that just about any HTML can go within the
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingNine'>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseNine'
                                aria-expanded='false'
                                aria-controls='collapseNine'
                            >
                                How to edit the campaign?
                            </button>
                        </h2>
                        <div
                            id='collapseNine'
                            className='accordion-collapse collapse'
                            aria-labelledby='headingNine'
                            data-bs-parent='#accordionParent'
                        >
                            <div className='accordion-body'>
                                <strong>
                                    This is the third item's accordion body.
                                </strong>{' '}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classNamees that we
                                use to style each element. These classNamees
                                control the overall appearance, as well as the
                                showing and hiding via CSS transitions. You can
                                modify any of this with custom CSS or overriding
                                our default variables. It's also worth noting
                                that just about any HTML can go within the
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default faq;
