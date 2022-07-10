import Button from "@mui/material/Button";
import {Add, Settings} from "@mui/icons-material";

function App() {
  return (
    <div>
      <Button 
      variant="text"
      color="secondary"
      >Hello World</Button>
      <Button 
      startIcon={<Settings/>} 
      variant="contained"
      color="success"
      size="small"
      >
        Settings
      </Button>
      <Button startIcon={<Add />} variant="outlined">
        Add me
      </Button>
    </div>
  );
}

export default App;
