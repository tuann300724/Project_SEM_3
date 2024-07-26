import React from "react";

function Description({content}) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default Description;
