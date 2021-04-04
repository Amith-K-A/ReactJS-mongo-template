import React from "react";
import TextBoxComponent from "./components/text-box";
import Label from "./components/label";

interface Props {
  open: any;
  handleClose: (text: string) => void;
  component: string;
}

const Model: React.FC<Props> = ({ open, handleClose, component }) => {
  return (
    <div>
      {component === "TextBox" && <TextBoxComponent  open={open} handleClose={handleClose} />}
      {component === "Label" && <Label  open={open} handleClose={handleClose} />}
    </div>
  );
};

export default Model;
