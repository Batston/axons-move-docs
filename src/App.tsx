import { useState, type JSX } from "react";
import { sections } from "./data/sections";
import GioiThieu from "./sections/gioi-thieu";
import rmt01500 from "./sections/rmt01500";
import rmt01400 from "./sections/rmt01400";
import rmt06000 from "./sections/rmt06000";
import dpi02000 from "./sections/dpi02000";
import dpr01200 from "./sections/dpr01200";
import HoTroKyThuat from "./sections/ho-tro-ky-thuat";
import dpr07000 from "./sections/dpr07000";
import dpi07000 from "./sections/dpi07000";
import TopBar from "./components/TopBar";
import QuyTrinh from "./sections/quy-trinh";

const pageContent: Record<string, () => JSX.Element> = {
  "gioi-thieu": GioiThieu,
  "quy-trinh": QuyTrinh,
  "rmt01500": rmt01500,
  "rmt01400": rmt01400,
  "rmt06000": rmt06000,
  "dpi02000": dpi02000,
  "dpr01200": dpr01200,
  "dpi07000": dpi07000,
  "dpr07000": dpr07000,
  "ho-tro-ky-thuat": HoTroKyThuat,
}

function App() {
  const [activeId, setActiveId] = useState("gioi-thieu");
  const ActivePage = pageContent[activeId] || (() => <div>Chưa có nội dung cho mục này.</div>);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <aside className="w-90 h-screen bg-white border-r border-slate-200 flex flex-col flex-none">
        <div className="flex items-center justify-center">
          <img src="https://move-global.axonstech.com/assets/AxonsMoveIcon-C51yxfQz.svg" alt="" className="w-20 h-20" />
          <div className="sticky p-5 z-10 top-0 border-b border-slate-200">
            <div className="text-3xl font-bold text-slate-900">Axons Move</div>
            <div className="text-xl text-slate-400">Documentation</div>
          </div>        
        </div>
        <nav className="flex-1 min-h-0 p-3 overflow-y-auto">
          {sections.map(section => (
            <div key={section.id} className="mb-4">
              <div className="flex items-center gap-2 px-2 py-1 text-xl font-semibold text-slate-500 uppercase">               
                <span>{section.label}</span>               
              </div>
              {section.items.map(item => (
                  <button 
                    key={item.id}                 
                    onClick={() => setActiveId(item.id)}
                    className={`w-full text-left pl-8 pr-4 py-4 rounded-md text-lg block ${
                      activeId === item.id 
                      ? 'bg-blue-50 text-blue-800 font-medium' 
                      : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
            </div>
          ))}
        </nav>
        <footer className="border-t border-slate-200 text-slate-400 p-6">
          <p>© 2026 Logistics Team</p>
        </footer>
      </aside>

      <main className="flex-1 overflow-y-auto font-sans">
        <TopBar />
        <div className="max-w-6xl mx-auto px-10 py-10">
          <ActivePage />
        </div>
      </main>
    </div>
  );
}

export default App;