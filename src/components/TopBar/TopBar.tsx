import * as styled from './styled';

import { ReactComponent as BackIcon } from './assets/back-icon.svg';

type TopBarProps = {
	// Includes the back button on the left
	backButton?: boolean;
	title?: string;
	onBack?: () => void;
};

const TopBar = ({ backButton = false, title, onBack }: TopBarProps) => {
	const positioningHelper: JSX.Element | undefined = backButton ? <div /> : undefined;

	const leftAction: JSX.Element | undefined = backButton ? (
		<styled.BackButton onClick={onBack}>
			<BackIcon />
		</styled.BackButton>
	) : undefined;

	return (
		<styled.TopBar withLeftAction={backButton}>
			{leftAction}

			<styled.Title title={title}>{title}</styled.Title>

			{positioningHelper}
		</styled.TopBar>
	);
};

export default TopBar;
