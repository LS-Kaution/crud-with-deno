import { Modal } from "./Modal";
import { TypographyH1 } from "./ui/TypographyH1";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {
  HandleAddTodo: (title: string, description: string, id: string) => void
}

export default function Header({HandleAddTodo}: Props) {
  return (
    <header className="h-20 bg-[#11100a] p-6 flex justify-between items-center">
      <TypographyH1
        textContent="Saturno's Todo"
        styles="text-white scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl"
      />
      <div className="flex justify-center items-center gap-6">
        <Modal
          HandleAddTodo={HandleAddTodo}
          ButtonName="Add +"
          ModalTitle="Create task"
          ModalDescription="Add the title of your task (obligatory) and the description (optional). If you made a mistake, don't worry, you can edit it once it has been created."
          TaskTitle="Task title"
          TaskDescription="Task Description"
          ButtonCreate="Create task"
        />
        <Input
          type="search"
          placeholder="Search task"
          name="search"
          id="search"
          className="text-white"
        />
        <Button variant="link" className="text-white">
          Login
        </Button>
      </div>
    </header>
  )
}
