import './App.css'
import {
  Box,
  Typography,
} from "@mui/material";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import SearchPage from './SearchPage/SearchPage';
import MyBooking from './MyBooking/MyBooking';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Box p={1} bgcolor="primary.main">
        <Typography fontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='search' element={<SearchPage/>}></Route>
          <Route path='my-bookings' element={<MyBooking/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
