import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { ChangeEvent, useEffect, useState } from "react";

type ModalProps = {
  HandleAddTodo: (title: string, description: string, id: string) => void
  ButtonName: string
  ModalTitle: string
  ModalDescription?: string
  TaskTitle: string
  TaskDescription: string
  ButtonCreate: string
};

export function Modal({HandleAddTodo, ButtonName, ModalTitle, ModalDescription, TaskTitle, TaskDescription, ButtonCreate}: ModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isDisabled, setIsDisabled] = useState(true)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    setTitle(value)
  }

  function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value

    setDescription(value)
  }

  function handleOnClick(){
    HandleAddTodo(title, description, crypto.randomUUID())
    setTitle("")
    setDescription("")
  }

  useEffect(() => {
    setIsDisabled(title === "" ? true  : false)
  }, [title])  
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{ButtonName}</Button>
      </DialogTrigger>
      <DialogContent className="bg-[#FFF7F1] border border-solid border-[#e8e4de] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{ModalTitle}</DialogTitle>
          <DialogDescription>{ModalDescription}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="taskTitle" className="text-center">
              {TaskTitle}
            </Label>
            <Input name="taskTitle" placeholder="Call mom saturday" className="col-span-3" onChange={handleInputChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="taskDescription" className="text-center">
              {TaskDescription}
            </Label>
            <Textarea name="taskDescription" placeholder="Call mom the saturday in the morning" className="col-span-3" onChange={handleTextAreaChange} />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" disabled={isDisabled} onClick={handleOnClick}>{ButtonCreate}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
