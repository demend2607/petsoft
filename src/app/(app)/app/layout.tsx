import Container from "@/widgets/container/Container";
import Footer from "@/widgets/footer/Footer";
import BackgroundPattern from "@/widgets/header/BackgroundPatternt";
import Header from "@/widgets/header/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BackgroundPattern />
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
}
