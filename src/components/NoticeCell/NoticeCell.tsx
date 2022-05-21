import { ReactNode } from 'react';
import { H2 } from '../text';
import * as styled from './styled';

type NoticeCellProps = {
	children?: ReactNode;
};

const NoticeCell = ({ children }: NoticeCellProps) => {
	return (
		<styled.NoticeCell>
			<H2 color='emphasis'>{children}</H2>
		</styled.NoticeCell>
	);
};

export default NoticeCell;
