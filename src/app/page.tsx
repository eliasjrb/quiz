import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center gap-5 opacity-80 justify-center bg-gradient-to-r from-cyan-600 to-green-600" >
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="w-12 h-12 bg-blue-500 border"></div>
        <div className="rotated">
          <div className="w-12 h-12 bg-yellow-400 border animate-bounce"></div>
        </div>
        <div className="w-12 h-12 bg-green-400 border"></div>
        <div className="w-12 h-12 bg-purple-400 border"></div>
      </div>
      <h1 className="flex gap-3 text-8xl text-gray-800 font-bold text-center text-borda">
        <p className="text-purple-400 delay-75 duration-100 animacao-quiz-a">Q</p>
        <p className="text-blue-400 delay-100 duration-100  animacao-quiz-b">U</p>
        <p className="text-green-400 delay-75 duration-100 animacao-quiz-a">I</p>
        <p className="text-yellow-400  delay-100 duration-100 animacao-quiz-b">Z</p>
      </h1>
      <div className="w-w-3/5 items-center grid grid-rows-2 grid-cols-2 gap-3">
        <div className="flex justify-center items-center">
          <Link className="bg-indigo-500 text-center p-5 hover:scale-110 grow border border-indigo-600 text-gray-200 rounded-lg w-fuul h-full" href="/perguntas?mat=0">Língua Portuguesa</Link>
        </div>
        <div className="flex justify-center items-centerflex">
          <Link className="bg-indigo-500 text-center p-5 hover:scale-110 grow border border-indigo-600 text-gray-200 rounded-lg w-fuul h-full" href="/perguntas?mat=1">Matemática</Link>
        </div>
        <div className="flex justify-center items-centerflex">
          <Link className="bg-indigo-500 text-center p-5 hover:scale-110 border grow border-indigo-600 text-gray-200 rounded-lg w-fuul h-full" href="/perguntas?mat=2">Ciências</Link>
        </div>
        <div className="flex justify-center items-centerflex">
          <Link className="bg-indigo-500 text-center p-5 hover:scale-110 border grow border-indigo-600 text-gray-200 rounded-lg w-fuul h-full" href="/perguntas?mat=3">História</Link>
        </div>
        <div className="flex justify-center items-centerflex">
          <Link className="bg-indigo-500 text-center p-5 hover:scale-110 border grow border-indigo-600 text-gray-200 rounded-lg w-fuul h-full" href="/perguntas?mat=4">Ângulos e Circuferência</Link>
        </div>
      </div>
    </div >
  )
}