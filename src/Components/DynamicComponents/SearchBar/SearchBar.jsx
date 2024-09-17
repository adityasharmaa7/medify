import React, { useEffect, useState } from 'react'
import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";


function SearchBar() {
  const [states,setStates] = useState([]);
  const [cities,setCities] = useState([]);
  const [formData,setFormData] =useState({
    state:"",
    city:""
  });
  const navigate = useNavigate();

  const fetchState = async() =>{
    try {
      const response = await fetch("https://meddata-backend.onrender.com/states");
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error("Error fetching states:", error); 
    }
    
  }

  const fetchCities = async() => {
    try {
      const response = await fetch(`https://meddata-backend.onrender.com/cities/${formData.state}`);
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.log("Error in fetching city:", error);
    }
  }

  useEffect(()=>{
    fetchState()
  },[])
  useEffect(()=>{
    if (formData.state != "") {
      fetchCities();
    }
  },[formData.state])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.state && formData.city) {
      navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        paddingLeft:"2vw",
        paddingRight:"2vw",
        // marginTop:"30px"
      }}
    >
      <Select
        displayEmpty
        id='state'
        name='state'
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
          {state}
        </MenuItem>
        ))}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  )
}

export default SearchBar;
