import React from "react";
import "../stylesheets/components/WorkCard.scss";

const WorkCard = (props: any) => {
  return (
    <div className="">
      <img src={props.image_source} alt="" />
      <div className="">
        <div>
          <h3>{props.name}</h3>
          <p>{props.city}</p>
          <p>{props.date}</p>
          <p>{props.duration}</p>
          <p>{props.role}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;