import { LayoutProps } from "@/shared/types/interfaces/layout-props.interface";
import { FunctionComponent } from "react";
import { GetApp, Footer } from "./components";
import { Container } from "@chakra-ui/react";

const AuthLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Container p="0" mb="38px" maxWidth="350px">
        {children}
        <GetApp />
      </Container>
      <Footer />
    </>
  );
};

export const withAuthLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AuthLayout>
        <Component {...props} />
      </AuthLayout>
    );
  };
};
