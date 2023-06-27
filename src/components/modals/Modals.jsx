import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./modals.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: "400px",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  backgroundImage:
    " url(https://bogatyr.club/uploads/posts/2023-03/1678722419_bogatyr-club-p-fruktovii-miks-foni-pinterest-2.jpg)",
  backgroundSize: "cover",
  borderRadius: "20px",
};
export default function BasicModal({ cart, setCart }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [srcj, setSrc] = React.useState(
    "https://pictures.pibig.info/uploads/posts/2023-04/1681993315_pictures-pibig-info-p-ananas-raskraska-dlya-detei-krasivo-5.jpg"
  );
  const [name, setName] = React.useState("");
  const [cal, setCal] = React.useState("");

  
  // ...

  const handleSave = () => {
    if (name !== "" && cal !== "") {
      const newcart = { name: name, cal: cal / 100, srcj: srcj };
      const newcart2 = cart.length ? [...cart, newcart] : [newcart];
      // Сохранение cart в localStorage
      localStorage.setItem("cart", JSON.stringify(newcart2));
      setCart(newcart2);
      setOpen(false);
    }
  };

  // ...

  return (
    <div>
      <Button onClick={handleOpen} style={{ width: "90%", marginLeft: "5%" }}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Typography className={classes.content}>
              <Typography>
                {" "}
                <div
                  className={classes.img_box}
                  style={{
                    width: 200,
                    height: 200,
                    border: "1px solid black",
                    borderRadius: 20,
                    backgroundImage: ` url(${
                      srcj.length
                        ? srcj
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIS0c3FXwBcjqE7n0UpxaoP_a8HsZxkIQzZA&usqp=CAU"
                    })`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <form method="post" enctype="multipart/form-data">
                  <label className={classes.file}>
                    <input
                      type="file"
                      onInput={(e) => {
                        setSrc(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                    <span>Выберите файл</span>
                  </label>
                </form>
              </Typography>
              <Box className={classes.wrapInp}>
                <Typography
                  className={classes.vh}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  <label>Ведите название продукта:</label>{" "}
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <label>Ведите соотношение на 100г :</label>{" "}
                  <input
                    type="text"
                    name="cal"
                    onChange={(e) => setCal(e.target.value)}
                  />
                </Typography>
                <Box className={classes.btnsx}>
                  <Button onClick={handleSave}>Сохранить</Button>
                </Box>
              </Box>
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
