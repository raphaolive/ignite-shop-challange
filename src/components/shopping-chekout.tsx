/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { useShoppingCart } from "use-shopping-cart";

import {
  BagActions,
  CloseButton,
  EmptyBag,
  ProductCheckout,
  ProductInfo,
  ShoppingCheckoutModal,
} from "@/styles/components/shopping-checkout-modal";
import { ButtonCallToAction } from "@/styles/pages/product";
import { toast } from "sonner";
import axios from "axios";

export const ShoppingChekout = () => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const {
    cartDetails,
    decrementItem,
    formattedTotalPrice,
    cartCount,
    handleCartClick,
    shouldDisplayCart,
    redirectToCheckout,
  } = useShoppingCart();

  const handleRemoveItemFromCart = (productId: string) => {
    decrementItem(productId);
  };

  let cartDetailsArray = cartDetails ? Object.values(cartDetails) : [];

  const handleCloseShoppingCheckoutModal = () => {
    handleCartClick();
  };

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      // throw new Error()
      // const response = await axios.post("/api/checkout", {
      //   priceId: product.defaultPriceId,
      // });

      const result = await redirectToCheckout();

      console.log(result);

      // const { checkoutUrl } = response.data;

      // window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      toast.error("Falha ao redirecionar para checkout");
    }
  }

  if (cartDetailsArray.length === 0) {
    return (
      <ShoppingCheckoutModal>
        <h1>Sacola vazia</h1>
        <EmptyBag>
          <BsHandbag size={100} />
          <p>Adicione algum produto a sua sacola...</p>
        </EmptyBag>
      </ShoppingCheckoutModal>
    );
  }

  return (
    <ShoppingCheckoutModal show={shouldDisplayCart}>
      <CloseButton onClick={handleCloseShoppingCheckoutModal}>
        &#10005;
      </CloseButton>
      <div>
        <h1>Sacola de compras</h1>
        {cartDetailsArray.map((product) => {
          return (
            <ProductCheckout key={product.id}>
              <span>{product.quantity}</span>
              <img src={product.image} alt="" />
              <ProductInfo>
                <div>
                  <p className="name">{product.name}</p>
                  <p
                    style={{ fontWeight: "bold", marginTop: "8px" }}
                    className="price"
                  >
                    {product.formattedValue}
                  </p>
                </div>
                <button onClick={() => handleRemoveItemFromCart(product.id)}>
                  Remover
                </button>
              </ProductInfo>
            </ProductCheckout>
          );
        })}
      </div>
      <BagActions>
        <div>
          <p>Quantidade</p>
          <p>{cartCount} Itens</p>
        </div>
        <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
          <p>Valor total</p>
          <p>{formattedTotalPrice}</p>
        </div>
        <ButtonCallToAction
          disabled={isCreatingCheckoutSession}
          onClick={handleBuyProduct}
        >
          Finalizar compra
        </ButtonCallToAction>
      </BagActions>
    </ShoppingCheckoutModal>
  );
};
