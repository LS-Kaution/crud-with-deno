import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
 
export default function StatusCheck() {
  return (
    <div className="flex items-center space-x-2">
      <Label>Status:</Label>
      <Switch />
    </div>
  )
}