import Container from "@/widgets/container/Container";
import BackgroundPattern from "@/widgets/container/BackgroundPattern";
import Footer from "@/widgets/footer/Footer";
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
