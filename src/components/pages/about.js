import React from 'react';
import selfPortrait from "../../../static/assets/images/bio/selfportrait.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + selfPortrait + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            
            />

            <div className="right-column">
                This is an abstract portrait of myself that I painted digitally, and I am using it as a 
                placeholder for an actual image of myself. I don't have many good pictures of me, so I 
                figured I could use a "picture" of me that I made! Hi, my name is Holly Baker and I am a
                beginner web developer and artist (not a beginner artist though!) and I am happy you came to 
                my site! I really appreciate it :)
            </div>
        </div>
    );
}