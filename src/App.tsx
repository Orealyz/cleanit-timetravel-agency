import { useMemo, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import ChatWidget from "./components/ChatWidget";
import { destinations } from "./data/destinations";

type Route =
  | { name: "home" }
  | { name: "destination"; slug: string };

export default function App() {
  const [route, setRoute] = useState<Route>({ name: "home" });

  const current = useMemo(() => {
    if (route.name !== "destination") return null;
    return destinations.find((d) => d.slug === route.slug) ?? null;
  }, [route]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onNavigate={(to) => {
          if (to === "home") setRoute({ name: "home" });
          if (to === "destinations") {
            setRoute({ name: "home" });
            setTimeout(() => {
              document
                .getElementById("destinations")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 50);
          }
          if (to === "quiz") {
            setRoute({ name: "home" });
            setTimeout(() => {
              document
                .getElementById("quiz")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 50);
          }
        }}
      />

      <main className="flex-1">
        {route.name === "home" && (
          <Home onOpenDestination={(slug) => setRoute({ name: "destination", slug })} />
        )}
        {route.name === "destination" && current && (
          <Destination destination={current} onBack={() => setRoute({ name: "home" })} />
        )}
      </main>

      <Footer />

      <ChatWidget />
    </div>
  );
}
