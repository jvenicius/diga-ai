import { Box, Tooltip } from "@chakra-ui/react";
import React from "react";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <>
      <Box>
        <Tooltip label="Procure pessoas para conversar">
            
        </Tooltip>
      </Box>
    </>
  );
};

export default SideDrawer;
