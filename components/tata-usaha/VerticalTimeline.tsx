type Item = {
  no: number
  color: string // bg-teal-400, bg-yellow-400, etc
}

const ITEMS: Item[] = [
  { no: 1, color: "bg-teal-400" },
  { no: 2, color: "bg-yellow-400" },
  { no: 3, color: "bg-orange-400" },
]

export default function VerticalTimeline() {
  return (
    <div className="relative flex flex-col items-center gap-32 py-10">

      {/* VERTICAL LINE */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-300" />

      {/* DOTS */}
      {ITEMS.map((item) => (
        <div
          key={item.no}
          className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold text-white shadow-md ${item.color}`}
        >
          {item.no}
        </div>
      ))}
    </div>
  )
}
