
export default function randomColor(): string {
  const colorPalette: string[] = [
    "bg-red-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-cyan-400",
    "bg-pink-400",
    "bg-slate-400",
  ];

  return colorPalette[Math.floor(Math.random() * colorPalette.length)];
}
