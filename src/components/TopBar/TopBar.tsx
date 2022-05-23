import * as styled from './styled';

import { ReactComponent as BackIcon } from './assets/back-icon.svg';

type TopBarProps = {
	className?: string;
	// Includes the back button on the left
	backButton?: boolean;
	title?: string;
	onBack?: () => void;
};

const TopBar = ({ className, backButton = false, title, onBack }: TopBarProps) => {
	const positioningHelper: JSX.Element | undefined = backButton ? <div /> : undefined;

	const leftAction: JSX.Element | undefined = backButton ? (
		<styled.BackButton aria-label='Back' onClick={onBack}>
			<BackIcon />
		</styled.BackButton>
	) : undefined;

	return (
		<styled.TopBar className={className} withLeftAction={backButton}>
			{leftAction}

			<styled.Title title={title}>{title}</styled.Title>

			{positioningHelper}
		</styled.TopBar>
	);
};

export default TopBar;
