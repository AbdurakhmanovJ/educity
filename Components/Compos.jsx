import Gallery from '../images/gallery-1.png'
import Gallery1 from '../images/gallery-2.png'
import Gallery2 from '../images/gallery-3.png'
import Gallery3 from '../images/gallery-4.png'
import Arrow from '../images/white-arrow.png'
function Compos() {
  return (

    <div className='campus'>
        <div className="gallery">
            <img src={Gallery} alt="" className="campus__img" />
            <img src={Gallery1} alt="" className="campus__img" />
            <img src={Gallery2} alt="" className="campus__img" />
            <img src={Gallery3} alt="" className="campus__img" />
        </div>
        <button className="btn dark-btn">See more here <img src={Arrow} alt="" className="cospus-img" /></button>
    </div>
  )
}

export default Compos