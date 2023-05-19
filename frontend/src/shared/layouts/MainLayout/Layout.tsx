import { LayoutProps } from "@/shared/types/interfaces/layout-props.interface";
import { FunctionComponent } from "react";
import { Container, Flex } from "@chakra-ui/react";
import { Menu } from "./components/Menu";

const MainLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Flex minHeight="100vh">
        <Menu />
        <Container p="30px 20px 0" mb="38px" maxWidth={{ md: "975px" }}>
          {children}
        </Container>
      </Flex>
    </>
  );
};

export const withMainLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
};
