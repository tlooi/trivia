import { useEffect, useState } from "react"
import { IAPIData } from "../../types/data";

export default function useFetch(url: string) {
    const [data, setData] = useState<IAPIData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);

        const controller = new AbortController();
        fetch(url, { signal: controller.signal, method: 'GET' })
            .then(res => res.json())
            .then((data: IAPIData) => {
                setData(data);
                setLoading(false);
            })
            .catch(() => { });

        return () => {
            controller.abort()
        };
    }, [url]);

    return { data, loading };
}