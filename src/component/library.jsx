import Image from "next/image"

export default function Library(data) {
    return (
        <div className="grid gap-4">
            {data.data.map((res, index) => {
                return (<div key={index}>
                    <Image className="h-auto max-w-full rounded-lg hover:scale-105" width={350} height={350} src={res.image} alt="" />
                </div>)
            })}
        </div>
    )
}