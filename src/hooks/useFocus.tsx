import { useRef } from 'react';

export const useFocus = () => {

    const htmlElRef = useRef<any>(null)

    const setFocus = () : void => {

        htmlElRef.current.focus()

    }

    return [ htmlElRef, setFocus ] as const;
}