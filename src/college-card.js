import React from 'react';
import './college-card.css';


function CollegeCard(props){

    const star = ()=>{
        const rows = []
        for(let i=0; i<props.college.rating;i++){
            rows.push(<span class="fa fa-star checked"></span>)
        }
        for(let i = props.college.rating; i<5;i++){
            rows.push(<span class="fa fa-star"></span>)
        }
        return rows
    }

    return(<React.Fragment>
        <div class="college_card">
        {props.college.promoted && <div class="promoted">PROMOTED</div>}
        <div className="layer">
            <div class="image_text">
                <div class="image_left_text">
                    <div>
                        {props.college.tags.map(place=>{return(<span className="place">{place}</span>)})}
                    </div>
                </div>
                <div className="image_right_text">
                    <div class="rating_top"><span className="rating_number">{props.college.rating}</span>/5<div class="remarks">{props.college.rating_remarks}</div></div>
                    <div className="ranking">#{props.college.ranking}</div>
                </div>
            </div>
        </div>
        <div class="data">
            <div className="left_text">
                <div class="title">
                    <h3>{props.college.college_name}</h3>
                    {star()}
                </div>
                <div class="nearest_place">
                    {props.college.nearest_place.map((place,ind)=>{return(<span>{place} {ind<props.college.nearest_place.length-1 && <span> | </span>}</span>)})}
                </div>
                <div className="famous_nearest_places">{props.college.famous_nearest_places}</div>
                <div className="offerText">{props.college.offertext}</div>
            </div>
            <div className="right_text">
                <div className="price">
                    <span className="fees">₹{props.college.original_fees}</span>
                    <span className="discount">• {props.college.discount}</span>
                </div>
                <div class="original_price">₹{props.college.discounted_fees}</div>
                <div class="cycle">{props.college.fees_cycle}</div>
                <div class="amanities">{props.college.amenties.map((place,ind)=>{return(<span>{place} {ind<props.college.amenties.length-1 && <span> • </span>}</span>)})}</div>
            </div>
        </div>
        </div>
    </React.Fragment>)
}

export default CollegeCard