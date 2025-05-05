import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  
  export function AlertDialogBox({locationName, locationAddress}) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="primary" className="font-medium text-[16px]">{locationName}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{locationName}</AlertDialogTitle>
            <AlertDialogDescription className="text-black">
              {locationAddress}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
            <AlertDialogAction className="bg-green text-black font-semibold hover:bg-blue hover:text-white">Ok, got it!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  