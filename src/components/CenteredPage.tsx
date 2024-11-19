import { NAV_HEIGHT } from "@/types/constants";
import { Flex } from "@mantine/core";

const CenteredPage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Flex
      mih={`calc(100vh - 2*${NAV_HEIGHT})`}
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
      w="100%"
    >
      {children}
    </Flex>
  );
};

export default CenteredPage;
