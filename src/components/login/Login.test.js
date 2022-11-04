/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react'
import Login from './Login'

describe('Teste na página de Login', () => {
 
    test('', () => {
        render(<Login/>);
        screen.debug();
    })

})