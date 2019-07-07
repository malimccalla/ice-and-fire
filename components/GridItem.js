import styled from 'styled-components';

const GridItem = styled.div`
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }
`;

export default GridItem;
