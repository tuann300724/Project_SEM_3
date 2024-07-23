import React from "react";

function NewsComponent({content}) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default NewsComponent;
