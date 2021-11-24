import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../Image_Icon/Image/treatment.png';

const OurProfationality = () => {
    const primaryColor = {
        color: 'hotpink',
        fontSize: '40px'
    }
    return (
        <Container>
            <Box sx={{ my: '100px' }}>
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={12} md={6}>
                        <img width="100%" src={treatment} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                            Let us handle your <br /> screen <span style={{ color: 'hotpink' }}>Profationality.</span>
                        </Typography>
                        <Typography sx={{ textAlign: 'left', mt: '30px' }}>
                            This page all about my Beauty Parlour. Here you can have all kinds of beauty services, specially we have good reputation of Bridal make-over, Party make-up, Facials, Hair cut-rebonding-colour-spa etc.
                        </Typography>
                        <Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <Box>
                                    <h1 style={primaryColor}>500+</h1>
                                    <p>Total Service</p>
                                </Box>
                                <Box>
                                    <h1 style={primaryColor}>16+</h1>
                                    <p>Happy Customar</p>
                                </Box>
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default OurProfationality;