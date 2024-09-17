import React from 'react'
import './DaySelector.css'
import {format,add,isEqual,startOfDay} from 'date-fns'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import {SlideNextButton, SlidePrevButton} from './SliderButton'


function DaySelector({ selectedDate, setSelectedDate, totalSlots }) {

    const date = startOfDay(new Date());
    const dateItems = [];

    for(let i=0;i<7;i++){
        dateItems.push(add(date,{days:i}))
    }

    const customDateFormat= (day) => {
        if (isEqual(date, day)) {
          return 'Today'
        }
        else if (isEqual(date, add(day, { days: -1 }))) {
          return 'Tomorrow'
        }
        else {
          return format(day, 'E, d LLL')
        }
    }

    const handleClick = (day) => {
      setSelectedDate(day)
    }

    
  return (
    <div className='DaySelector'>
      <Divider sx={{ mb: 3 }} />
            <Swiper
                slidesPerView={4}
                loop={false}
                spaceBetween={11}
                className="swiperStyles"
                breakpoints={{
                    1300: {
                        spaceBetween: 30,
                        slidesPerView: 3
                    },
                    300: {
                        spaceBetween: 30,
                        slidesPerView: 1
                    },
                    900: {
                        spaceBetween: 30,
                        slidesPerView: 2
                    }
                }}
            >
                {dateItems.map((day, index) => (
                    <SwiperSlide key={index} className="swiperslide">
                        <Stack textAlign='center' onClick={() => handleClick(day)} sx={{ cursor: 'pointer' }}>
                            <Typography fontWeight={isEqual(day, selectedDate) ? 700 : 400} fontSize={{ xs: 16, md: 16 }}>
                                {customDateFormat(day)}
                            </Typography>
                            <Typography fontSize={{ xs: 8, md: 12 }} color='primary.green'>
                                {`${totalSlots} Slots Available`}
                            </Typography>
                            <Box
                                height={{ xs: '4px', md: '5px' }}
                                width={{ xs: 1, md: 'calc(100% - 50px)' }}
                                position='relative'
                                bottom='0'
                                bgcolor={isEqual(day, selectedDate) ? 'primary.main' : 'rgba(0,0,0,0)'}
                                left={0}
                                zIndex={999}
                                mt='5px'
                                mx='auto'
                            >
                            </Box>
                        </Stack>
                    </SwiperSlide>
                ))}

                <span slot="container-start">
                    <Box display={{  md: 'block' }}>
                        <SlidePrevButton />
                    </Box>
                </span>

                <span slot="container-end">
                    <Box display={{ md: 'block' }}>
                        <SlideNextButton />
                    </Box>
                </span>
            </Swiper>
    </div>
  )
}

export default DaySelector
