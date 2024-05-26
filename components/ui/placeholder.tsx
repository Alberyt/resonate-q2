import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

/**
 * 
 * @param children
 * @returns Pop up placeholder
 */
const Placeholder: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Feature is not implemented</DialogTitle>
          <DialogDescription>
            This action does not exist at this time.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Placeholder
