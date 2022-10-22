# SOBRE O PROJETO
Este projeto conta com duas páginas desenvolvidas: Login e Cadastro.
Os dados do usuário cadastrado, bem como do que se cadastrará, está salvo no localStorage, com a chave "users_db". As informações visíveis são o email e a senha, sendo a última exibida após ser criptografada no padrão AES, através da biblioteca Crypto, do ReactJS.

O mockup de ambas foi retirada do site Dribbble, tendo as atribuições citadas abaixo, no setor MOCKUP. 

## LOGIN
Nesta página, o usuário conta com dois input's que receberão o email e senha. Ao ocorrer da forma esperada, retorna um alerta. Caso dê erro, retorna o mesmo no formato HTML. 

As credenciais estão no setor DADOS. 

Esta página está desenvolvida, principalmente, nas unidades "%" e "vh".

### DADOS
email: usuario@gmail.com
senha: usuario123

## CADASTRO
Na página de cadastro, o usuário informa seu nome completo, email, senha, confirmação de senha e o nome da empresa na qual trabalha, sendo esta última uma informação não obrigatória de ser preenchida. Ao ocorrer da forma esperada, retorna um alerta. Caso dê erro, retorna o mesmo no formato HTML.

## REQUISIÇÕES
React = ^18.2.0
Node = >=6.0.0

## LINGUAGENS, FRAMEWORKS E BIBLIOTECAS
Linguagem: JavaScript 
Framework: React.js 
Bibliotecas: React-router-dom e crypto-js 

## MOCKUP
O mockup usado foi retirado do site Dribbble. Algumas modificações foram realizadas.

#### LOGIN (MOCKUP)
Usuário: Illiyin Studio
Link: https://dribbble.com/shots/17872229-Estatery-Login-Create-Account

#### CADASTRO (MOCKUP)
Usuário: Illiyin Studio
Link: https://dribbble.com/shots/17872229-Estatery-Login-Create-Account

#### LOGOTIPO (MOCKUP)
Usuário: Illiyin Studio
Link: https://dribbble.com/shots/17872229-Estatery-Login-Create-Account

## COMO INICIAR
1. Clone este repositório no CMD utilizando o comando "git clone URL_AQUI",
2. Após finalizado, entre no arquivo e abra em seu editor de código-fonte,
3. Realize um npm install para baixar todos os módulos node,
4. Finalize com um 'npm start' para abrir um localhost