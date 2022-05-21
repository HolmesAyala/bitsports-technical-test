import { H2, P } from '../text';
import * as styled from './styled';
import { ReactComponent as ArrowIndicatorIcon } from './assets/arrow-indicator-icon.svg';

type PersonCellProps = {
	title?: string;
	description?: string;
};

const PersonCell = ({ title, description }: PersonCellProps) => {
	return (
		<styled.PersonCell>
			<div>
				<H2>{title}</H2>

				<P color='light'>{description}</P>
			</div>

			<ArrowIndicatorIcon />
		</styled.PersonCell>
	);
};

export default PersonCell;
