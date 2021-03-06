import Lottie from "react-lottie";
import Box from "@mui/material/Box";

const Header = ({ animationPath }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        margin: "auto",
        marginTop: "15px",
      }}
    >
      <div onClick={() => null}>
        <Lottie
          aria-label="Web sensei floating up and down whilst meditating"
          options={defaultOptions}
        />
      </div>
    </Box>
  );
};

export default Header;
