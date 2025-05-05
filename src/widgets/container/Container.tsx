export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col max-w-[1050px] min-h-screen mx-auto bg-white/[2%]">{children}</div>;
}
