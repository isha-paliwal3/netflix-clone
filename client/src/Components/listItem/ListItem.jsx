import { AddCircleOutlineRounded, PlayCircleFilledOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './ListItem.scss'

export default function ListItem({ index,item }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTBjMjU5MzkzMDk3ZjY3NTU5MGYyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTQ5NDQ4NiwiZXhwIjoxNjcxOTI2NDg2fQ.3ziVgcM1aPucDdOXyVTUpzM2U1RYr81uGQi0beQhaNE",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

    return (
        <Link to={{ pathname: "/watch", movie: movie }}>
        <div className='listItems'
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >
             <img src={movie?.imgSm} alt="" />
            {isHovered && (
            <>
                 <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
                <div className="icons">
                    <PlayCircleFilledOutlined className='icon' />
                    <AddCircleOutlineRounded className='icon' />
                    <ThumbUpOutlined className='icon' />
                    <ThumbDownOutlined className='icon' />
                </div>
                <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
            </>
                )}
        </div>
        </Link>
    )
}
