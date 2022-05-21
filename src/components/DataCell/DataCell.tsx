import { H2 } from '../text';
import * as styled from './styled';

type DataCellProps = {
	property?: string;
	value?: string;
};

const DataCell = ({ property, value }: DataCellProps) => {
	return (
		<styled.DataCell>
			<H2 color='light'>{property}</H2>

			<styled.ValueText>{value}</styled.ValueText>
		</styled.DataCell>
	);
};

export default DataCell;
