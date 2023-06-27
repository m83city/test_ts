import { useContext } from 'react';
import { WebViewerContext } from '../App';

export default function useInstance() {
    const { instance }: any = useContext(WebViewerContext);
    return instance;
}