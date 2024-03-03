import { Fragment } from "react";
import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import TabSection from "./Components/TabSection/TabSection";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import PhotoZone from "./Components/PhotoZone/PhotoZone";
import MusicBlock from "./Components/MusicBlock/MusicBlock";
import LuckyWell from "./Components/LuckyWell/LuckyWell";
export default function App() {
  const [tab, setTab] = useState("main");
  return (
    <div className="App">
      <Fragment>
        <Header/>
        <TabSection active={tab} onChange={setTab}></TabSection>
        {tab === "main" && <Main />}
        {tab === "photo" && (
          <div>
            <MusicBlock />
            <section className="photoCards">
              <PhotoZone />
            </section>
          </div>
        )}
        {tab === "luck" && <LuckyWell/>}

        <Footer />
      </Fragment>
    </div>
  );
}
