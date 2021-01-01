import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  searchForm: {
    width: "60%"
  },
  textField: {
    margin: theme.spacing(1),
    width: "60%",
    border: "solid red"
  },
  inputbox: {
    width: "80%"
  }
}));

export default function SearchModal() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    history.go(-1);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <FormControl className={classes.textField}>
            <form>
              <InputLabel htmlFor="standard-adornment-password">
                Search
              </InputLabel>
              <Input
                className={classes.inputbox}
                id="standard-adornment-password"
                type="text"
                onChange={null}
              />
              <IconButton
                aria-label="search term"
                onClick={null}
                onMouseDown={null}
              >
                <SearchIcon color="primary" />
              </IconButton>
            </form>
          </FormControl>
        </Fade>
      </Modal>
    </div>
  );
}
