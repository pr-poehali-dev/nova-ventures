export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-light">🔮 Таро Академия</div>
        <nav className="flex gap-8">
          <a
            href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D1%80%D0%BE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300 transition-colors duration-300 uppercase text-sm"
          >
            О Таро
          </a>
          <a
            href="https://www.tarot.com/tarot/cards"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300 transition-colors duration-300 uppercase text-sm"
          >
            Карты
          </a>
          <a
            href="https://www.biddytarot.com/tarot-card-meanings/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300 transition-colors duration-300 uppercase text-sm"
          >
            Трактовки
          </a>
        </nav>
      </div>
    </header>
  )
}