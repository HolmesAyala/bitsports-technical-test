import * as styled from './styled';

type DataCellProps = {
	property?: string;
	value?: string;
};

const DataCell = ({ property, value }: DataCellProps) => {
	return (
		<styled.DataCell>
			{property && <styled.PropertyText color='light'>{property}</styled.PropertyText>}

			{value && <styled.ValueText>{value}</styled.ValueText>}
		</styled.DataCell>
	);
};

export default DataCell;
