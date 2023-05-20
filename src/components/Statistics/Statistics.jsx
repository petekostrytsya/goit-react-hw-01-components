import PropTypes from "prop-types";

export const Statistics = ({ title, stats: { id, label, percentage } }) => {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}

            <ul className="stat-list">
                {/* {(id, label, percentage).map(({ id, label, percentage }) => {
                    return (<Statistics key={id} label={label} percentage={percentage} /> )
                })} */}
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
    PropTypes.exact ({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),)
}
