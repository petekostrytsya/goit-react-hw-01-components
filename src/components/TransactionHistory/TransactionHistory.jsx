import PropTypes from "prop-types";


export const TransactionHistory = ({ items }) => {
    return (
<table className="transaction-history">
  <thead>
    <tr>
      <th className="title-head">Type</th>
      <th className="title-head">Amount</th>
      <th className="title-head">Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => (
            <tr className="table-row" key={id}>
                <td className="table-cell">{type}</td>
                <td className="table-cell">{amount}</td>
                <td className="table-cell">{currency}</td>
            </tr>
            ))}
  </tbody>
</table>

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