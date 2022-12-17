import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './List.scss'

export default function List() {
    const listRef = useRef();
    const [sliderNumber, setSliderNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (dir) =>{
       setIsMoved(true);
       let distance = listRef.current.getBoundingClientRect().x-50; 
       if (dir === 'right' && sliderNumber<6){
            setSliderNumber(sliderNumber + 1);
            listRef.current.style.transform = `translatex(${-230+distance}px)`
        }
       if (dir === 'left' && sliderNumber>0){
        setSliderNumber(sliderNumber - 1);
        listRef.current.style.transform = `translatex(${230+distance}px)`
   }
    }
  return (
    <div className='list'>
      <span className="list-title">Popular on Netflix</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left' onClick = {() => handleClick('left')} style={{ display: !isMoved && "none" }} />
        <div className="container" ref={listRef}>
            <ListItem index={0} />
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={9}/>
            <ListItem index={10}/>
            <ListItem index={11}/>
            <ListItem index={12}/>
            <ListItem index={13}/>
            <ListItem index={14}/>
            <ListItem index={15}/>
        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick = {() => handleClick('right')}/>
      </div>
    </div>
  )
  }

