import React from 'react';

function DisplayContent({content}) {
    if (!content) {
        return null; 
    }
    const formattedContent = content.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return <div>{formattedContent}</div>;
}

export default DisplayContent;