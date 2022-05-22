import { H2 } from '../text';
import * as styled from './styled';

type SectionHeaderProps = {
	children?: string;
};

const SectionHeader = ({ children }: SectionHeaderProps) => {
	return (
		<styled.SectionHeader>
			<H2>{children}</H2>
		</styled.SectionHeader>
	);
};

export default SectionHeader;
