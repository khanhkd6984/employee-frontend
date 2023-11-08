// "use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel, hexToRgb } from "@mui/material";
import { useState } from "react";
// import { toast } from "react-toastify";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IProps {
  showLoginModal: boolean;
  setShowLoginModal: (value: boolean) => void;
}

export default function LoginModal(props: IProps) {
  const { showLoginModal, setShowLoginModal } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const handleClose = () => setShowLoginModal(false);
  const handleLogin = () => {
    let formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    fetch("http://localhost:8000/login", {
      method: "POST",
      body: formData,
    }).then(async (res) => {
      if (res.ok) {
        console.log(await res.json());
        setShowLoginModal(false);
      } else {
        console.log("NOT OK");
      }
    });
  };

  return (
    <Modal
      open={showLoginModal}
      //   onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <FormControl>
          <TextField
            type="text"
            size="small"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ marginTop: 4 }}
            type="password"
            size="small"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={() => handleLogin()}>Login</Button>
        </FormControl>
      </Box>
    </Modal>
  );
}
