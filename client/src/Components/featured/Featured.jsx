import { InfoOutlined, PlayArrowRounded } from '@material-ui/icons'
import axios from "axios";
import { useEffect, useState } from "react";
import './Featured.scss'

export default function Featured({ type, setGenre }) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTBjMjU5MzkzMDk3ZjY3NTU5MGYyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTQ5NDQ4NiwiZXhwIjoxNjcxOTI2NDg2fQ.3ziVgcM1aPucDdOXyVTUpzM2U1RYr81uGQi0beQhaNE",
                    },
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomContent();
    }, [type]);

    console.log(content);

    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "TV Shows"}</span>
                    <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                        <option value="1" >Genres</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt="" />
            <div className="info">
                <img src={content.imgTitle} alt="" />
                <span className="desc">{content.desc}</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowRounded className='icon-play' />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined className='icon-info' />
                        <span>More Info</span>
                    </button>
                </div>
            </div>

        </div>
    )
}
