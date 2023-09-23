import { Box, CardMedia } from "@mui/material";
import * as styles from "./styles";

export function Title() {
    return (
        <Box css={styles.container}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="rick and morty"
            />
        </Box>
    )
}