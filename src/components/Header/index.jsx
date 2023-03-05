import { Container, Profile } from './style';

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
    </Container>
  );
}