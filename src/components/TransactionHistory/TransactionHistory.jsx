import PropTypes from "prop-types";
import { Transaction, TitleHead, Row, Cell } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return (
<Transaction>
  <thead>
    <tr>
      <TitleHead>Type</TitleHead>
      <TitleHead>Amount</TitleHead>
      <TitleHead>Currency</TitleHead>
    </tr>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => (
            <Row key={id}>
                <Cell>{type}</Cell>
                <Cell>{amount}</Cell>
                <Cell>{currency}</Cell>
            </Row>
            ))}
  </tbody>
</Transaction>

    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}