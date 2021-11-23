import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../Image_Icon/Image/treatment.png';

const OurProfationality = () => {
    return (
        <Box sx={{ my: '100px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <img width="100%" src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <h2>Details</h2>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OurProfationality;