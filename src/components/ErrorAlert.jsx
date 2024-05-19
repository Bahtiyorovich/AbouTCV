import React from "react";
import { Alert, Button } from "@material-tailwind/react";
 
export function ErrorTost() {
  const [open, setOpen] = React.useState(true);
 
  return (
    <>
      {!open && (
        <Button className="absolute" onClick={() => setOpen(true)}>
          Show Alert
        </Button>
      )}
      <Alert
        open={open}
        onClose={() => setOpen(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        className="rounded-none border-l-4 border-[#c9552e] bg-[#c9452e]/10 font-medium text-[#f3f7f4]"
      
      >
        You need to fill in the main sections to create a resume, please try again
      </Alert>
    </>
  );
}