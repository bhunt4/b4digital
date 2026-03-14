export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="text-xl font-bold tracking-tight">
      <span className={inverted ? "text-background" : "text-foreground"}>B4</span>
      <span className="text-primary">Digital</span>
    </span>
  );
}
