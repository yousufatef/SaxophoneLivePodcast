import './Carousel.css';

const Carousel = () => {
    const tickerItems = [
        "DEEP ROOTS",
        "The Address",
        "TeleXcoin",
        "Deep Assets",
        "Share Value",
        "InnoFi",
        "InnoLaunch",
        "MetaFabric",
        "Foundation",
        "RootOpia",
        "Blockchain",
        "Smart contract",
        "Defi",
        "DeWorld",
        "DRC",
    ];

    return (
        <div className="bg-zinc-900 overflow-hidden py-6">
            <div className="relative flex overflow-x-hidden">
                <div className="animate-ticker flex whitespace-nowrap">
                    {[...tickerItems, ...tickerItems].map((item, index) => (
                        <span key={index} className="text-amber-400 font-bold text-xl md:text-2xl mx-8">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;