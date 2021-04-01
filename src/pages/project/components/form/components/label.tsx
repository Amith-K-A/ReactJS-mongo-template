import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface Props {
  open: any;
  handleClose: (text: string) => void;
}

const Label: React.FC<Props> = ({ open, handleClose }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <Dialog disableBackdropClick  maxWidth={"sm"} fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Project Label</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Label for the Project.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Label"
            type="email"
            fullWidth
            onChange={(event) => setText(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setText("");
              handleClose(text);
            }}
            color="primary"
          >
            Add
          </Button>
          <Button onClick={() => handleClose("")} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Label;
