import CustomImage from "./customimage"

export default function HeroSection(){
    const images = [
        "/img/gallery/gallery-01.jpg",
        "/img/gallery/gallery-02.jpg",
        "/img/gallery/gallery-03.jpg",
        "/img/gallery/gallery-04.jpg",
        "/img/gallery/gallery-05.jpg",
        "/img/gallery/gallery-06.jpg",
        "/img/gallery/gallery-07.jpg",
        "/img/gallery/gallery-08.jpg",
        "/img/gallery/gallery-09.jpg"
    ]
    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Welcome to Refresh!</h1>
                <p className="info">info</p>
                <button className="btn">button</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc= {src} pt={"90%"}/>
                ))}
            </div>
        </div>
    )
}