import Header from "./components/Header"
import Carousel from "./components/Carousel/Carousel"
import Hero from "./components/Hero"
import { Wallet } from "lucide-react"

const App = () => {


  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Landing Image */}
      <div className="pt-16">
        <img
          src="/images/landing.png"
          alt="Podcast background"
          className="object-cover"
        />
      </div>
      {/* About Section */}
      <section>
        <div className="flex flex-col items-center justify-center text-center py-[60px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
              Saxophone Live Podcast
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-8 text-amber-100">
            The Billion-Dollar Show for DeWorld
          </p>
          <button className="flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold px-6 py-3 text-lg rounded-full">
            <Wallet className="w-6 h-6" />
            <span>Connect Wallet</span>
          </button>
        </div>
      </section>
      <Carousel />
      <Hero />
    </div>
  )
}



export default App