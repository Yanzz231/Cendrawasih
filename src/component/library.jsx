"use client"
import { List } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"

export default function Library(data) {
    return (
        <div className="flex flex-col gap-4">

            {data.data.map((res, index) => {
                return (<div key={index}>
                    <Link className="relative group" href={`/images/`}>
                        <div className="flex items-center">
                            <div className="absolute rounded left-1 bottom-1 bg-color-accent p-1 text-xl flex items-center gap-1 font-bold z-20 transition-opacity duration-300 group-hover:opacity-100 opacity-0">{res.title}</div>
                            {data.edit ? (<button className="absolute rounded right-1 top-1 bg-color-accent p-1 text-xl flex items-center gap-1 font-bold z-20 transition-opacity duration-300 group-hover:opacity-100 opacity-0"><List size={32} /></button>) : ""}
                        </div>
                        <Image className="h-auto w-auto rounded-lg transition-transform duration-300 group-hover:scale-105" layout="responsive" width={10000} height={10000} src={res.image} alt="" />
                    </Link>
                </div>)
            })}
        </div>
    )
}