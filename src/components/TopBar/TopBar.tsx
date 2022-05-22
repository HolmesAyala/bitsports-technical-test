import { ReactNode } from 'react';
import * as styled from './styled';

type TopBarProps = {
	leftAction?: ReactNode;
	title?: string;
};

const TopBar = ({ leftAction, title }: TopBarProps) => {
	return (
		<styled.TopBar>
			<styled.Title>{title}</styled.Title>
		</styled.TopBar>
	);
};

export default TopBar;
