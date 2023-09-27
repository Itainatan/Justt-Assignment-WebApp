import { Box, CardMedia, Typography } from "@mui/material";
import * as styles from './styles';
import { Player } from "../types";

export default function PlaterCard({ player }: { player: Player }) {

    console.log(player)

    return (
        <Box css={styles.container}>
            <CardMedia
                css={styles.image}
                image={player.image}
                title="justt"
            />
            <Box css={styles.data}>
                <Typography>i.d</Typography>
                <Typography>{player.id}</Typography>
            </Box>
        </Box>
    );
}