import { NAV_HEIGHT } from "@/constants";
import { Box } from "@mantine/core";

const CenteredPage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box
      className="flex justify-center items-center text-center w-full"
      style={{ minHeight: `calc(100vh - 2*${NAV_HEIGHT})` }}
    >
      {children}
    </Box>
  );
};

export default CenteredPage;
