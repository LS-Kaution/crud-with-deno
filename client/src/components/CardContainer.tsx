import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import TypographyP from "./ui/TypographyP";
import StatusCheck from "./StatusCheck";
import EditIcon from "./ui/icons/EditIcon";
import { ChangeEvent, useState } from "react";
import SaveIcon from "./ui/icons/SaveIcon";

type Props = {
  title: string;
  description: string;
  id: string
  handleDeleteTodo: () => void
};

export default function CardContainer({ title, description, handleDeleteTodo }: Props) {
  const [buttonTitle, SetButtonTitle] = useState(false)
  const [updateTitle, SetUpdateTitle] = useState(title)
  const [buttonDescription, SetButtonDescription] = useState(false)
  const [updateDescription, SetUpdateDescription] = useState(description)
  
  function handleOnClickTitle(){
    SetButtonTitle(!buttonTitle)
  }

  function handleOnChangeTitle(event: ChangeEvent<HTMLInputElement>){
    const value = event.target.value

    SetUpdateTitle(value)
  }

  function handleOnClickDescription(){
    SetButtonDescription(!buttonDescription)
  }

  function handleOnChangeDescription(event: ChangeEvent<HTMLTextAreaElement>){
    const value = event.target.value

    SetUpdateDescription(value)
  }

  return (
    <Card className="w-[350px] p-2">
      <CardHeader>
        <TypographyP
          textContent="Date"
          style="leading-7 [&:not(:first-child)]:mt-6"
        />
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label>Title</Label>
            <div className={`flex justify-between items-center gap-${buttonTitle === false ? '0' : '2'}`}>
              { buttonTitle === false ?
                <TypographyP
                textContent={updateTitle}
                style="leading-7 [&:not(:first-child)]:mt-6"
                />
                :
                <Input value={updateTitle} onChange={handleOnChangeTitle} />
              }
              <Button variant="ghost" className="cursor-pointer p-1" onClick={handleOnClickTitle}> 
                { buttonTitle === false ?
                  <EditIcon />
                  :
                  <SaveIcon />
                }
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Description</Label>
            <div className={`flex justify-between items-start gap-${buttonDescription === false ? '0' : '2'}`}>
              { buttonDescription === false ?
                <TypographyP
                textContent={updateDescription}
                style="h-36 leading-7 [&:not(:first-child)]:mt-6"
                />
                :
                <Textarea value={updateDescription} className="h-36" onChange={handleOnChangeDescription} />
              }
              <Button variant="ghost" className="cursor-pointer p-1" onClick={handleOnClickDescription}>
                { buttonDescription === false ?
                  <EditIcon />
                  :
                  <SaveIcon />
                }
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <StatusCheck />
        <Button variant="destructive" onClick={handleDeleteTodo}>Delete task</Button>
      </CardFooter>
    </Card>
  );
}
