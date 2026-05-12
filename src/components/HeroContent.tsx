export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">✨ 78 карт — полный архетип</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic">Познай</span> язык
          <br />
          <span className="font-light tracking-tight text-white">карт Таро</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          Изучите значения всех 78 карт Таро — от Старших Арканов до масти Мечей.
          Подробные трактовки, символика, история и практика гадания для начинающих и опытных.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="https://www.biddytarot.com/tarot-card-meanings/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
          >
            Все карты
          </a>
          <a
            href="https://www.biddytarot.com/how-to-read-tarot/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-purple-100 cursor-pointer"
          >
            Начать обучение
          </a>
        </div>
      </div>
    </main>
  )
}