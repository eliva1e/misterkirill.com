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
        className="flex items-center gap-4 w-80 px-2 py-2 rounded-full shadow-lg cursor-pointer transition-all duration-250 hover:scale-105 hover:shadow-lg active:scale-95"
        style={{ backgroundColor: backgroundColor || 'black', color }}
      >
        <span className="text-2xl">{icon}</span>
        <span className="mx-auto">{label}</span>
      </button>
    </a>
  );
}
