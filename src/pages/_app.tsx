import { globalStyles } from "@/styles/globals";
import type { AppProps } from "next/app";
import logoImg from "../assets/logo.svg";
import Image from "next/image";
import { Container, Header } from "@/styles/pages/app";
import { Toaster } from "sonner";
import { CartProvider } from "use-shopping-cart";
import { ShoppingBag } from "@/components/shopping-bag";
import Link from "next/link";
import { ShoppingChekout } from "@/components/shopping-chekout";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const successUrl = "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}";

  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      successUrl={successUrl}
      cancelUrl="http://localhost:3000"
      shouldPersist={true}
      stripe="pk_live_51OkYj4IDie2y8GcZQ9oYS0kyqAY5a3dzfT3PxgNVRTyS9EZU4Bina1QuederlJ0IFNiOgQysMIbzb8wUHdwMR8Be009n48hEp3"
      currency="BRL"
    >
      <Container>
        <ShoppingChekout />
        <Toaster />
        <Header>
          <Link href="/" prefetch={false}>
            <Image src={logoImg} alt="" />
          </Link>
          <ShoppingBag variant="header" />
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
