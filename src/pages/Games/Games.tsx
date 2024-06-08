import GifGame from './Gif';
import { useParams } from 'react-router-dom';

const Games = () => {
  const { game } = useParams();

  switch (game) {
    case 'gif':
      return <GifGame />;
    default:
      return <div>Game not found</div>;
  }
};

export default Games;
