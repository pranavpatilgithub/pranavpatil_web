import Cursor from "./Cursor";
import ScrollProgress from "./ScrollProgress";
import Header from "./Header";
import Footer from "./Footer";
import RevealProvider from "./RevealProvider";

/** Page chrome shared by the home page and every sub-page. */
export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <RevealProvider>
      <ScrollProgress />
      <Cursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </RevealProvider>
  );
}
