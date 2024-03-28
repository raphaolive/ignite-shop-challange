import { stripe } from "@/lib/stripe";
import {
  ButtonCallToAction,
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
    priceUnitAmount: number;
  };
}

const Product = ({ product }: ProductProps) => {
  const { addItem } = useShoppingCart();

  const formatedAddItem = {
    name: product.name,
    description: product.description,
    id: product.id,
    price: product.priceUnitAmount,
    currency: "BRL",
    image: product.imageUrl,
  };

  const handleAddItem = () => {
    addItem(formatedAddItem);
  };

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | Igninte Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <img src={product.imageUrl} alt="t-shirt" height={520} width={480} />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <ButtonCallToAction onClick={handleAddItem}>
            Colocar na sacola
          </ButtonCallToAction>
        </ProductDetails>
      </ProductContainer>
    </>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: "prod_PZlPzzjPzbEY2d" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        priceUnitAmount: price.unit_amount,
        price: price.unit_amount
          ? new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price.unit_amount / 100)
          : "Preço indisponível",
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
