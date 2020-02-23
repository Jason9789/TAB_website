import React from 'react';

let bgColor = '';

const Contents = props => {
  return (
    <div
      id={props.id}
      className="contents section"
      style={{ backgroundColor: bgColor }}
    >
      <h1>{props.contentsName}</h1>
      <hr />
      <div className="content-box">
        {props.items.map((item, index) => {
          return <Content detail={item} key={index} />;
        })}
      </div>
    </div>
  );
};

const Content = props => {
  let detail_3 = '';
  if (props.detail.length === 4) detail_3 = props.detail[3];
  return (
    <div className="content">
      <img className="content-img" src={props.detail.svg} alt="content img" />
      <h2>{props.detail.title}</h2>
      <p className="content-detail">{props.detail.description}</p>
      {detail_3}
    </div>
  );
};

export default Contents;
