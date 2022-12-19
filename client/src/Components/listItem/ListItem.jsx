import { AddCircleOutlineRounded, PlayCircleFilledOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons'
import { useState } from 'react'
import './ListItem.scss'

export default function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div className='listItems'
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >
            <img
                src="https://vmndims.binge.com.au/api/v2/img/62f4845ae4b03e2e119f32fe-1660191896863?location=tile&imwidth=1280"
                alt="" />
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
                    <span>12 Seasons</span>
                    <span className='limit'>16</span>
                    <span>2014</span>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae autem nisi, porro, voluptatem consequuntur.
                </div>
                <div className="genre">Comedy</div>
            </div>
            </>
                )}
        </div>
    )
}
