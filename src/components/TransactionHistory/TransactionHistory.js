import PropTypes from 'prop-types';
import { TransactionTable, TableHeader,TableHeaderRow, TableHeaderCell, TableBody, TableDataRow, TableDataCell } from './TransactionHistory.styled'


export const TransactionHistory = ({ items }) => (
  <TransactionTable>
    <TableHeader>
      <TableHeaderRow>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>Amount</TableHeaderCell>
        <TableHeaderCell>Currency</TableHeaderCell>
      </TableHeaderRow>
    </TableHeader>
    <TableBody>
      {items.map(({ id, type, amount, currency }) => (
        <TableDataRow key={id}>
          <TableDataCell>{type}</TableDataCell>
          <TableDataCell>{amount}</TableDataCell>
          <TableDataCell>{currency}</TableDataCell>
        </TableDataRow>
      ))}
    </TableBody>
  </TransactionTable>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
