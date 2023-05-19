import {
  TabsProps as ChakraTabsProps,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs as ChakraTabs,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface IElement {
  key: {
    value: string;
    icon?: ReactNode;
  };
  value: ReactNode | string;
}

interface TabsProps extends Partial<ChakraTabsProps> {
  elements: IElement[];
}

export const Tabs = ({ elements, ...props }: TabsProps) => {
  return (
    <ChakraTabs {...props}>
      <TabList>
        {elements.map((el) => (
          <Tab key={el.key.value.toString()}>
            <Flex alignItems="center">
              {el.key.icon}
              <Text pl="6px">{el.key.value}</Text>
            </Flex>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {elements.map((el) => (
          <TabPanel key={el.value?.toString()}>{el.value}</TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
};
