import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  mobile: {
    margin: theme.spacing(1),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyItems: "space-between"
  },
  textField: {
    margin: theme.spacing(1),
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyItems: "space-between"
  },
  inputbox: {
    width: "90%",
    display: "inline",
    margin: 0
  },
  icon: {
    display: "inline",
    padding: 0,
    margin: 0,
    marginTop: 15,
    marginLeft: 5,
    maxWidth: 50,
    maxHeight: 30,
    borderRadius: 3,
    backgroundColor: "red"
  }
}));

export default function SearchModal() {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(true);
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    history.go(-1);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleSubmit = () => {
    return;
  };

  let searchBox = matches ? classes.textField : classes.mobile;

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
          <FormControl className={searchBox}>
            <InputLabel htmlFor="standard-search">Search</InputLabel>
            <Input
              className={classes.inputbox}
              name="searchTerm"
              id="standard-search"
              type="text"
              value={searchTerm}
              onChange={handleChange}
            />
            <IconButton
              aria-label="search term"
              onClick={handleSubmit}
              onMouseDown={null}
              className={classes.icon}
            >
              <SearchIcon color="primary" />
            </IconButton>
          </FormControl>
        </Fade>
      </Modal>
    </div>
  );
}
