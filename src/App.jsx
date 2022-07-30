import { GlobalStyle } from './GlobalStyle'
import { Container, Content } from './style/AppStyle'
import { InputContent } from './components/InputContent'
// import { OutputContent } from './components/OutputContent'
import logo from './assets/images/logo.svg'

export default function App(){
  return(
    <Container>
      <GlobalStyle/>
      <Content>
        <img src={logo} alt="Logotipo"/>

        <div className="box">
          <InputContent/>
        </div>
      </Content>
    </Container>
  )
} 