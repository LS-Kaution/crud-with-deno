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

type ModalProps = {
  ButtonName: string;
  ModalTitle: string;
  ModalDescription?: string;
  TaskTitle: string
  TaskDescription: string
  ButtonCreate: string
};

export function Modal({ButtonName, ModalTitle, ModalDescription, TaskTitle, TaskDescription, ButtonCreate}: ModalProps) {
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
            <Label htmlFor="task-title" className="text-center">
              {TaskTitle}
            </Label>
            <Input id="task-title" placeholder="Call mom saturday" required={true} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-description" className="text-center">
              {TaskDescription}
            </Label>
            <Textarea id="task-description" placeholder="Call mom the saturday in the morning" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">{ButtonCreate}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
