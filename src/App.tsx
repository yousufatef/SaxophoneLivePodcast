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
      <Hero
        image={{
          src: "/images/hero.png",
          alt: "Hero image",
        }}
        title="The First Voice of DeWorld – Live & Unfiltered"
        description="Weekly Discussions on the Future of Innovation & Decentralization"
        features={[
          "Weekly Discussions on the Future of Innovation & Decentralization",
          "HNWIs, Blockchain Experts, & Game-Changing Thinkers",
          "Bridging the gap between centralized power and decentralized freedom",
        ]}
        primaryButton={{
          text: "Join the Live Show",
          onClick: () => console.log("Join clicked"),
        }}
        secondaryButton={{
          text: "Vote the Next Topic",
          onClick: () => console.log("Vote clicked"),
        }}
      />
       <Hero
        imagePosition="right"
        image={{
          src: "/images/show.png",
          alt: "Another hero image",
        }}
        title="What is Saxophone Live Podcast?"
        description="The Ultimate Live Debate Between Centralized & Decentralized Thinkers"
        features={[
          "HNWIs Meet DeWorld – Billionaires & blockchain leaders debate innovation",
          "Real-World Impact – Discussions that shape the future of finance, AI, and Web3.",
          "Community-Powered – Listeners vote on topics and engage in live discussions.",
          "Funding New Ideas – Highlighting projects, startups, and solutions",
          "Market Insights – The latest trends and opportunities in the DeWorld ecosystem.",
        ]}
        primaryButton={{
          text: "Get Started",
          onClick: () => console.log("Get started clicked"),
        }}
      />
       <Hero
        image={{
          src: "/images/show.png",
          alt: "Another hero image",
        }}
        title="What is Saxophone Live Podcast?"
        description="The Ultimate Live Debate Between Centralized & Decentralized Thinkers"
        features={[
          "HNWIs Meet DeWorld – Billionaires & blockchain leaders debate innovation",
          "Real-World Impact – Discussions that shape the future of finance, AI, and Web3.",
          "Community-Powered – Listeners vote on topics and engage in live discussions.",
          "Funding New Ideas – Highlighting projects, startups, and solutions",
          "Market Insights – The latest trends and opportunities in the DeWorld ecosystem.",
        ]}
        primaryButton={{
          text: "Get Started",
          onClick: () => console.log("Get started clicked"),
        }}
      />
    </div>
  )
}



export default App