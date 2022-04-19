import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { AiOutlineSearch } from 'react-icons/ai';

type TFilteringBarView = {
  onFilter: (text: string) => void;
  filteredText: string;
};

const FilteringBarView: React.FC<TFilteringBarView> = observer(({ onFilter, filteredText }) => {
  return (
    <div>
      <Bar>
        <AiOutlineSearch />
        <Input value={filteredText} placeholder="필터링하기" onChange={(e) => onFilter(e.target.value)} />
      </Bar>
    </div>
  );
});

const Bar = styled.div`
  width: 20.019rem;
  height: 4rem;
  border-radius: 2rem;
  padding: 1.902rem 1rem;
  ${({ theme }) => theme.CusFlex('none')}
  background-color: ${({ theme }) => theme.CusColor.white};
  svg {
    width: 2rem;
    height: 2rem;
  }
`;
const Input = styled.input`
  height: 1.8rem;
  font-size: 1.5rem;
  margin-left: 0.4rem;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.CusColor.gray};
`;
export default FilteringBarView;
