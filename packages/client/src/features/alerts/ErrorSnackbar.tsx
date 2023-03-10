import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { selectorUserError } from '../../store/user/selectors';
import { deleteUserError } from '../../store/user/userSlice';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ErrorSnackbar() {
  const dispatch = useAppDispatch();
  const errorText = useAppSelector(selectorUserError);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={!!errorText}
        autoHideDuration={5000}
        onClose={() => dispatch(deleteUserError())}>
        <Alert severity="error">{errorText}</Alert>
      </Snackbar>
    </div>
  );
}
