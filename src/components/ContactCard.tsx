type ContactCardProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
    description: string;
};

export default function ContactCard({
     icon, 
     label, 
     value, 
     description 
    }: ContactCardProps) {
        return (
            <div className="rounded-xl border border-slate-200 bg-white p-4 hover: shadow-sm transition">
                <div className="mb-6 text-3xl text-blue-500">{icon}</div>
                <div className="text-base font-mono text-slate-400 mb-2">{label}</div>
                <div className="text-xl font-semibold text-slate-900 mb-2">{value}</div>
                <div className="text-base text-slate-500 leading-relaxed">{description}</div>
            </div>
)}