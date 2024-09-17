import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { Container, Stack, Box, Typography } from "@mui/material";
import Navbar from '../Components/DynamicComponents/Navbar/Navbar'
import SearchBar from '../Components/DynamicComponents/SearchBar/SearchBar'
import CardBody from '../Components/DynamicComponents/CardBody/CardBody'
import AutohideSnackbar from '../Components/DynamicComponents/AutohideSnackbar/AutohideSnackbar';
import BookingModal from '../Components/DynamicComponents/BookingModal/BookingModal';
import icontickmark from '../Assets/icon-tickmark.png'
import cta from '../Assets/cta.png'
import Footer from '../Components/Footer/Footer';
import QnaContainer from '../Components/LowerBody/QnaContainer/QnaContainer';
function SearchPage() {

  const [hospitals,setHospitals] = useState([]);
  const [searchParams,setSearchParams] = useSearchParams();
  const [state,setState] = useState(searchParams.get("state"));
  const [city,setCity] = useState(searchParams.get("city"));
  const [isLoading,setIsLoading] = useState(false);
  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);


  useEffect(()=>{
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  },[searchParams])
  

  const fetchHospitals = async() => {
    setHospitals([]);
    setIsLoading(true);
    try {
      const response = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
      const data = await response.json();
      setHospitals(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }    
  }

  useEffect(()=>{
    if(state && city){
      fetchHospitals();
    }
  },[state,city])

  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };


  return (
    <>
      <Box sx={{p:"1% 5%"}}>
        <Navbar/>
      </Box>
      <Box 
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          width: "100%",
        }}
      >
        <Box 
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container 
          maxWidth="xl"
          sx={{
            background: "#fff",
            p: 3,
            borderRadius: 2,
            transform: "translatey(50px)",
            mb: "50px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width:"90%"
          }}
          >
            <SearchBar/>
          </Container>
        </Box>

        <Container maxWidth="xl"  sx={{ pt: 8, pb: 10, px: { xs: 2, md: 4 } }}>
          {hospitals.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography
                component="h1"
                fontSize={24}
                lineHeight={1.1}
                mb={2}
                fontWeight={500}
              >
                {`${hospitals.length} medical centers available in `}
                <span style={{ textTransform: "capitalize" }}>
                  {city.toLocaleLowerCase()}
                </span>
              </Typography>
              <Stack direction="row" spacing={2}>
                <img src={icontickmark} height={24} width={24} alt="icon" />
                <Typography color="#787887" lineHeight={1.4}>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack 
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
            >
              {hospitals.length > 0 && hospitals.map((hospital) => (
                <CardBody 
                  key={hospital["Hospital Name"]}
                  details={hospital}
                  availableSlots={availableSlots}
                  handleBooking={handleBookingModal}
                />
              ))}

              {isLoading && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  Loading...
                </Typography>
              )}

              {!state && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  Please select a state and city
                </Typography>
              )}
            </Stack>
            <img src={cta} width={300} height="auto" alt="banner" />
          </Stack>
        </Container>

        <BookingModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          bookingDetails={bookingDetails}
          showSuccessMessage={setShowBookingSuccess}
        />

        <AutohideSnackbar
          open={showBookingSuccess}
          setOpen={setShowBookingSuccess}
          message="Booking Successful"
        />

      </Box>
      <QnaContainer/>
      <Footer/>
      </>
  )
}

export default SearchPage;
