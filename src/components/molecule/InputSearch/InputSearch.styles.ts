import styled from 'styled-components';

export const InputSearchContainer = styled.div`
  position: relative;
  min-width: 365px;
`;

export const Input = styled.input`
  font-size: 16px;
  margin: 0;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  height: 40px;
  width: 100%;
  padding: 10px 60px 10px 15px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1.5px;
  outline: none;

  &:focus {
    border-color: transparent;
  }
`;

export const VerticalDivider = styled.div`
  height: 26px;
  border-left: 1px solid #e6e6e6;
  position: absolute;
  top: 8px;
  right: 40px;
  z-index: 1;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  background-color: #fff;
  border-color: transparent;
  cursor: pointer;
`;

export const SearchResultsContainer = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1;
`;

export const SearchResultItem = styled.div`
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const RemoveButton = styled.button`
  margin-left: 8px;
  cursor: pointer;
  display: flex;
`;
