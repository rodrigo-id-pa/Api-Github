import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: var(--bg-body);
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;
  box-shadow: 0 0 20px var(--tnt);

  h1 {
    font-size: 20px;
    text-transform: uppercase;
    color: var(--bg-text);
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 10px;
      color: var(--tnt);
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    width: 100%;
    border: 1px solid var(--tnt);
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    transition: all 0.3s;
    &:hover,
    &:focus {
      box-shadow: 0 0 5px var(--tnt);
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: var(--tnt);
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    filter: brightness(70%);
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin-top: 30px;

  li {
    padding: 15px 0;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: var(--bg-text);

    & + li {
      border-top: 1px solid var(--wt);
    }

    a {
      color: var(--tnt);
      font-weight: 600;
      &:hover,
      &:active {
        filter: brightness(70%);
        transition: all 0.2s;
      }
    }
  }
`;
