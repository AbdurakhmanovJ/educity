import program_1 from '../images/program-1.png'
import program_2 from '../images/program-2.png'
import program_3 from '../images/program-3.png'
import download_icon from '../images/download-icon.png'
import download_icon_1 from '../images/download-icon-1.png'
import download_icon_2 from '../images/download (1).png'
function Programs() {
    return (
        <div className='programs'>
            <div className="program">
                    <img src={program_1} alt="" className="prog-img" />
                    <div className="caption">
                        <img src={download_icon} alt="" className="caption-img" />
                        <p className="caption__text">Graduation Degree</p>
                    </div>
                 </div>
                <div className="program">
                    <img src={program_2} alt="" className="prog-img" />
                    <div className="caption">
                        <img src={download_icon_1} alt="" className="caption-img" />
                        <p className="caption__text">Masters Degree</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program_3} alt="" className="prog-img" />
                    <div className="caption">
                        <img src={download_icon_2} alt="" className="caption-img" />
                        <p className="caption__text">Post Graduation</p>
                    </div>
                </div>
        </div>
    )
}

export default Programs