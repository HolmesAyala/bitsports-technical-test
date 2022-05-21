import { ReactNode } from 'react';
import { H2 } from '../text';
import * as styled from './styled';
import { ReactComponent as LoadingIcon } from './assets/loading-icon.svg';

type LoadingIndicatorProps = {
	children?: ReactNode;
};

const LoadingIndicator = ({ children = <H2 color='light'>Loading</H2> }: LoadingIndicatorProps) => {
	return (
		<styled.LoadingIndicator>
			<LoadingIcon />

			{children}
		</styled.LoadingIndicator>
	);
};

export default LoadingIndicator;
