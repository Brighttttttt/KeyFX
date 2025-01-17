import {useEffect} from "react";

const useDocumentMetadata = (title, description) => {
    useEffect(() => {
        if (title) document.title = title;
        if (description) {
            const metaTag = document.querySelector('meta[name="description"]');
            if (metaTag) {
                metaTag.setAttribute("content", description);
            }
        }
    }, [title, description]);
};

export default useDocumentMetadata;