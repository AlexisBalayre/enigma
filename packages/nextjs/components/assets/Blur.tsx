export function Blur({ top = 40, left = 20 }: { top: number; left: number }) {
  return (
    <div
      className={`absolute overflow-hidden -z-1 top-${top} left-${left} w-96 h-96 bg-blue-purple-gradient rounded-full filter blur-[200px]`}
    ></div>
  );
}
