import styled from "@emotion/styled";


export const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const ControlBtn = styled.button`
  cursor: pointer;
  margin: 5px;
`;

export const PageBtn = styled.button<{ isActive?: boolean;}>`
  border: 1px solid ${({ isActive }) => isActive ? 'blue' : 'grey'};
  cursor: ${({ isActive }) => isActive ? 'default' : 'pointer'};
  color: ${({ isActive }) => isActive ? 'blue' : 'black'};
  padding: 6px;
  margin: 6px;
  font-size: 14px;
  line-height: 1;
  align-items: center;
  border-radius: 50%;
`;
