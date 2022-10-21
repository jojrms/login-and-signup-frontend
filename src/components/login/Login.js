import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import './Login.css'
import './LoginMobile.css'

const Login = () => {

    const CryptoJS = require("crypto-js");
    const {login} = useAuth();
    const navigate = useNavigate();

    // Criação de um Hook para armazenar os dados de login
    // que serão inseridos no input, para futura comparação
    const [ data, setData ] = useState({
        email: '',
        password: '',
        error: '',
    })

    console.log(data);


    // Critografando a senha com a chave 
    const passwordCrypto = CryptoJS.AES.encrypt('usuario123', 'njndckjsnfkahernjSWELF').toString();
    // Criando usuário e senha no localstorage para realização do Login
    let userUse = [{email: 'usuario@gmail.com', password: passwordCrypto}];
    localStorage.setItem("users_db", JSON.stringify(userUse));


    const handleLogin = () => {

        // Se os campos de email e password estiverem vazios ao clicar
        // no botão, retorna um erro
        if(!data.email | !data.password){
            setData({...data, error: "Preencha todos os campos"});

            const error = document.querySelectorAll('#error');
            for ( let i = 0; i < error.length; i++ ){
                error[i].style.display = 'block';
            }

            const input = document.querySelectorAll('#inputInfoLogin');
            for ( let i = 0; i < input.length; i++ ){
                input[i].style.border = '1.5px solid red';
            }

            return;
        }

        // Executa a função de login, passando os dados de
        // email e senha que foram inseridos pelos inputs
        const res = login(data.email, data.password);

        // Se a função de login for bem realizada, executa:
        if( res ){
            setData({...data, error: res});

            const error = document.getElementById('error');
            for ( let i = 0; i < error.length; i++ ){
                error[i].style.display = 'block';
            }

            const input = document.querySelectorAll('#inputInfoLogin');
            for ( let i = 0; i < input.length; i++ ){
                input[i].style.border = '1.5px solid red';
            }

            return;
        }

        window.alert("Login realizado com sucesso!")
        navigate('/Home');
        return;

    }

    return (
        <section id='sectionBackgroundLogin' className='sectionBackgroundLogin'>
            <aside>
                <header>
                    <i className='icon'/>
                </header>
                <div className='divExbInputs'>
                    <h1>Welcome back</h1>
                    <p>Welcome back! Please enter your details.</p>

                    <span>

                        <div id='divContentInput'>
                            <label>Email</label>
                            <input id='inputInfoLogin' type='email' placeholder='hi@example.com' value={data.email} 
                                onChange={(e) => [setData({...data, email: e.target.value, error: ''})]}
                            />
                            <p id='error'>{data.error}</p>    
                        </div>

                        <div id='divContentInput'>
                            <label style={{marginTop: '2vh'}}>Password</label>
                            <input id='inputInfoLogin' type='password' placeholder='Enter password' value={data.password} 
                                onChange={(e) => [setData({...data, password: e.target.value, error: ''})]}
                            />
                            <p id='error'>{data.error}</p>    
                        </div>                      

                    </span>

                    <button id='btnForgotPassword'> Forgot Password? </button>

                    <button id='btnLogin' onClick={handleLogin}> Login </button>
                    <button id='btnLoginGoogle'> 
                        <img src="https://img.icons8.com/color/24/000000/google-logo.png"/>
                        <p>Continue with Google</p> 
                    </button>

                    <p className='pSignUp' id='pSignUp'>Don't have an account? <a onClick={() => {navigate('/create-account')}}> Sign up for free</a> </p>
                </div>
            </aside>


            <aside className='asideBackgroundDecoration' id='asideBackgroundDecoration'>

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


export default Login;