import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 100px;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
  .header {
    text-align: center;
    margin-bottom: 50px;
  }
`;

export default Wrapper;
