import React from 'react';
import Feed from '../Feed';

import 
{ Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } 
from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>
          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>
              <h1>Felipe Augusto Gomes</h1>
              <h2>@gmxfelipe</h2>

              <p>
                  Desenvolvedor da <a>@eusoufiec</a>
              </p>
              <ul>
                  <li>
                      <LocationIcon />
                      São paulo, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 17 de abril de 2002
                  </li>
              </ul>
              <Followage>
                  <span>
                      seguindo <strong>100</strong>
                  </span>
                  <span>
                    <strong>1000 </strong> seguidores
                  </span>
              </Followage>
          </ProfileData>
          <Feed /> 
      </Container>
  );
}

export default ProfilePage;