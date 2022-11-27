interface InfoItemProps {
    header: string | undefined;
    content: string | undefined;
}

export default function InfoItem({header, content}: InfoItemProps) {
    return (
        <div className="flex flex-col max-w-xs pl-5">
            <span className="text-slate-600 text-transform: uppercase tracking-wide text-left pb-2 md:text-center sm:pb-0">{header}</span>
            <p className="text-black text-center text-2xl md:text-lg md:font-bold">{content}</p>
        </div>
    )
}