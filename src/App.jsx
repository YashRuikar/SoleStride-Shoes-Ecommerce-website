import { FlexContent, Footer, Hero, Navbar, Sales, Stories } from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists={true} />{/* Issue is here */}
        <FlexContent endpoint={highlight} ifExists={true} />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </div>
  );
};

export default App;
