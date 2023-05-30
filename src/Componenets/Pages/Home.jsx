import HomeImg from '../images/HomeImg.png'


export default function Home() {
    return (
        <div className="PagesContainer">
            <div className="HomeContainer">
                <div className='div3'>
                    <h1>how to start your own bussiness ! Will you ready ?</h1>
                    <p>
                        WE help individuals or Organizations to start their
                        business or start-up by giving them indepth theory and
                        practical sessions.
                    </p>
                    <button>Join Now</button>
                </div>
                <div>
                    <img src={HomeImg} alt="" />
                </div>
                </div>
            </div>
    )
}