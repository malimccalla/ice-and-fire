import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  grid-gap: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Grid;
