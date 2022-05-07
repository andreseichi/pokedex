import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 23.4375%;

  margin: 0 0.78125% 50px;

  float: left;
`;

export const Sprite = styled.img`
  width: 100%;
  height: 100%;
  display: block;

  background-color: red;
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 7.2525%;
  width: 100%;

  .id {
    color: #919191;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1rem;
    margin: 0.5em 0;
    padding-top: 2px;
  }

  .types {
    display: flex;
    width: 100%;
  }
`;

export const LoadingIcon = styled.img`
  width: 50%;
  height: 50%;
  display: block;
`;

export const Title = styled.h2`
  color: #313131;
  font-size: 1.5rem;
  text-transform: capitalize;
  margin-bottom: 0.5em;
`;

interface TypeSpanProps {
  type: string;
}

export const TypeSpan = styled.span<TypeSpanProps>`
  background: ${({ type }) => `var(--${type})`};
  color: #fff;
  border-radius: 3px;
  width: 38.4375%;
  line-height: 18px;
  margin: 0 1.5625% 0 0;
  float: left;
  font-size: 0.6875rem;
  text-align: center;
  text-transform: capitalize;
`;
