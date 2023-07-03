
import "./gallery.scss";
import images from "./images.json"
const Gallery = ()=>{
    return(
        <div className="gallery">
            {
                images.map((img,i)=><div> <img src={require(`../../assets/img/${img.name}`)} key={i} width="300"/></div> )
            }
        </div>

    )
}

export default Gallery;