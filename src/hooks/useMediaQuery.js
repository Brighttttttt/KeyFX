import {useLayoutEffect, useState} from 'react';

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useLayoutEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);
        const handleResize = () => setMatches(mediaQuery.matches);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [query]);

    return matches;
}