import Image from "next/image";
import loading from "../../public/loading.gif"

export default function Loading() {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <Image src={loading} alt="loading"/>
        </div>
    )
}