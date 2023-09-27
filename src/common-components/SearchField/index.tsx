import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import * as styles from './styles';
import { Props } from './types';
import useSearchField from './hooks';

export default function SearchField({ placeholder, onSubmit }: Props) {
    const { register, onClickSubmit } = useSearchField({ onSubmit });
    return (
        <form onSubmit={onClickSubmit} css={styles.container}>
            <TextField
                css={styles.input}
                placeholder={placeholder}
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                {...register("search", {
                    required: true,
                })}
            />
            <Button css={styles.submitButton} type="submit">GO</Button>
        </form>
    );
}

