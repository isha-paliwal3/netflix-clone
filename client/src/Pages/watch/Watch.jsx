import { ArrowBackOutlined } from '@material-ui/icons'
import './Watch.scss'
import watch from './watch.mp4'

export default function Watch() {
  return (
    <div className='watch'>
        <div className='back'>
      <ArrowBackOutlined />
      Home
      </div>
      <video className='video' autoPlay progress controls src={watch} ></video>
    </div>
  )
}
