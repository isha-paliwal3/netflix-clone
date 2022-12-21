import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './List.scss'

export default function List({ list }) {
    const listRef = useRef();
    const [sliderNumber, setSliderNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (dir) =>{
       setIsMoved(true);
       let distance = listRef.current.getBoundingClientRect().x-50; 
       if (dir === 'right' && sliderNumber<5){
            setSliderNumber(sliderNumber + 1);
            listRef.current.style.transform = `translatex(${-240+distance}px)`
        }
       if (dir === 'left' && sliderNumber>0){
        setSliderNumber(sliderNumber - 1);
        listRef.current.style.transform = `translatex(${240+distance}px)`
   }
    }
  return (
    <div className='list'>
      <span className="list-title">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left' onClick = {() => handleClick('left')} style={{ display: !isMoved && "none" }} />
        <div className="container" ref={listRef}>
        {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick = {() => handleClick('right')}/>
      </div>
    </div>
  )
  }

