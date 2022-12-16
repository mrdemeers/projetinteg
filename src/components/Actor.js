import React from "react";

const Actor = (props) => {

    const { actor, onClickActor } = props;
   
    return(
        <div className="card" onClick={onClickActor}>
            <img 
               src={
                actor.profile_path ?
                `https://image.tmdb.org/t/p/original${actor.profile_path}` : 
                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                } 
               alt="profile"
            />
            <div className="actorContainer">
                <ul>
                    <li className="actorName">{actor.original_name}</li>
                </ul>
            </div>
        </div>
    )
}

export default Actor;