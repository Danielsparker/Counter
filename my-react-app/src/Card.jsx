import profilepic from './assets/Profile.jpg'

function Card(){
    return(
        <div className="card">
            <img src ="{profilepic}" alt="profile picture"></img>
            <h2 className="card-title">Thinking Tamizha</h2>
            <p className="card-text">I am Yt vedios and play</p>
        </div>

    )

}

export default Card