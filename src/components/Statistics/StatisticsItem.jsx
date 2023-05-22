import PropTypes from "prop-types";
import { StatsItem, Label, Percentage } from './StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
    return (
        <StatsItem>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </StatsItem>
    )
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}