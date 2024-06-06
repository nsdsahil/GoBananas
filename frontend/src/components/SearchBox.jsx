import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function SearchBox() {
    return (  
        <Box  sx={{ width: 300,margin:"auto",display:"flex"}}>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <Button sx={{marginLeft:"10px"}} size='small' variant ="contained">Search</Button>
        </Box>
    );
}

export default SearchBox;