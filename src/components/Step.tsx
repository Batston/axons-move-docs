export default function Step({
  n,
  title,
  children,
}: {
  n: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4 my-4">
      <div className="flex-none w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
        {n}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-slate-900 mb-1">{title}</div>
        <div className="text-sm text-slate-600">{children}</div>
      </div>
    </div>
  )
}