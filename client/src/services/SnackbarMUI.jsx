import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// Severity = "success" / "error" / "warning" / "info"
// Message = "Your message here"
export default function CustomizedSnackbars({ openSnackbar, setOpenSnackbar }) {
  //   const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar({ active: false, message: "", severity: "" });
  };

  return (
    <div>
      <Snackbar
        open={openSnackbar.active}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={openSnackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {openSnackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
