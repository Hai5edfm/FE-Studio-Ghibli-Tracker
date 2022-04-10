import React, { useContext } from "react";
import { StarRating } from "../StarRating";
import "./DoubleRating.css";
import { AppContext } from "../../context/AppContext";

function DoubleRating({filmWatched, scoreRatingUser, audienceScoreRating}){
    //if filmWatched is true show star component with userscore
    //  and show star component with audence_score
    //if filmWatched is false show star component with usescore=0
    // here it should receive an state of isWatched.
    const {
        isWatched: { isWatched }
    } = useContext(AppContext);
    console.log("isWatched result",isWatched);
    
    if (!filmWatched) {
        return(
            <div className="score-film-not-watched">
                <StarRating scoreRatingUser={0} />
            </div>
        );
    } else {
        return(
            <div className="score-rating-container">
                <div className="score-audience-content">
                    <p>Audience Score</p>
                    <StarRating scoreRatingUser={audienceScoreRating} />
                </div>
                <div className={`score ${isWatched ? "active" : ""}`}>
                    <p>Your Score</p>
                    <StarRating scoreRatingUser={scoreRatingUser} />
                </div>
            </div>
        );
    }
}

export { DoubleRating }