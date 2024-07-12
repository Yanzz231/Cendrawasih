"use client"

import { useEffect, useState } from "react"
import Library from "./library"

export default function Gallery() {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(1);
    const [loop, setLoop] = useState(false);
    const [loading, setLoading] = useState(true)
    const [limitCard, setLimitCard] = useState(3)

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
        const data = { limit: 20 }
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
        const chunked = [];
        for (let i = 0; i < size; i++) {
            chunked[i] = [];
        }
        data.forEach((item, index) => {
            chunked[index % size].push(item);
        });
        return chunked;
    };

    const chunkedDataMobile = chunkData(data, 2);
    const chunkedDataPC = chunkData(data, 4);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:hidden">
                {chunkedDataMobile.map((chunk, index) => (
                    <Library key={index} data={chunk} />
                ))}
            </div>
            <div className="sm:grid grid-cols-2 md:grid-cols-4 gap-4 hidden">
                {chunkedDataPC.map((chunk, index) => (
                    <Library key={index} data={chunk} />
                ))}
            </div>
        </>
    )
}