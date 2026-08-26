type Box = { id: string; col: 'a' | 'b' | 'c'; y: number; label: string; sub?: string; color?: string }

const COL_X = { a: 20, b: 300, c: 650 }
const COL_W = { a: 220, b: 220, c: 200 }

const boxes: Box[] = [
  // Cột A — SMARTSOFT
  { id: 'so', col: 'a', y: 120, label: 'SO (1950)' },
  { id: 'credit', col: 'a', y: 175, label: 'CREDIT CONTROL' },
  { id: 'shipment', col: 'a', y: 230, label: 'CREATE SHIPMENT', sub: '(DCM10000)' },
  { id: 'picking', col: 'a', y: 310, label: 'PICKING', sub: '(WINFOOD/SMS/SAP)', color: '#d97706' },
  { id: 'invoice', col: 'a', y: 390, label: 'INVOICE' },
  { id: 'transport', col: 'a', y: 460, label: 'TRANSPORT', sub: '(DCM13000)' },

  // Cột B — AXONS MOVE
  { id: 'order', col: 'b', y: 120, label: 'GET ORDER FROM SMARTSOFT' },
  { id: 'route', col: 'b', y: 175, label: 'ROUTE OPTIMIZE' },
  { id: 'sendplan', col: 'b', y: 230, label: 'SEND PLAN TO SMARTSOFT' },
  { id: 'checktruck', col: 'b', y: 285, label: 'Check Truck (RMA03000)', color: '#dc2626' },
  { id: 'approveplan', col: 'b', y: 355, label: 'Approve Plan (RMT01400)', color: '#dc2626' },
  { id: 'changetruck', col: 'b', y: 420, label: 'Change Truck / Cancel' },
  { id: 'getts', col: 'b', y: 460, label: 'GET TS, INVOICE NUMBER' },

  // Cột C — APP DRIVER
  { id: 'inspectbefore', col: 'c', y: 230, label: 'Truck Inspect (Before Load)', sub: 'AMMT02000', color: '#dc2626' },
  { id: 'inspectafter', col: 'c', y: 285, label: 'Truck Inspect (After Load)', sub: 'AMMT02000', color: '#dc2626' },
  { id: 'receivepod', col: 'c', y: 355, label: 'RECEIVE POD JOB' },
  { id: 'completepod', col: 'c', y: 420, label: 'COMPLETE POD' },
]

const strokeColor: Record<string, string> = {
  blue: '#2563eb',
  green: '#16a34a',
  red: '#dc2626',
  gray: '#94a3b8',
}

type Arrow = { id: string; d: string; color: keyof typeof strokeColor; label: string; lx: number; ly: number; dashed?: boolean }

const arrows: Arrow[] = [
  { id: 'a1', d: 'M130,154 L130,175', color: 'blue', label: '(1)', lx: 138, ly: 158 },
  { id: 'a2', d: 'M240,192 L270,192 L270,137 L300,137', color: 'blue', label: '(2)', lx: 244, ly: 175 },
  { id: 'a3', d: 'M410,154 L410,175', color: 'blue', label: '(3)', lx: 418, ly: 158 },
  { id: 'a4', d: 'M410,209 L410,230', color: 'blue', label: '(4)', lx: 418, ly: 213 },
  { id: 'a5', d: 'M300,247 L240,247', color: 'green', label: '(5)', lx: 260, ly: 235 },
  { id: 'a5a', d: 'M520,247 L650,247', color: 'green', label: '(5A)', lx: 565, ly: 235 },
  { id: 'a6', d: 'M130,264 L130,310', color: 'blue', label: '(6)', lx: 138, ly: 280 },
  { id: 'a6a', d: 'M750,285 L750,264', color: 'red', label: '(6A)', lx: 758, ly: 270 },
  { id: 'a7a', d: 'M650,302 L520,302', color: 'red', label: '(7A)', lx: 565, ly: 290 },
  { id: 'a7a1', d: 'M300,437 L270,437 L270,192 L300,192', color: 'blue', label: '(7A.1)', lx: 200, ly: 320 },
  { id: 'a8', d: 'M130,344 L130,390', color: 'blue', label: '(8)', lx: 138, ly: 362 },
  { id: 'a8a', d: 'M410,319 L410,355', color: 'red', label: '(8A)', lx: 418, ly: 333 },
  { id: 'a9', d: 'M130,424 L130,460', color: 'blue', label: '(9)', lx: 138, ly: 438 },
  { id: 'a9a', d: 'M520,372 L650,372', color: 'red', label: '(9A)', lx: 565, ly: 360 },
  { id: 'a10', d: 'M240,477 L300,477', color: 'blue', label: '(10)', lx: 255, ly: 465 },
  { id: 'a10a', d: 'M750,389 L750,420', color: 'blue', label: '(10A)', lx: 758, ly: 400 },
  {
    id: 'interface',
    d: 'M750,454 L750,477 L520,477',
    color: 'gray',
    label: 'Interface Invoice/Transport (TS) No',
    lx: 560,
    ly: 483,
    dashed: true,
  },
]

const legend = [
  { color: 'blue', text: 'Luồng xử lý nội bộ (Smartsoft ↔ Axons Move)' },
  { color: 'green', text: 'Bàn giao kế hoạch chạy xe' },
  { color: 'red', text: 'Kiểm tra & duyệt xe (App Driver)' },
  { color: 'gray', text: 'Giao diện đối chiếu dữ liệu (Interface)' },
]

export default function QuyTrinh() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Quy trình vận hành (Working System)</h2>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <div className="relative bg-white" style={{ width: 900, height: 520 }}>
          <div className="absolute inset-x-0 top-0 h-11 bg-teal-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm tracking-wide">WORKING SYSTEM</span>
          </div>

          <div className="absolute bg-sky-200 flex items-center justify-center font-bold text-slate-800 text-xs" style={{ left: 20, top: 65, width: 220, height: 28 }}>
            SMARTSOFT
          </div>
          <div className="absolute bg-sky-200 flex items-center justify-center font-bold text-slate-800 text-xs" style={{ left: 300, top: 65, width: 550, height: 28 }}>
            AXONS MOVE
          </div>
          <div className="absolute font-bold text-slate-900 text-xs text-center" style={{ left: 650, top: 200, width: 200 }}>
            APP DRIVER
          </div>

          {boxes.map(b => (
            <div
              key={b.id}
              className="absolute flex flex-col items-center justify-center text-center bg-white border border-slate-300 rounded shadow-sm px-2"
              style={{ left: COL_X[b.col], top: b.y, width: COL_W[b.col], height: b.sub ? 42 : 34 }}
            >
              <span className="text-[10.5px] font-semibold leading-tight" style={{ color: b.color ?? '#1e293b' }}>
                {b.label}
              </span>
              {b.sub && (
                <span className="text-[9.5px] font-mono" style={{ color: b.color ?? '#94a3b8' }}>
                  {b.sub}
                </span>
              )}
            </div>
          ))}

          <svg className="absolute inset-0 pointer-events-none" width={900} height={520} viewBox="0 0 900 520">
            <defs>
              {Object.entries(strokeColor).map(([name, color]) => (
                <marker key={name} id={`arrow-${name}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill={color} />
                </marker>
              ))}
            </defs>
            {arrows.map(a => (
              <path
                key={a.id}
                d={a.d}
                fill="none"
                stroke={strokeColor[a.color]}
                strokeWidth={1.5}
                strokeDasharray={a.dashed ? '6 4' : undefined}
                markerEnd={`url(#arrow-${a.color})`}
              />
            ))}
          </svg>

          {arrows.map(a => (
            <div
              key={a.id + '-label'}
              className="absolute text-[9.5px] font-bold whitespace-nowrap"
              style={{ left: a.lx, top: a.ly, color: strokeColor[a.color] }}
            >
              {a.label}
            </div>
          ))}
        </div>
      </div>

      {/* Chú thích màu */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-xs text-slate-500">
        {legend.map(l => (
          <div key={l.color} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full flex-none" style={{ background: strokeColor[l.color] }} />
            {l.text}
          </div>
        ))}
      </div>
    </div>
  )
}