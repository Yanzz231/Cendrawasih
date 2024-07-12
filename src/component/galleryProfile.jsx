"use client"

import { useEffect, useState } from "react"
import Library from "./library"

export default function Gallery() {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(20)
    const [loop, setLoop] = useState(false);
    const [first, setFirst] = useState(true);
    const [skip, setSkip] = useState(0)
    const [user, setUser] = useState([])

    const [loading, setLoading] = useState(true)

    const handleData = async (loop) => {
        const data = { limit: limit, skip: skip, id: user.id }
        const response = await fetch("/api/checkpost", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const checkPost = await response.json()
        if (loop === "loop") {
            setData(prevData => [...prevData, ...checkPost.data]);
        } else {
            setData(checkPost.data)
        }
    }

    useEffect(() => {
        handleData()
    }, [])


    useEffect(() => {
        const fetchData = async () => {
            if (first) {
                handleData()
                setFirst(false)
                setLoading(false)
            }
            if (loop) {
                handleData("loop")
                setLoop(false)
                setLoading(false)
            }
        };

        fetchData();

    }, [limit]);

    const handleScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 2) {
            setLimit(prevPage => prevPage + 20);
            setSkip(prevPage => prevPage + 20);
            setLoop(true)
            setLoading(true)
        }
    };

    const checkUser = async (user, pass) => {
        const data = { username: user, password: pass }
        const response = await fetch("/api/signin", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const postData = await response.json()
        if (postData.status) {
            setUser(postData.data[0])
        }
    }

    useEffect(() => {
        const getAccount = localStorage.getItem('username');
        const getPassword = localStorage.getItem('password');

        if (getAccount !== null || getPassword !== null) {
            checkUser(getAccount, getPassword)
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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