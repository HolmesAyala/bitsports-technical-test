import { HTMLAttributes } from 'react';
import { H2, P } from '../text';
import * as styled from './styled';
import { ReactComponent as ArrowIndicatorIcon } from './assets/arrow-indicator-icon.svg';

type PersonCellProps = HTMLAttributes<HTMLButtonElement> & {
	title?: string;
	description?: string;
};

const PersonCell = ({ title, description, ...props }: PersonCellProps) => {
	return (
		<styled.PersonCell {...props}>
			<div>
				<H2>{title}</H2>

				<P color='light'>{description}</P>
			</div>

			<ArrowIndicatorIcon />
		</styled.PersonCell>
	);
};

export default PersonCell;
