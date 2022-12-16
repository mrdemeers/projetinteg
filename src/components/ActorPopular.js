import React from "react";

const ActorPopular = (props) => {

    const { actorpopular, onClickActor } = props;
   
    return(
        <div className="card" onClick={onClickActor}>
            <img 
               src={
                actorpopular.profile_path ?
                `https://image.tmdb.org/t/p/original${actorpopular.profile_path}` : 
                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                } 
               alt="profile"
            />
            <div className="actorContainer">
                <ul>
                    <li className="actorName">{actorpopular.name}</li>
                </ul>
            </div>
        </div>
    )
}

export default ActorPopular;