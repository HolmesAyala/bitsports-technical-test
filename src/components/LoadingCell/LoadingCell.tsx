import { HTMLAttributes } from 'react';
import LoadingIndicator from '../LoadingIndicator';
import * as styled from './styled';

type LoadingCellProps = HTMLAttributes<HTMLDivElement> & {};

const LoadingCell = (props: LoadingCellProps) => {
	return (
		<styled.LoadingCell {...props}>
			<LoadingIndicator />
		</styled.LoadingCell>
	);
};

export default LoadingCell;
