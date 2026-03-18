const events = [
  {
    year: "1929",
    title: "Рождение",
    text: "25 июля родился в селе Сростки Алтайского края. Простая крестьянская семья, Сибирь, Катунь — всё это навсегда войдёт в его прозу.",
  },
  {
    year: "1933",
    title: "Арест отца",
    text: "Отец расстрелян в годы репрессий. Шукшин рос без отца — этот опыт боли и несправедливости отразится в каждом его герое.",
  },
  {
    year: "1945–1948",
    title: "Рабочие годы",
    text: "После школы работал слесарем, грузчиком, такелажником. Страна, люди, труд — будущий писатель впитывал жизнь без фильтров.",
  },
  {
    year: "1954",
    title: "ВГИК",
    text: "Поступил на режиссёрский факультет ВГИКа в мастерскую Михаила Ромма. Деревенский парень в Москве — личный опыт «человека между двух миров».",
  },
  {
    year: "1958",
    title: "Первые публикации",
    text: "Рассказы появляются в журнале «Смена». Критики замечают необычный голос — резкий, народный, без советского лака.",
  },
  {
    year: "1963",
    title: "Дебют в кино",
    text: "Снимает первый фильм «Живёт такой парень». Шукшин — одновременно автор сценария, режиссёр и актёр. Венецианский фестиваль, приз.",
  },
  {
    year: "1967",
    title: "«Чудик» и «Срезал»",
    text: "Выходят рассказы, ставшие классикой. Появляется фирменный тип героя — «шукшинский чудик»: нескладный, честный, живой.",
  },
  {
    year: "1973",
    title: "«Калина красная»",
    text: "Главный фильм жизни. Шукшин сам сыграл Егора Прокудина. Картина собрала 62 миллиона зрителей — рекорд советского кино.",
  },
  {
    year: "1974",
    title: "Уход",
    text: "2 октября скончался на съёмках фильма «Они сражались за Родину». Ему было 45 лет. Страна прощалась с ним как с национальным героем.",
  },
];

export default function Timeline() {
  return (
    <div id="biography" className="bg-neutral-950 py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-3">Биография</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-16 max-w-2xl leading-tight">
          45 лет, которые изменили русскую литературу
        </h2>

        <div className="relative">
          {/* вертикальная линия */}
          <div className="absolute left-[11px] lg:left-1/2 top-0 bottom-0 w-px bg-neutral-700 lg:-translate-x-1/2" />

          <div className="flex flex-col gap-0">
            {events.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-8 lg:gap-0 pb-12 last:pb-0 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Контент */}
                  <div
                    className={`pl-10 lg:pl-0 flex-1 ${
                      isLeft ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"
                    }`}
                  >
                    <span className="text-xs uppercase tracking-widest text-neutral-500 block mb-1">
                      {event.year}
                    </span>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{event.text}</p>
                  </div>

                  {/* Точка */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-1 w-[23px] h-[23px] rounded-full border-2 border-neutral-500 bg-neutral-950 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Пустая половина для чётных */}
                  <div className="hidden lg:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
