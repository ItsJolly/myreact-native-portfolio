import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Natalie Portfolio',
    desc:
      'Portfolio site for Natalie Nyatsanza, a model and influencer from Zimbabwe.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Elixer',
    desc:
      'An app for user published events, allowing people to buy tickets and book restuurants straight from the app. Event owners can generate revenue from their sales.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'HACIA Website',
    desc:
      'Webiste designed and developed for High Achievers Coach International  Academy. Periodic Maintanacne and Security updates still being made.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Jesus Generation',
    desc:
      'An app for Jesus Generation International Ministries. Memebers can watch previous sermons and view latest updates from the church and so much more, all within the app.',
    img: ProjectImg,
  },
];

export default projects;
