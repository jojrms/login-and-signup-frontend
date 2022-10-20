import { useState } from 'react';

import useAuth from '../../hooks/useAuth'

import './SignUp.css'

export default function SignUp(){

    const {signup} = useAuth();

    // Criação de um Hook para armazenar os dados do usuário
    // que está se cadastrando
    const [ data, setData ] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        error: '',
    })
    console.log(data);

    const handleSignup = () => {

        // Se os campos de email e password estiverem vazios ao clicar
        // no botão, retorna um erro
        if( !data.email | !data.password ){
            setData({...data, error: "Preencha todos os campos"});
            return;
        } 
        // Se os campos de password e confirm password não forem iguais,
        // retorna um erro
        else if ( data.password !== data.confirmPassword ){
            setData({...data, error: "As senhas não coincidem. Verifique-as"});
            return;
        }

        const res = signup( data.email, data.password )

        if( res ){
            setData({...data, error: res})
            return;
        }

        window.alert("Você se cadastrou com sucesso!")
    }

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
                        <input type='text' placeholder='Ex.: Ania Thompson'
                            onChange={(e) => [setData({...data, fullName: e.target.value, error: ''})]}
                        />    
                    </span>
                    <span>
                        <label>Email*</label>
                        <input type='email' placeholder='youremail@email.com'
                            onChange={(e) => [setData({...data, email: e.target.value, error: ''})]}
                        />        
                    </span>
                    <span>
                        <label>Password*</label>
                        <input type='password' placeholder='Enter your password'
                            onChange={(e) => [setData({...data, password: e.target.value, error: ''})]}
                        />        
                    </span>
                    <span>
                        <label>Confirm Password*</label>
                        <input type='password' placeholder='Confirm your password'
                            onChange={(e) => [setData({...data, confirmPassword: e.target.value, error: ''})]}
                        />        
                    </span>
                    <span>
                        <label>Company Name</label>
                        <input type='text' placeholder='Ex.: My Company'
                            onChange={(e) => [setData({...data, companyName: e.target.value, error: ''})]}
                        />        
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

                <button className='btnContinueSignup' onClick={handleSignup}>Continue</button>
            </aside>
        </section>
    )
}