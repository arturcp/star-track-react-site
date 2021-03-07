import React from 'react';
import styled from 'styled-components';
import loadingImage from '../../images/loading.gif';

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 3;
`;

const loading = () => (
  <Image className="loading" src={loadingImage} alt="loading" />
);

export default loading;
