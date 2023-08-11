import { Button, DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';

export default function DialogInfo({ btn, children, sx }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const OpenButton = btn;

  return (
    <>
      {React.cloneElement(btn, {
        onClick: handleClickOpen,
      })}
      <Dialog onClose={handleClose} open={open} sx={sx}>
        <DialogContent
          sx={{
            padding: '1em',
            background: 'white',
            border: 'solid 4px #701C1C',
            borderRadius: '10px',
            color: 'black',
          }}
        >
          {children}
          <Button
            onClick={handleClose}
            variant="outlined"
            autoFocus
            sx={{
              color: 'blue',
              borderColor: 'blue',
              '&:hover': {
                color: 'darkBlue',
                borderColor: 'darkBlue',
                backgroundColor: 'lightBlue',
              },
            }}
          >
            SEE YA LATER!
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
