import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;
  background-color: var(--tertiary);
  padding: 11px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar{
    display: none;
  }

`;
export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);
  margin-bottom: 8px;
`;
