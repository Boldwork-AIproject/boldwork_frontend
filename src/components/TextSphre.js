import React, { useEffect } from "react";

import "../assets/TextSphere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "보험료",
        "건강",
        "자동차",
        "교통사고",
        "주소지이전",
        "계약금",
        "계약해지",
        "수수료",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: false,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextSphere;
