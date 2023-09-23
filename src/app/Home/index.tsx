import { Button, CardMedia, CircularProgress, Toolbar, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as styles from "./styles";
import useHome from "./hooks";
import { PrimaryImage } from "@src/common-components/PrimaryImage";

export default function Home() {
  const {  } = useHome();

  return (
    <div css={styles.container}>
     <PrimaryImage />

      <Title />

      <Buttons onClick={} />

      {

      }
    </div>
  );
};

