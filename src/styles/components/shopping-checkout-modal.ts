import { styled } from "../";

export const ShoppingCheckoutModal = styled("div", {
  position: "absolute",
  zIndex: 1,
  right: "-35vw",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  opacity: 0,

  width: "35vw",
  height: "100vh",
  padding: "5rem 4rem",

  backgroundColor: "$gray800",
  boxShadow: "#000000b3 -10px 0px 20px 0px;",

  h1: {
    fontSize: "1.5rem",
  },

  transition: "right 0.4s ease-in-out",

  variants: {
    show: {
      true: {
        right: "0",
        opacity: 1,
      },
    },
  },
});

export const EmptyBag = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",

  alignItems: "center",
  textAlign: "center",

  p: {
    color: "$gray300",
  },

  svg: {
    color: "$gray600",
  },
});

export const ProductCheckout = styled("div", {
  position: "relative",
  display: "flex",
  gap: "18px",
  margin: "2rem 0px",

  span: {
    position: "absolute",
    top: -12,
    right: -12,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "30px",
    height: "30px",
    backgroundColor: "$green500",

    borderRadius: "999px",
  },

  img: {
    borderRadius: 8,
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    objectFit: "cover",
    width: "100px",
  },
});

export const ProductInfo = styled("div", {
  display: "flex",
  flexDirection: "column",

  justifyContent: "space-between",
  alignItems: "start",
  fontSize: "1.2rem",

  width: "100%",

  button: {
    fontWeight: "bold",
    background: "none",
    border: "none",
    fontSize: "1.2rem",

    cursor: "pointer",
    color: "$green500",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const BagActions = styled("footer", {
  display: "flex",
  flexDirection: "column",

  div: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem",
  },

  button: {
    marginTop: "3rem",
  },
});

export const CloseButton = styled("span", {
  position: "absolute",
  top: 30,
  right: 30,

  color: "$gray300",
  fontSize: "1.5rem",
  cursor: "pointer",

  "&:hover": {
    color: "$gray100",
  },
});
