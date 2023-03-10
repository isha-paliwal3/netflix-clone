import { ArrowBackOutlined } from '@material-ui/icons'
import './Watch.scss'
import watch from './watch.mp4'
import { Link,useLocation  } from 'react-router-dom';

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className='watch'>
      <Link to= "/">
        <div className='back'>
      <ArrowBackOutlined />
      Home
      </div>
      </Link>
      <video className='video' autoPlay progress controls src={watch} ></video>
      {/* <video className="video" autoPlay progress controls src={movie.video} /> */}
    </div>
  )
}
