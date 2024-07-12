import Image from "next/image"

export default function Library(data) {
    return (
        <div className="flex flex-col gap-4">
            
            {data.data.map((res, index) => {
                return (<div key={index}>
                    <Image className="h-auto w-auto rounded-lg hover:scale-105" layout="responsive" width={10000} height={10000} src={res.image} alt="" />
                </div>)
            })}
        </div>
    )
}