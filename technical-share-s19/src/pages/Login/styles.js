import styled from 'styled-components'

export const FormContainer = styled.div`
  max-width: 603px;
  margin: auto;
  padding-left: 30px;
  padding-right: 30px;

  @media (max-width: 600px) {
    margin-bottom: 60px;
  }
`

export const FormLogin = styled.form`
  padding: 30px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 14px rgb(0 0 0 / 25%);
  border-radius: 15px;
  display: grid;
  justify-content: center;
`

export const FormLoginHeader = styled.h3`
  color: #36357E;
  font-weight: 400;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 30px;
`

export const FormError = styled.p`
  color: #ff0000;
  font-weight: 500;
`

export const InputContainer = styled.div`
  margin-bottom: 30px;
`

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`

export const InputLogin = styled.input`
  border: 1px solid #5251A2;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 20px 15px;
  width: 100%;
`

export const FormBtn = styled.button`
  background-color: #FE662E;
  border: 1px solid #FEBBA2;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 10px 0px 10px 10px;
  font-size: 1.5rem;
  padding: 15px 60px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover, &:focus, &:active {
    cursor: pointer;
    box-shadow: 0 4px 7px 0 rgb(0 0 0 / 40%);
  }
`

export const FormBtnSvg = styled.i`
  width: 0.8em;
  height: 0.8em;
`

export const RedirectCadastro = styled.div`
  margin: 15px auto;
`

export const RedirectCadastroText = styled.span`
  color: #000;
`

export const RedirectCadastroLink = styled.a`
  font-weight: bold;
  text-decoration: underline;
`