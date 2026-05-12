import { useState } from "react"

interface TarotCard {
  number: number
  name: string
  image: string
  keywords: string[]
  meaning: string
  reversed: string
  element: string
}

const cards: TarotCard[] = [
  {
    number: 0,
    name: "Шут",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/fc4174d8-1a72-4d8e-850b-dbc80e04cf8f.jpg",
    keywords: ["Начало", "Спонтанность", "Авантюра"],
    element: "Воздух",
    meaning: "Шут символизирует чистый потенциал и начало нового пути. Это карта бесконечных возможностей, доверия к жизни и готовности шагнуть в неизвестное. Она призывает действовать смело, не боясь ошибок — каждый путь начинается с первого шага.",
    reversed: "В перевёрнутом положении указывает на безрассудство, наивность или страх перед переменами. Возможно, вы избегаете ответственности или принимаете поспешные решения.",
  },
  {
    number: 1,
    name: "Маг",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/a014f6a7-ae82-4f2f-b4ae-82cc83e34b3c.jpg",
    keywords: ["Воля", "Мастерство", "Действие"],
    element: "Огонь",
    meaning: "Маг — воплощение силы воли и мастерства. У него есть все инструменты: чаша, пентакль, меч и жезл. Он умеет превращать идеи в реальность. Карта говорит: у вас есть всё необходимое для достижения цели — действуйте.",
    reversed: "Манипуляции, использование силы во вред, самообман. Возможно, вы растрачиваете потенциал или кто-то вводит вас в заблуждение.",
  },
  {
    number: 2,
    name: "Верховная Жрица",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/eb5b42e6-25e7-4bf9-8d67-b6a605bbd17e.jpg",
    keywords: ["Интуиция", "Тайна", "Знание"],
    element: "Вода",
    meaning: "Верховная Жрица охраняет скрытые знания и тайны подсознания. Она призывает прислушаться к внутреннему голосу, довериться интуиции. Сейчас не время для активных действий — время для наблюдения, созерцания и внутреннего поиска.",
    reversed: "Игнорирование интуиции, поверхностность, скрытые секреты выходят наружу. Возможно, вы не слышите себя или кто-то что-то скрывает.",
  },
  {
    number: 3,
    name: "Императрица",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/192232a3-2790-4604-8c15-ceac8b5ea7f1.jpg",
    keywords: ["Изобилие", "Творчество", "Плодородие"],
    element: "Земля",
    meaning: "Императрица — богиня природы, мать, творец. Она символизирует плодородие, изобилие и чувственную красоту мира. Карта говорит о расцвете творческих сил, материальном достатке и нежной, питающей любви. Время создавать и наслаждаться.",
    reversed: "Творческий блок, зависимость, чрезмерная опека или, наоборот, пренебрежение собой. Дисбаланс между давать и получать.",
  },
  {
    number: 4,
    name: "Император",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/fc4174d8-1a72-4d8e-850b-dbc80e04cf8f.jpg",
    keywords: ["Власть", "Структура", "Авторитет"],
    element: "Огонь",
    meaning: "Император олицетворяет силу, порядок и мудрое управление. Это карта отца, лидера, человека, установившего прочные основы. Она призывает взять ответственность, выстроить чёткую структуру и действовать с решимостью.",
    reversed: "Тирания, жёсткость, контроль ради контроля. Или напротив — слабость, неспособность выстроить границы и порядок.",
  },
  {
    number: 5,
    name: "Иерофант",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/a014f6a7-ae82-4f2f-b4ae-82cc83e34b3c.jpg",
    keywords: ["Традиция", "Наставник", "Вера"],
    element: "Земля",
    meaning: "Иерофант — хранитель традиций, духовный учитель. Он указывает на ценность проверенных путей, наставничества и принадлежности к сообществу. Карта советует искать мудрого учителя или следовать устоявшимся духовным практикам.",
    reversed: "Бунт против условностей, свободное мышление, но также догматизм или лицемерие. Время пересмотреть свои убеждения.",
  },
  {
    number: 6,
    name: "Влюблённые",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/eb5b42e6-25e7-4bf9-8d67-b6a605bbd17e.jpg",
    keywords: ["Любовь", "Выбор", "Союз"],
    element: "Воздух",
    meaning: "Влюблённые — не только о романтике, но и о важном выборе, согласовании ценностей. Карта указывает на союз противоположностей, на необходимость принять решение, которое определит ваш путь. Следуйте сердцу, но не забывайте о голосе разума.",
    reversed: "Дисгармония, неверный выбор, конфликт ценностей. Возможно, отношения требуют честного разговора.",
  },
  {
    number: 7,
    name: "Колесница",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/192232a3-2790-4604-8c15-ceac8b5ea7f1.jpg",
    keywords: ["Победа", "Контроль", "Движение"],
    element: "Вода",
    meaning: "Колесница — символ триумфа воли над обстоятельствами. Герой управляет двумя сфинксами — противоборствующими силами — силой духа. Карта говорит: победа достижима, если сохранять фокус и не позволять эмоциям взять верх.",
    reversed: "Потеря контроля, агрессия, движение без направления. Возможно, вы слишком давите на обстоятельства вместо того, чтобы течь с ними.",
  },
  {
    number: 8,
    name: "Сила",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/fc4174d8-1a72-4d8e-850b-dbc80e04cf8f.jpg",
    keywords: ["Мужество", "Терпение", "Внутренняя сила"],
    element: "Огонь",
    meaning: "Сила — это не физическая мощь, а мягкое, но непоколебимое присутствие духа. Женщина укрощает льва не силой, а любовью. Карта говорит: настоящее мужество — это терпение, сострадание и вера в себя даже в самые тёмные моменты.",
    reversed: "Неуверенность, страх, подавление эмоций или, напротив, потеря самоконтроля. Нужно найти баланс между силой и мягкостью.",
  },
  {
    number: 9,
    name: "Отшельник",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/a014f6a7-ae82-4f2f-b4ae-82cc83e34b3c.jpg",
    keywords: ["Уединение", "Мудрость", "Поиск"],
    element: "Земля",
    meaning: "Отшельник несёт фонарь во тьме — свет внутренней мудрости. Это карта самопознания, уединения и духовного поиска. Время отойти от суеты, прислушаться к себе и найти ответы внутри. Одиночество здесь — не изоляция, а священное пространство роста.",
    reversed: "Изоляция, нежелание слушать других, застревание в себе. Или обратное — бегство от необходимого уединения.",
  },
  {
    number: 10,
    name: "Колесо Фортуны",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/eb5b42e6-25e7-4bf9-8d67-b6a605bbd17e.jpg",
    keywords: ["Судьба", "Перемены", "Цикл"],
    element: "Огонь",
    meaning: "Колесо Фортуны вращается непрерывно — это символ вечных циклов жизни. Удача улыбается, обстоятельства меняются. Карта напоминает: всё временно — и хорошее, и плохое. Важно уметь видеть возможности в переменах и принимать судьбу с достоинством.",
    reversed: "Невезение, сопротивление переменам, ощущение, что вы жертва обстоятельств. Пора взять ответственность за свою судьбу.",
  },
  {
    number: 11,
    name: "Справедливость",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/192232a3-2790-4604-8c15-ceac8b5ea7f1.jpg",
    keywords: ["Баланс", "Истина", "Закон"],
    element: "Воздух",
    meaning: "Справедливость держит весы и меч — символы объективности и точности. Это карта кармы, причинно-следственных связей и честного суждения. Карта призывает смотреть на ситуацию беспристрастно, признавать свою роль в происходящем.",
    reversed: "Несправедливость, предвзятость, уклонение от ответственности. Или слишком суровые суждения о себе и других.",
  },
  {
    number: 12,
    name: "Повешенный",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/fc4174d8-1a72-4d8e-850b-dbc80e04cf8f.jpg",
    keywords: ["Пауза", "Жертва", "Новый взгляд"],
    element: "Вода",
    meaning: "Повешенный добровольно приостановил движение, чтобы увидеть мир по-новому. Его лицо светится — он нашёл просветление через отречение. Карта говорит: иногда нужно отпустить контроль, принять паузу и позволить новому пониманию прийти.",
    reversed: "Бессмысленные жертвы, нежелание меняться, затяжная пауза. Пора сделать выбор и двигаться дальше.",
  },
  {
    number: 13,
    name: "Смерть",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/a014f6a7-ae82-4f2f-b4ae-82cc83e34b3c.jpg",
    keywords: ["Трансформация", "Конец", "Обновление"],
    element: "Вода",
    meaning: "Карта Смерть редко означает физическую смерть. Это мощная карта трансформации — конец одной главы и начало другой. Что-то должно умереть, чтобы родилось новое. Это неизбежный и необходимый процесс обновления.",
    reversed: "Сопротивление переменам, страх отпустить прошлое, застревание в старом. Трансформация задерживается, но неизбежна.",
  },
  {
    number: 14,
    name: "Умеренность",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/eb5b42e6-25e7-4bf9-8d67-b6a605bbd17e.jpg",
    keywords: ["Баланс", "Гармония", "Терпение"],
    element: "Огонь",
    meaning: "Ангел переливает воду между двумя чашами — это образ идеального баланса и алхимического смешения. Умеренность призывает к терпению, гармонии, нахождению золотой середины. Сейчас важно не торопиться и действовать методично.",
    reversed: "Крайности, нетерпение, дисбаланс в жизни. Возможно, вы перегибаете палку в одном из аспектов жизни.",
  },
  {
    number: 15,
    name: "Дьявол",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/192232a3-2790-4604-8c15-ceac8b5ea7f1.jpg",
    keywords: ["Зависимость", "Иллюзия", "Тень"],
    element: "Земля",
    meaning: "Дьявол показывает людей, скованных цепями, — но цепи достаточно слабы, чтобы их снять. Это карта зависимостей, иллюзий и теневых аспектов личности. Она не осуждает, а указывает: вы сами держите себя в плену. Осознание — первый шаг к свободе.",
    reversed: "Освобождение от зависимостей, выход из токсичных отношений, принятие своей тени. Пробуждение.",
  },
  {
    number: 16,
    name: "Башня",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/79f168fc-e9ab-499f-969b-d7eb9bc1bb00.jpg",
    keywords: ["Разрушение", "Откровение", "Кризис"],
    element: "Огонь",
    meaning: "Башня рушится от удара молнии — это внезапное разрушение ложных структур. Кризис, который казался катастрофой, освобождает от того, что давно уже не служило истине. Разрушение — это расчистка пространства для чего-то более настоящего.",
    reversed: "Избегание неизбежного кризиса, затягивание с необходимыми переменами. Страх потерять ложную стабильность.",
  },
  {
    number: 17,
    name: "Звезда",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/fc4174d8-1a72-4d8e-850b-dbc80e04cf8f.jpg",
    keywords: ["Надежда", "Исцеление", "Вдохновение"],
    element: "Воздух",
    meaning: "После бури Башни — Звезда. Обнажённая женщина льёт воду под звёздным небом — это образ исцеления и возрождения надежды. Карта говорит: вы на правильном пути, верьте в себя и в силу добра. Свет внутри вас никогда не гаснет.",
    reversed: "Потеря надежды, уныние, неверие в себя. Напоминание, что звёзды всегда есть — даже за облаками.",
  },
  {
    number: 18,
    name: "Луна",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/a014f6a7-ae82-4f2f-b4ae-82cc83e34b3c.jpg",
    keywords: ["Иллюзия", "Подсознание", "Страх"],
    element: "Вода",
    meaning: "Луна освещает путь тускло — полная тайн и иллюзий. Это карта подсознания, тревог и страхов, которые живут в темноте. Но также — карта богатого внутреннего мира и интуиции. Доверяйте своим снам, но проверяйте, что реально, а что — иллюзия.",
    reversed: "Выход из состояния тревоги и тумана, прояснение ситуации. Страхи оказываются менее страшными, чем казались.",
  },
  {
    number: 19,
    name: "Солнце",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/eb5b42e6-25e7-4bf9-8d67-b6a605bbd17e.jpg",
    keywords: ["Радость", "Успех", "Витальность"],
    element: "Огонь",
    meaning: "Солнце — одна из самых благоприятных карт. Ребёнок на белом коне под сияющим солнцем — символ чистой радости, успеха и жизненной силы. Карта предвещает счастье, процветание и ясность. Всё складывается наилучшим образом.",
    reversed: "Временная тучка на небе: небольшие задержки успеха, излишний оптимизм или трудности с выражением радости.",
  },
  {
    number: 20,
    name: "Суд",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/192232a3-2790-4604-8c15-ceac8b5ea7f1.jpg",
    keywords: ["Призыв", "Обновление", "Прощение"],
    element: "Огонь",
    meaning: "Архангел трубит — и мёртвые восстают. Это карта пробуждения к новому призванию, переоценки ценностей и прощения себя и других. Вы слышите зов чего-то большего? Время откликнуться и начать новую главу жизни.",
    reversed: "Игнорирование призыва, самокритика, неспособность простить прошлое. Страх перемен мешает возрождению.",
  },
  {
    number: 21,
    name: "Мир",
    image: "https://cdn.poehali.dev/projects/fdfd5585-7023-4632-bbec-468d8466a131/files/79f168fc-e9ab-499f-969b-d7eb9bc1bb00.jpg",
    keywords: ["Завершение", "Интеграция", "Целостность"],
    element: "Земля",
    meaning: "Мир — финальная карта Старших Арканов. Танцующая фигура в лавровом венке — это символ завершения цикла, достижения целостности. Вы прошли весь путь и обрели мудрость. Карта обещает полное завершение дел и глубокое удовлетворение от пройденного пути.",
    reversed: "Незавершённость, откладывание финала, страх успеха. Один шаг остался — сделайте его.",
  },
]

export default function MajorArcana() {
  const [selected, setSelected] = useState<TarotCard | null>(null)

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4">
            <span className="text-purple-300 text-xs font-light tracking-widest uppercase">Старшие Арканы</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            22 карты <span className="font-medium italic text-purple-300">Великого Пути</span>
          </h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed">
            Нажмите на карту, чтобы узнать её значение, символику и трактовку в прямом и перевёрнутом положении
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {cards.map((card) => (
            <button
              key={card.number}
              onClick={() => setSelected(card)}
              className="group relative flex flex-col items-center cursor-pointer"
            >
              <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden border border-white/10 group-hover:border-purple-400/60 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(168,85,247,0.35)] group-hover:scale-105">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="text-white/50 text-[10px] font-light">{card.number === 0 ? "0" : card.number}</span>
                </div>
              </div>
              <span className="mt-2 text-white/80 text-xs text-center font-light group-hover:text-purple-300 transition-colors duration-200">
                {card.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-[#0d0018] border border-purple-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(168,85,247,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors text-2xl leading-none z-10"
            >
              ×
            </button>

            <div className="flex flex-col sm:flex-row gap-6 p-6">
              {/* Card Image */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-36 aspect-[2/3] rounded-xl overflow-hidden border border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Card Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-3 mb-4">
                  <div>
                    <span className="text-purple-400 text-xs font-light tracking-widest uppercase">
                      Аркан {selected.number === 0 ? "0" : selected.number} · {selected.element}
                    </span>
                    <h3 className="text-2xl font-light text-white mt-1">{selected.name}</h3>
                  </div>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-200 text-xs"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                {/* Meaning */}
                <div className="mb-4">
                  <h4 className="text-white/50 text-xs uppercase tracking-widest mb-2">Прямое положение</h4>
                  <p className="text-white/80 text-sm leading-relaxed">{selected.meaning}</p>
                </div>

                {/* Reversed */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-amber-400/70 text-xs uppercase tracking-widest mb-2">Перевёрнутое положение</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{selected.reversed}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
