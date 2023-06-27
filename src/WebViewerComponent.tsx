import { useContext, useEffect, useRef, useState } from 'react';
import WebViewer, { Core, WebViewerInstance } from '@pdftron/webviewer'
import React from 'react';
import q from "./file/sample.pdf"
import dock from "./file/dockFile.docx"
import { WebViewerContext } from './App';

export const WebViewerComponent = (props: any) => {
    let viewer = useRef(null);
    const { setInstance }: any = useContext(WebViewerContext);



    useEffect(() => {
        WebViewer(
            {
                path: '/webviewer/lib',
                // config:{
                //     disableElements    
                // }   
                             
                //initialDoc: dock,
                //licenseKey: "demo:1687786872842:7d96eec503000000001316f80d883996ed79c20217ed5dbeb865316d79"
            },
            viewer.current!,
        ).then((instance) => {
            setInstance(instance);
        });
    }, []);




    return (
        <div className="ComponentName">

            <div className="webviewer" ref={viewer} style={
                {
                    height: "800px",
                    width: "900px"
                }}></div>

        </div>
    );
};