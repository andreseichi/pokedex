import styled from 'styled-components';

import { Reload } from 'styled-icons/open-iconic';

export const Container = styled.ul`
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  display: flex;
`;

export const Form = styled.form`
  float: left;
  width: 12rem;

  display: flex;
`;

export const Input = styled.input`
  border: 3px solid #616161;
  border-radius: 5px;
  color: #313131;
  margin: 0;
  width: 100%;
`;

export const ReloadButton = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  background: none;

  img {
    width: 40px;
    height: 40px;
  }
`;

export const Content = styled.ul`
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ReloadIcon = styled(Reload)`
  width: 20px;
  height: 20px;
  display: block;
`;
