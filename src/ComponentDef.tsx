import { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer'
import React from 'react';
export const ComponentDef = () => {
    const viewer = useRef(null);

    useEffect(() => {
        WebViewer(
            {
                path: '/webviewer/lib',
                initialDoc: './sample.pdf',
},
    viewer.current!,
).then((instance) => {
        const { documentViewer } = instance.Core;
        // you can now call WebViewer APIs here...
    });
}, []);
return (
    <div className="ComponentName">
        <div className="header">React PDF Webviewer Sample</div>
        <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
);
};