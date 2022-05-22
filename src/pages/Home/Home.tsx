import TopBar from '../../components/TopBar';
import * as styled from './styled';

const Home = () => {
	return (
		<styled.Home>
			<TopBar title='People of Star Wars' />

			<styled.CharacterList />
		</styled.Home>
	);
};

export default Home;
