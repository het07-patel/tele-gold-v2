import Footer from "./footer";
import { Header, Lenis, StoreProvider } from "./dynamiComponents";

const Layout = ({ children }) => {
  return (
    <Lenis>
      <StoreProvider>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </StoreProvider>
    </Lenis>
  );
};

export default Layout;
