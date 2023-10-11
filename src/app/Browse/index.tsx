import { Box } from "@mui/material";
import SearchField from "@src/common-components/SearchField";
import useBrowse from "./hooks";
import Table from "./components/Table/index";
import { headCells } from "./constants";

export default function Browse() {
  const { data, setPage, onSubmit } = useBrowse();

  return (
    <Box>
      <SearchField
        onSubmit={onSubmit}
        placeholder="Browse for characters..."
        required={false}
      />
      {data && (
        <Table
          rows={data.results}
          headers={headCells}
          total={data.info.count}
          onChangePage={setPage}
        />
      )}
    </Box>
  );
}
