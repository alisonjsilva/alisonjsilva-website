import Photo from "@components/Photo";


export default function Header() {

    return (
        <>
            <Photo />
            <h1 className="text-center text-8xl font-extrabold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Alison Silva
            </h1>
            <h2 className="text-center text-3xl pb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Full Stack Web Engineer
            </h2>
        </>
    )
}