import NavBar from "./components/NavBar";
import PageContent from "./components/PageContent";

function App() {
  return (
    <div className="w-full h-dvh">
      {/* <!-- Navigation--> */}
      <NavBar />
      {/* <!-- Page Content--> */}
      <PageContent />
    </div>
  );
}

export default App;
