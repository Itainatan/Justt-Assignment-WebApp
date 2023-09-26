import {
  Box,
  Button,
} from "@mui/material";
import * as styles from "./styles";
import { MODE } from "@src/app/types";
import { Props } from "./types";

export default function Buttons({ mode, onClick }: Props) {

  return (
    <Box css={styles.container}>
      <Button css={[styles.button(true), mode === MODE.Browse && styles.selectedButton]}>Browse</Button>
      <Button css={[styles.button(false), mode === MODE.Search && styles.selectedButton]}>Pick a character</Button>
    </Box>
  );
}
