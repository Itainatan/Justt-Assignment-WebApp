import { Box, } from "@mui/material";
import * as styles from "./styles";
import useHome from "./hooks";
import { PrimaryImage } from "@src/common-components/PrimaryImage";
import { Title } from "@src/common-components/Title";
import Buttons from "./components/Buttons";
import { MODE } from "../types";
import Browse from "../Browse";
import Search from "../Search";

export default function Home() {
  const { mode, setMode } = useHome();

  return (
    <Box css={styles.container}>
      <PrimaryImage />

      <Box css={styles.card}>
        <Title />
        <Buttons mode={mode} onClick={setMode} />
        {
          mode === MODE.Browse ? <Browse /> : <Search />
        }
      </Box>

      {/* <Box css={styles.main}>
       
      </Box> */}
    </Box>
  );
};

