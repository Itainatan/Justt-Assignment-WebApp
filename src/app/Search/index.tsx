import { Box, CardMedia, Typography } from "@mui/material";
import SearchField from "@src/common-components/SearchField";
import useSearch from "./hooks";
import * as styles from './styles';
import search from '../../assets/search.png';

export default function Search() {
    const { setId } = useSearch();

    return (
        <Box>
            <SearchField onSubmit={setId} placeholder="Search for character I.d" />
            <CardMedia
                css={styles.searchIcon}
                image={search}
                title="search"
            />
            <Typography css={styles.subTitle}>Search for a character i.d in order to view a character</Typography>
        </Box>
    );
}