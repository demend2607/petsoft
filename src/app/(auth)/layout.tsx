export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>AUTH{children}</div>;
}
