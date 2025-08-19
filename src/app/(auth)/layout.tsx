import Logo from "@/widgets/header/Logo";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center  min-h-screen ">
      <Logo />
      {children}
    </div>
  );
}
