export interface ButtonProps {
  label: string;
  href: string;
  backgroundColor?: string;
  color?: string;
  icon: React.ReactNode;
}

export function Button({ label, href, backgroundColor, color, icon }: ButtonProps) {
  return (
    <a href={href}>
      <button
        className="flex items-center gap-4 w-80 h-12 px-4 rounded-full shadow-lg cursor-pointer transition-all duration-250 hover:scale-105 hover:shadow-lg active:scale-95"
        style={{ backgroundColor: backgroundColor || 'black', color }}
      >
        <span className="text-3xl">{icon}</span>
        <span className="mx-auto font-bold">{label}</span>
      </button>
    </a>
  );
}
