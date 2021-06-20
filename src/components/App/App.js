import "./App.css";
import { Layout } from "../Layout/Layout";
import { Header } from "../Header/Header";
import { Start } from "../Start/Start";
import { FeaturedSection } from "../FeaturedSection/FeaturedSection";
function App() {
  return (
    <Layout>
      <Header />
      <Start />
      <FeaturedSection />
    </Layout>
  );
}

export default App;
