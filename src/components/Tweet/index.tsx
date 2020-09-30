import React from 'react';

// import { Container } from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RocketseatIcon />
              Você retweetou
          </Retweeted>
          <Body>
              <Avatar />
              <Content>
                  <Header>
                      <strong>Felipe Augusto Gomes</strong>
                      <span>@gmxfelipe</span>
                      <Dot />
                      <time>29 de setembro</time>
                  </Header>
                  <Description>Apenas embarque no foguete</Description>
                  <ImageContent />
                  <Icons>
                      <Status>
                          <CommentIcon />
                          18
                      </Status>
                      <Status>
                          <RetweetIcon />
                          18
                      </Status>
                      <Status>
                          <LikeIcon />
                          999
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;