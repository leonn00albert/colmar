import "./App.css";
import { Layout } from "../Layout/Layout";
import { Header } from "../Header/Header";
import { Start } from "../Start/Start";
import { FeaturedSection } from "../FeaturedSection/FeaturedSection";
import { LearningSection } from "../LearningSection/LearningSection";
import { ThesisSection } from "../ThesisSection/ThesisSection";
import { Footer } from '../Footer/Footer';
function App() {
  return (
    <Layout>
      <Header />
      <Start />
      <FeaturedSection />
      <LearningSection />
      <ThesisSection />
      <Footer />
    </Layout>
  );
}

export default App;
