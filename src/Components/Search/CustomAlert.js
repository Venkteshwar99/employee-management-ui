import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
const CustomAlert = ({ open, message, onClose }) => {
 return (
<Dialog open={open} onClose={onClose}>
<DialogTitle>Alert</DialogTitle>
<DialogContent>
<DialogContentText>{message}</DialogContentText>
</DialogContent>
<DialogActions>
<Button onClick={onClose} autoFocus>
         Close
</Button>
</DialogActions>
</Dialog>
 );
};
export default CustomAlert;