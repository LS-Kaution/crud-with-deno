import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./textarea";
import { ChangeEvent, useEffect, useState } from "react";

type ModalProps = {
  ButtonName: string;
  ModalTitle: string;
  ModalDescription?: string;
  TaskTitle: string
  TaskDescription: string
  ButtonCreate: string
};

export function Modal({ButtonName, ModalTitle, ModalDescription, TaskTitle, TaskDescription, ButtonCreate}: ModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    setTitle(value)
  }

  function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value

    setDescription(value)
  }

  useEffect(() => {
    console.log(title, description)
  }, [title, description])
  
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
            <Input name="taskTitle" placeholder="Call mom saturday" required={true} className="col-span-3" onChange={handleInputChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="taskDescription" className="text-center">
              {TaskDescription}
            </Label>
            <Textarea name="taskDescription" placeholder="Call mom the saturday in the morning" className="col-span-3" onChange={handleTextAreaChange} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">{ButtonCreate}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
