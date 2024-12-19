import { useDispatch, useSelector } from "react-redux"
import {selectNameFilter} from '../../redux/filters/selectors.js'
import {changeFilter} from '../../redux/filters/slice.js'
import { Box, TextField, Typography } from "@mui/material";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, margin: '10px 0', alignItems: 'center', }}>
      <Typography variant="subtitle1" sx={{ color: '#6A1B9A' }}>Find contacts by name</Typography>
      <TextField
        variant="outlined"
        size="small"
        value={filterValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search..."
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
          input: {
            padding: '8px 130px',
            textAlign: 'center'
          },
        }}
      />
    </Box>
  );
};


export default SearchBox