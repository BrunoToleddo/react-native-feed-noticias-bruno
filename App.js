import React from 'react';
import styled from 'styled-components/native';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import Avatar from './components/Avatar';
import Card from './components/Card';

const DATA = [
  {
    id: '1',
    userAvatar: require('./assets/images/avatar2.png'),
    userName: 'Zilda',
    postText:
      'CR7',
    postImage: require('./assets/cronaldo.webp')
  },
  {
    id: '2',
    userAvatar: require('./assets/images/avatar4.png'),
    userName: 'Jv.neutron_012',
    postText:
      'Jimmy',
    postImage: require('./assets/neutron.jpg')
  },
  {
    id: '3',
    userAvatar: require('./assets/images/avatar3.png'),
    userName: 'marquinho',
    postText:
      'Arte do grafite',
    postImage: require('./assets/images/post3.png')
  },
  {
    id: '4',
    userAvatar: require('./assets/images/avatar4.png'),
    userName: 'Park',
    postText:
      'Vista do "topo" da cidade',
    postImage: require('./assets/images/post4.png')
  }
];

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const RowContainer = styled.View`
  width: 100%;
  padding-horizontal: 10px;
  flex-direction: row;
`;

export default function App() {
  return (
    <Container>
      <Header headerTitle='social' />
      <RowContainer>
        <Avatar imageSource={require('./assets/images/avatar1.png')} />
        <InputContainer />
      </RowContainer>
      <Card data={DATA} />
    </Container>
  );
}
