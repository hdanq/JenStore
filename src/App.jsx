import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import NavBar from "./layout/header/NavBar";
import SectionAboutUs from "./layout/sections/SectionAboutUs";
import SectionGallery from "./layout/sections/SectionGallery";
import SectionGallerySub from "./layout/sections/SectionGallerySub";
import SectionNews from "./layout/sections/SectionNews";
import SectionProductOutstanding from "./layout/sections/SectionProductOutstanding";
import SectionProducts from "./layout/sections/SectionProducts";
import SectionTimeHeader from "./layout/sections/SectionsTimeHeader";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <SectionGallery />
      <SectionProducts />
      <SectionProductOutstanding />
      <SectionTimeHeader />
      <SectionNews />
      <SectionAboutUs />
      <SectionGallerySub />
      <Footer />
    </>
  );
}

export default App;
