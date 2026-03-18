const works = [
  {
    title: "«Калина красная»",
    year: "1973",
    problem: "Человек и общество",
    description:
      "История Егора Прокудина — бывшего зека, пытающегося начать жизнь заново. Шукшин ставит вопрос: может ли система дать человеку второй шанс? Актуально как никогда.",
    relevance: "Тема реабилитации и социального отвержения не теряет остроты — сотни тысяч людей ежегодно выходят на свободу и сталкиваются с той же стеной непринятия.",
  },
  {
    title: "«Чудик»",
    year: "1967",
    problem: "Маленький человек",
    description:
      'Рассказ о добром, наивном человеке, которого мир воспринимает как "странного". Кто на самом деле чудак — тот, кто верит в людей, или те, кто разучился?',
    relevance: "В эпоху токсичного успеха и самопиара искренний, «неудобный» человек выглядит чудаком. Но именно такие люди сохраняют человечность.",
  },
  {
    title: "«Срезал»",
    year: "1970",
    problem: "Зависть и самооценка",
    description:
      "Глеб Капустин унижает образованных земляков ради самоутверждения. Портрет зависти и агрессии к чужому успеху — явление, живущее и сегодня.",
    relevance: "Комментарии в интернете, хейт в соцсетях — Капустин стал архетипом тролля задолго до появления сети. Шукшин описал это явление с хирургической точностью.",
  },
];

const relevancePoints = [
  {
    icon: "🏙️",
    title: "Город vs. деревня",
    text: "Конфликт между «асфальтом» и «землёй» только усилился. Урбанизация оторвала миллионы людей от корней — и они ищут идентичность так же, как герои Шукшина.",
  },
  {
    icon: "🎭",
    title: "Маска и лицо",
    text: "Соцсети превратили жизнь в перформанс. Шукшин писал о людях, которые не умеют притворяться — и это делает их трагически уязвимыми в современном мире.",
  },
  {
    icon: "⚡",
    title: "Бунт маленького человека",
    text: "Его герои не смиряются — они взрываются, чудят, протестуют. Этот импульс сопротивления системе понятен любому поколению.",
  },
  {
    icon: "❤️",
    title: "Поиск настоящего",
    text: "В мире симуляций и брендов читатель тянется к прозе, где всё — настоящее: боль, радость, стыд, любовь. Именно это даёт Шукшин.",
  },
  {
    icon: "🌾",
    title: "Экологический взгляд",
    text: "Утрата связи с природой и землёй — боль, которую Шукшин описывал в 60-х, стала глобальной темой XXI века.",
  },
  {
    icon: "🔥",
    title: "Честность без прикрас",
    text: "Он не идеализировал деревню и не демонизировал город. Эта честность — редкость в литературе — делает его тексты живыми до сих пор.",
  },
];

export default function Featured() {
  return (
    <div id="works" className="bg-white py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Произведения */}
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-3">Ключевые произведения</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 max-w-2xl leading-tight">
          Истории, которые не устарели
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-neutral-200">
          {works.map((work, i) => (
            <div
              key={i}
              className="py-10 lg:py-12 pr-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-neutral-200 last:border-r-0 last:border-b-0"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs uppercase tracking-widest text-neutral-400">{work.year}</span>
                <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 uppercase tracking-wide">
                  {work.problem}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-4 leading-tight">
                {work.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm lg:text-base mb-5">{work.description}</p>
              <div className="border-t border-neutral-100 pt-5">
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Сегодня</p>
                <p className="text-sm text-neutral-500 leading-relaxed italic">{work.relevance}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Актуальность — большой блок */}
        <div className="mt-24 border-t border-neutral-200 pt-16">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-3">Почему это важно сейчас</p>
          <h3 className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-4 max-w-3xl">
            Шукшин писал в XX веке — но попал точно в XXI
          </h3>
          <p className="text-neutral-500 max-w-2xl leading-relaxed mb-16">
            Его темы не просто не устарели — они обострились. Разрыв между поколениями, потеря корней, агрессия в интернете, поиск подлинности — всё это Шукшин описал за полвека до того, как это стало мировой повесткой.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
            {relevancePoints.map((point, i) => (
              <div key={i} className="bg-white p-8">
                <span className="text-3xl mb-4 block">{point.icon}</span>
                <h4 className="font-bold text-neutral-900 mb-2 text-lg">{point.title}</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Цитата-разделитель */}
        <div className="mt-24 bg-neutral-900 p-10 lg:p-16 text-center">
          <p className="text-white text-xl lg:text-3xl leading-relaxed mb-6 italic">
            «Я хочу, чтобы мои герои чувствовали остро — и читатели вместе с ними чувствовали»
          </p>
          <p className="text-neutral-400 text-sm uppercase tracking-widest">— Василий Шукшин</p>
        </div>

        {/* Статистика */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
          {[
            { num: "125+", label: "рассказов и повестей" },
            { num: "6", label: "режиссёрских работ" },
            { num: "45 лет", label: "прожил — и успел всё" },
            { num: "№1", label: "в списках русской прозы XX века" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8">
              <p className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-1">{stat.num}</p>
              <p className="text-xs text-neutral-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
