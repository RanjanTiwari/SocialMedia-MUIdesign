import Button from "@mui/material/Button";
import { Add, Settings } from "@mui/icons-material";
import { Typography } from '@mui/material'

function App() {
  return (
    <div>
      <Button variant="text">Hello World</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button startIcon={<Add />} variant="outlined" color="success">
        Add new post
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p" color="initial">
      There is already an h1 in the page, let's not duplicate it.
      </Typography> 
     <Button variant="contained" sx={{
      backgroundColor:"skyblue",
      color:"#888",
      margin:5,

      "&:hover":{
        backgroundColor:"lightblue",
      }
  
     }} 
     >My Unique Button</Button>
      
    </div>
  );
}

export default App;
