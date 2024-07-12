"use client"

import { useEffect, useState } from "react"
import Library from "./library"

export default function Gallery() {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(1);
    const [loop, setLoop] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            if (loop) {
                // const newData = await getMangaResponse("manga", `page=${limit}&${query}`)
                // setData(prevData => ({ data: [...prevData.data, ...newData.data] }));
                setLoop(false)
                setLoading(false)
            }
        };

        fetchData();

    }, [limit]);

    const handleScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 2) {
            setLimit(prevPage => prevPage + 1);
            setLoop(true)
            setLoading(true)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleData = async () => {
        const data = { limit: 10 }
        const response = await fetch("/api/checkpost", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const checkPost = await response.json()
        setData(checkPost.data)
    }

    useEffect(() => {
        handleData()
    }, [])

    const chunkData = (data, size) => {
        return data.reduce((acc, _, index) => {
            const chunkIndex = Math.floor(index / size);
            if (!acc[chunkIndex]) {
                acc[chunkIndex] = [];
            }
            acc[chunkIndex].push(_);
            return acc;
        }, []);
    };

    const chunkedData = chunkData(data, 3);

    return (
        chunkedData.map((chunk, index) => (
            <Library key={index} data={chunk} />
        ))
    )
}