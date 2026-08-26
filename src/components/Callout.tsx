type CalloutType = "info" | "warning" | "error" | "success";

export default function Callout({
    type,
    title,
    children,
}: {
    type: CalloutType;
    title: string;
    children: React.ReactNode;
}) {
    const style = {
        info: { wrap: "bg-blue-50 border-blue-400", head: "text-blue-800", icon: "i"},
        warning: { wrap: "bg-amber-50 border-amber-400", head: "text-amber-800", icon: '⚠' },
        success: { wrap: "bg-green-50 border-green-400", head: "text-green-800", icon: '✔' },
        error: { wrap: "bg-red-50 border-red-400", head: "text-red-800", icon: '✖' },
    }[type];

    return (
        <div className={`border-l-4 rounded-r-lg p-4 my-4 ${style.wrap}`}>
            <div className="flex items-center gap-2 font-semibold text-sm mb-1 ${style.head}">
                <span>{style.icon}</span>
                {title}
            </div>
            <div className="text-sm text-slate-600">
                {children}
            </div>
        </div>
    );
}