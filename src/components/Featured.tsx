const works = [
  {
    title: "«Калина красная»",
    year: "1973",
    problem: "Человек и общество",
    description:
      "История Егора Прокудина — бывшего зека, пытающегося начать жизнь заново. Шукшин ставит вопрос: может ли система дать человеку второй шанс? Актуально как никогда.",
  },
  {
    title: "«Чудик»",
    year: "1967",
    problem: "Маленький человек",
    description:
      'Рассказ о добром, наивном человеке, которого мир воспринимает как "странного". Кто на самом деле чудак — тот, кто верит в людей, или те, кто разучился?',
  },
  {
    title: "«Срезал»",
    year: "1970",
    problem: "Зависть и самооценка",
    description:
      "Глеб Капустин унижает образованных земляков ради самоутверждения. Портрет зависти и агрессии к чужому успеху — явление, живущее и сегодня.",
  },
];

export default function Featured() {
  return (
    <div id="works" className="bg-white py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
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
              <p className="text-neutral-600 leading-relaxed text-sm lg:text-base">{work.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col lg:flex-row gap-12 items-center border-t border-neutral-200 pt-16">
          <div className="flex-1">
            <p className="uppercase text-xs tracking-widest text-neutral-500 mb-3">Почему Шукшин актуален</p>
            <h3 className="text-2xl lg:text-4xl font-bold text-neutral-900 leading-tight mb-6">
              Он писал о вечном — разрыве между городом и деревней, честью и приспособленчеством, мечтой и реальностью.
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              В эпоху соцсетей и потери идентичности его «чудики» — люди, не готовые притворяться — звучат как манифест подлинности. Шукшин не осуждал и не идеализировал — он просто смотрел правде в глаза.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-6">
            {[
              { num: "125+", label: "рассказов и повестей" },
              { num: "6", label: "режиссёрских работ" },
              { num: "1974", label: "год гибели на съёмках" },
              { num: "№1", label: "в списках русской прозы XX века" },
            ].map((stat, i) => (
              <div key={i} className="border border-neutral-200 p-6">
                <p className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-1">{stat.num}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
