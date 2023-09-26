import { Box, CardMedia, Typography } from "@mui/material";
import * as styles from "./styles";
import title from '../../assets/justt.svg'

export function Title() {
    return (
        <Box css={styles.container}>
            <Box css={styles.media}>
                <CardMedia
                    sx={{ height: "40px", width: "140px" }}
                    image={title}
                    title="justt"
                />
                <Typography css={styles.title}>Rick and Morty API</Typography>
            </Box>
        </Box>
    )
}