import { Box } from "@mui/material";
import SearchField from "@src/common-components/SearchField";
import useBrowse from "./hooks";

export default function Browse() {
    const { setSearch } = useBrowse();

    return (
        <Box>
            <SearchField onSubmit={setSearch} placeholder="Browse for characters..." />
        </Box>
    );
}