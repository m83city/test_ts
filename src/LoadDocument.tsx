
import { useEffect, useRef, useContext, useState } from 'react';
import { WebViewerContext } from './App';
import dock from "./file/dockFile.docx"
import useInstance from './hook/useInstance';
import { WebViewerInstance } from '@pdftron/webviewer';

export const LoadDocument = () => {
    const instance: WebViewerInstance = useInstance();
    const searchTex = "And ";

    const handlerFile = (file: File) => {

        const { documentViewer, Search } = instance.Core


        // const searchOptions = {
        //     fullSearch: true,
        //     onResult: result => {
        //         if (result.resultCode === Search.ResultCode.FOUND) {
        //             const textQuad = result.quads[0].getPoints(); // getPoints will return Quad objects
        //             // now that we have the result Quads, it's possible to highlight text or create annotations on top of the text
        //         }
        //     }
        // }

        documentViewer.loadDocument(URL.createObjectURL(file), { extension: `${file.name.split('.').pop()}` })
        documentViewer.setSearchHighlightColors({
            searchResult: 'rgba(255,0,0,0)',
            activeSearchResult: 'red'

        })
        instance.UI.setHeaderItems(header => {
            const items = header.getItems().slice(9, -3);
            header.update(items);
        });
        documentViewer.addEventListener('documentLoaded', () => {
            instance.UI.disableElements(['searchPanel'])
            instance.UI.searchTextFull(searchTex, {
                wildcard: true
            });
        })

    }

    return (
        <>
            <input type='file' onChange={(e) => {
                handlerFile(e.target.files![0]);
            }} ></input>
        </>
    )
}