import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.thead`
  background-color: turquoise;
`;

export const TableHeaderRow = styled.tr``;

export const TableHeaderCell = styled.th`
  padding: 10px;
  font-weight: bold;
`;

export const TableBody = styled.tbody``;

export const TableDataRow = styled.tr`
  &:nth-child(2n) {
    background-color: #f5f5f5;
  }
`;

export const TableDataCell = styled.td`
  padding: 10px;
`;
