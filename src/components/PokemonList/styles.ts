import styled from 'styled-components';

import { Container as Button } from '../Button/styles';

import { Search, Reload } from 'styled-icons/ionicons-outline';

export const Container = styled.div`
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
  width: 100%;

  display: flex;
`;

export const Input = styled.input`
  border: 3px solid #616161;
  border-radius: 5px;
  color: #313131;
  margin: 0;
  font-size: 1rem;
  padding: 0.25rem;
  width: 100%;

  &:focus {
    border: 3px solid #ee6b2f;
  }
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
  margin-top: 2rem;

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
  display: block;
`;

export const ReloadIcon = styled(Reload)`
  width: 20px;
  height: 20px;
  display: block;
`;

export const StyledButton = styled(Button)`
  margin-left: 1rem;
`;
