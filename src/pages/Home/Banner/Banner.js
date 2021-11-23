import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import banner from '../../../Image_Icon/Image/jery.png'
import { Box, maxHeight } from '@mui/system';
import { Button, Container } from '@mui/material';

const Banner = () => {
    return (
        <Container>
            <Box>
                <Grid container spacing={2}  sx={{ display: 'flex', alignItems: 'center', mt: '100px', textAlign: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold',textAlign: 'left' }} component="div">
                            BEAUTY SALON <br /> FOR EVERY WOMEN
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'left', mt: '30px' }} component="div">
                            Translations in context of "parlour" in English-Russian
                            from Reverso Context: beauty parlour, tea parlour, dental parlour,
                            hairdresser's parlour
                            <Button sx={{backgroundColor: 'pink', my: '20px'}}>Get An Appointment</Button>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={banner} width='80%' />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;