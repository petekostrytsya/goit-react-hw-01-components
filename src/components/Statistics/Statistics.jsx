import PropTypes from "prop-types";
import { StatisticsItem } from "./StatisticsItem";

export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}

            <ul className="stat-list">
                {stats.map(({ id, label, percentage }) => (
                    <li className="item" key={id}>
                        <StatisticsItem label={label} percentage={percentage} />
                    </li>
                )

                )}
  </ul>
</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
