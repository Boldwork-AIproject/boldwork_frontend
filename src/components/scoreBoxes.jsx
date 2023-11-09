import * as React from "react";

const Scorebox = (props) => (
    <div style={{marginBottom:"30px"}}>
        <span style={{ fontSize: "11px" }}>{props.label}</span>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={168}
            height={21}
            viewBox="0 0 168 21"
            fill="none"
            {...props}
        >
            <line x1={0.5} y1={15} x2={0.5} y2={21} stroke="#7D7D7D" />
            <line x1={41.4414} y1={15} x2={41.4414} y2={21} stroke="#7D7D7D" />
            <line x1={83.7949} y1={15} x2={83.7949} y2={21} stroke="#7D7D7D" />
            <line x1={126.146} y1={15} x2={126.146} y2={21} stroke="#7D7D7D" />
            <line x1={167.088} y1={15} x2={167.088} y2={21} stroke="#7D7D7D" />
            <rect width={168} height={17} fill="#D9D9D9" />
            <rect width={props.score*1.7} height={17} fill="#372FFF" />
        </svg>
    </div>
);

const ScoreBoxes = () => {
    const dataset = [
      { key: '대화 참여도', score: '80' },
      { key: '비속어 빈도', score: '10' },
      { key: '호의적 어조', score: '70' }
    ];
  
    return (
      <div>
        {dataset.map((data, index) => (
          <Scorebox
            key={index}
            label={data.key}
            score={data.score}
          />
        ))}
      </div>
    );
  };

export default ScoreBoxes;

