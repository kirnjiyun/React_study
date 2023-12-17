import { useEffect, useRef } from "react";

export default function useUpdate() {
    const isMountRef = useRef(false);

    useEffect(() => {
        if (!isMountRef.current) {
            isMountRef.current = true;
            return;
        }
        console.log("업데이트");
    });
}
