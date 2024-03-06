import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TypographyH1 } from "./components/ui/TypographyH1"

export default function App() {
  return (
    <>
      <header className="h-20 bg-[#11100a] p-6 flex justify-between items-center">
        <TypographyH1 textContent="Saturno's Todo" styles="text-white scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl" />
        <div className="flex justify-center items-center gap-6">
          <Button variant="outline">Add +</Button>
          <Input type="search" placeholder="Search task" name="search" id="search" className="text-white" />
          <Button variant="link" className="text-white">Login</Button>
        </div>
      </header>
    </>
  )
}