
import React from 'react'
import SideNav from '../component/SideNav'
import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';


export const Home = () => {
  return (
    <>
    <Container  maxWidth="xl" sx={{p:5,bgcolor:'white'}}>
              <Typography variant="h3" gutterBottom>
                Home
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
            </Container>


    </>
    
  )
}
