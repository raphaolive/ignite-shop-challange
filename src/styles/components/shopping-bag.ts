import { styled } from "..";

export const BagContainer = styled("div", {
  position: "relative",
  display: "flex",
  width: "3rem",
  height: "3rem",
  borderRadius: "6px",
  cursor: "pointer",

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
    border: "3px solid $gray900",
  },

  svg: {
    margin: "auto",
    height: "25px",
    width: "25px",
  },

  variants: {
    color: {
      header: {
        backgroundColor: "$gray800",
        "&:hover": {
          backgroundColor: "$gray600",
        },
        svg: {
          color: "$gray300",
        },
      },
      product: {
        backgroundColor: "$green500",
        "&:hover": {
          backgroundColor: "$green300",
        },

        svg: {
          color: "white",
        },
      },
    },
  },
});
