import './SignUp.css'

export default function SignUp(){

    return(
        <section className='sectionSignupBackground'>
            <aside>
                <i/>
                <div>
                    <h1 className='h1Porcentage'>0%</h1>
                    <h2 className='h2Phrase'>“A nossa casa é o nosso túmulo, em vida.”</h2>
                    <p>- Rosália Lopes</p>    
                </div>
                <span className='spanWaves'/>

            </aside>

            <aside className='asideInfoToSignUp'>
                <h1>Enter your information to create your account</h1>
                <p>Sign up and be within the largest system of sales and real estate rentals!</p>
                <div>
                    <span>
                        <label>Full Name*</label>
                        <input type='text' placeholder='Ex.: Ania Thompson'/>    
                    </span>
                    <span>
                        <label>Email*</label>
                        <input type='email' placeholder='youremail@email.com'/>        
                    </span>
                    <span>
                        <label>Password*</label>
                        <input type='password' placeholder='Enter your password'/>        
                    </span>
                    <span>
                        <label>Confirm Password*</label>
                        <input type='password' placeholder='Confirm your password'/>        
                    </span>
                    <span>
                        <label>Company Name</label>
                        <input type='text' placeholder='Ex.: My Company'/>        
                    </span>
                </div>

                <div>
                    <input id='inputCheckboxTerms' type='checkbox'/>
                    <span id='spanCheckboxDec'>
                        <canvas/>
                    </span>
                    <p>
                        I agree with Estatery's <a>Terms, Privacy Policy and E-Sign consent.</a>
                    </p>
                </div>

                <button className='btnContinueSignup'>Continue</button>
            </aside>
        </section>
    )
}