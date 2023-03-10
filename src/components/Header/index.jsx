import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './style';

export function Header(){
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/rodrigorgtic.png" 
          alt="Foto do usuário" 
        />

        <div>
          <span>Bem-vindos,</span>
          <strong>Rodrigo Gonçalves</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}