import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

export default function App() {
  return (
    <>
      <Header />
      <main className="h-screen p-5 grid grid-cols-3 grid-rows-[400px_minmax(400px,_1fr)_100px] justify-items-center gap-4">
        <CardContainer />
      </main>
    </>
  )
}