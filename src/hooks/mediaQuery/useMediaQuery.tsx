
import { useState, useEffect } from 'react';

export default function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(() =>
        typeof window !== "undefined" ? window.matchMedia(query).matches : false
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handler = () => setMatches(mediaQuery.matches);


        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, [query]);

    return matches;
}
