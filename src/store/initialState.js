import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.png';
import img7 from '../assets/images/7.png';
import img8 from '../assets/images/8.png';

const initialState = {
  boardSize: 12,
  boardChanged: false,
  activeCards: [],
  images: [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,

  ],
  cards: [],
  noTries: 0,
  noMatched: 0,
};

export default initialState;
