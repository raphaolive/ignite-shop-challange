import { BagContainer } from "@/styles/components/shopping-bag";
import React from "react";
import { BsHandbag } from "react-icons/bs";
import { toast } from "sonner";
import { useShoppingCart } from "use-shopping-cart";

type ShoppingBagProps = {
  variant: "product" | "header";
};

export const ShoppingBag = ({ variant }: ShoppingBagProps) => {
  const { cartCount, handleCartClick } = useShoppingCart();

  let amount = 0;
  if (cartCount) {
    amount = cartCount;
  }

  const handleOpenChekoutModal = () => {
    if (variant === "header" && cartCount === 0) {
      toast.info("Sacola vazia.", {
        description: "Adicione algum produto.",
      });
    }
    if (variant === "header") {
      handleCartClick();
    }
  };

  return (
    <BagContainer onClick={handleOpenChekoutModal} color={variant}>
      <BsHandbag />
      {variant === "header" && amount > 0 && <span>{amount}</span>}
    </BagContainer>
  );
};
