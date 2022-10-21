import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth'

import './SignUp.css'

export default function SignUp(){

    const navigate = useNavigate();
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

    const handleSignup = () => {

        // Se os campos de email e password estiverem vazios ao clicar
        // no botão, retorna um erro
        if( !data.fullName | !data.email | !data.password | !data.confirmPassword ){
            setData({...data, error: "Preencha todos os campos"});
            alert(data.error)
            return;
        }
        
        // Se os campos de password e confirm password não forem iguais,
        // retorna um erro
        else if ( data.password !== data.confirmPassword ){
            setData({...data, error: "As senhas não coincidem. Verifique-as"});
            alert(data.error)
            return;
        }

        const res = signup( data.email, data.password )

        if( res ){
            setData({...data, error: res})
            return;
        }

        window.alert("Você se cadastrou com sucesso!");
        navigate('/');
        return;
    }

    return(
        <section className='sectionSignupBackground'>
            <aside>
                <i/>
                <div>
                    <div className='divSteps'>

                    </div>
                    <h1 className='h1Porcentage'>0%</h1>
                    <h2 className='h2Phrase'>"A nossa casa é o nosso túmulo, em vida"</h2>
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
                            required
                        />    
                        <p className='error'>{data.error}</p>
                    </span>
                    <span>
                        <label>Email*</label>
                        <input type='email' placeholder='youremail@email.com'
                            onChange={(e) => [setData({...data, email: e.target.value, error: ''})]}
                            required
                        />   
                        <p className='error'>{data.error}</p>
                    </span>
                    <span>
                        <label>Password*</label>
                        <input type='password' placeholder='Enter your password'
                            onChange={(e) => [setData({...data, password: e.target.value, error: ''})]}
                            required
                        />  
                        <p className='error'>{data.error}</p>
                    </span>
                    <span>
                        <label>Confirm Password*</label>
                        <input type='password' placeholder='Confirm your password'
                            onChange={(e) => [setData({...data, confirmPassword: e.target.value, error: ''})]}
                            required
                        />  
                        <p className='error'>{data.error}</p>
                    </span>
                    <span>
                        <label>Company Name</label>
                        <input type='text' placeholder='Ex.: My Company'
                            onChange={(e) => [setData({...data, companyName: e.target.value, error: ''})]}
                            required
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