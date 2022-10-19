import './Login.css'

export default function Login(){

    return (
        <section id='sectionBackgroundLogin' className='sectionBackgroundLogin'>
            <aside>
                <div>
                    <i className='icon'/>
                </div>
                <div className='divExbInputs'>
                    <h1>Welcome back</h1>
                    <p>Welcome back! Please enter your details.</p>

                    <span>
                        <label>Email</label>
                        <input type='email' placeholder='hi@example.com'/>
                    </span>
                    <span>
                        <label>Password</label>
                        <input type='password' placeholder='Enter password'/>
                    </span>

                    <button id='btnForgotPassword'> Forgot Password? </button>

                    <button id='btnLogin'> Login </button>
                    <button id='btnLoginGoogle'> 
                        <img src="https://img.icons8.com/color/24/000000/google-logo.png"/>
                        <p>Continue with Google</p> 
                    </button>

                    <p className='pSignUp' id='pSignUp'>Don't have an account? <a> Sign up for free</a> </p>
                </div>
            </aside>


            <aside className='asideBackgroundDecoration'>

                <article className='articleExbHouseDec'>

                    <span className='spanImage'/>

                    <span className='spanDecPopular'>
                        <div id="triangulo-para-baixo"/>
                        Most Popular
                        <div className='divFav'/>
                    </span>

                    <span className='spanDetailsInitial'>
                        <h2>Beverly Springfield</h2>
                        <p>2821 Sevilla, Palm Harbor, TX</p>
                    </span>

                    <span className='spanDetailsHouse'>
                        <div>
                            <i/>
                            4 Beds
                        </div>
                        <div>
                            <i/>
                            2 Bathrooms
                        </div>
                        <div>
                            <i/>
                            6x7.5m²
                        </div>
                    </span>

                    <span className='spanPrice'>
                        <div>
                            <h3>Rent Sale</h3>
                            <h2>
                                $2,700
                                <p>/ month</p>
                            </h2>
                        </div>
                    </span>

                </article>

                <div className='divMessage'>
                    <span>Powered by <i/> </span>
                    <p>You agree to Estatery's <a> Terms of Use & Privacy Policy. </a>
                        You don't need to consent as a condition of renting any property,
                        or buying any others goods or services. Message/data rates may apply.
                    </p>
                </div>
            </aside>
        </section>
    )
}