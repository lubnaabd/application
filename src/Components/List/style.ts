import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-self: center;
    padding-top: 1rem;
  }
`;

export const LeftData = styled.div`
  flex-direction: column;
  display: flex;
  width: 10%;
`;

export const RightData = styled.div`
  flex-direction: column;
  display: flex;
  width: 80%;
`;

export const DataName = styled.div`
  padding: 1rem;
  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #e40e0e;
  }
`;

export const DivMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #cccccc59;
  width: 60%;
  padding: 1rem;
`;

export const Up = styled.div`
border: solid black;
border-width: 0 1px 1px 0;
display: inline-block;
padding: 3px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
  `;
export const Dowun = styled.div`
  transform: rotate(45deg);
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
    -webkit-transform: rotate(45deg);
  }`;
