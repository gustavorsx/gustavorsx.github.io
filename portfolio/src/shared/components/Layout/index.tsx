import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <body>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
}

export default Layout;
