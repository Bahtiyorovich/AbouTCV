import React from "react";
import {
  Drawer
} from "@material-tailwind/react";
import { useResume } from "../context/resumeContext";
import ResumePreview from "./ResumePreview";
 
export function DrawerDefault() {
  const { open, closeDrawer} = useResume();

  return (
    <React.Fragment>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <ResumePreview/>
      </Drawer>
    </React.Fragment>
  );
}