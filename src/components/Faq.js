import React from "react";

const FAQPage = ({ bgColor }) => {
    return (
        <div className={` ${bgColor} FAQ-page`}>
            {/* <h2>FAQ</h2> */}
            <div class="col container">
                <h2 className="container text-center">Questions You Have…</h2>
                <div className="">&nbsp;</div>
            </div>
            <div className="container" id="block-90a0d1403a53c5310b70">
                <div class="sqs-block-content">
                    <h4 className="pt-3 pb-3">When services do Graceworth institute offer? </h4>
                    <p>Graceworth engages in musical instrument trainings on <strong>recoder</strong>, <strong>clarinet</strong>, <strong>saxophone</strong>, <strong>flute</strong>, <strong>guitar</strong>, and <strong>trumpet</strong>.
                    <br /> We also offer sessions on voice training and album creation,  trainings on Nigerian Languages and French in music...our languages are <strong>Yoruba, Igbo, Efik, Hausa </strong>.
                    <br /> Our mentees and candidates get firsthand experience in teamwork. 
                    <br /> Graceworths also undertakes trainings on home management, food and nutrition, catering/cooking, arts, design, crafts, ornamentology, sports.</p>

                    <h4 className="pt-3 pb-3">What does it cost me? </h4>
                    <p>Graceworths is very affordable. Our success is your success. That way, we are incentivized to help you become the best you can be in whatever musical<em>(artist)</em> career you choose.</p>
                    
                    <h4 className="pt-3 pb-3">Are home lessons and online lessons offered? </h4>
                    <p>Yes! we offer home lessons and online lessons.</p>
                    <h4 className="pt-3 pb-3">Is there any form of certification? </h4>
                    <p >Yes! All these are certified courses ad professional examinations are available.</p>
                    <p>Any more questions?
                        <a rel="noreferrer" href="mailto:pidox31102002@gmail.com?subject=...HOW...?" target="_blank">
                            <em>Contact Us</em>
                        </a><em>.</em></p>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
