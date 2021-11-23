import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import service1 from '../../../Image_Icon/Icon/service1.png';
import service2 from '../../../Image_Icon/Icon/service2.png';
import service3 from '../../../Image_Icon/Icon/service3.png';
import Service from '../Home/Service/Service';

const Services = () => {
    const services = [
        {
            name: 'Anti Age Face Treatment',
            img: service1,
            price: 199,
            description: 'What Is an Anti-Aging Facial? An anti-aging facial is a type of facial that is targeted at improving the appearance of mature skin. Like a regular facial, an anti-aging facial usually consists of multiple steps such as cleansing, exfoliation, and facial masking. With age, the skin loses both collagen and elastin'
        },
        {
            name: 'Hari Color & Styling',
            img: service2,
            price: 99,
            description: 'What Is an Anti-Aging Facial? An anti-aging facial is a type of facial that is targeted at improving the appearance of mature skin. Like a regular facial, an anti-aging facial usually consists of multiple steps such as cleansing, exfoliation, and facial masking. With age, the skin loses both collagen and elastin'
        },
        {
            name: 'Skin Care Treatment',
            img: service3,
            price: 299,
            description: 'What Is an Anti-Aging Facial? An anti-aging facial is a type of facial that is targeted at improving the appearance of mature skin. Like a regular facial, an anti-aging facial usually consists of multiple steps such as cleansing, exfoliation, and facial masking. With age, the skin loses both collagen and elastin'
        },
    ]
    return (
        <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', my: '50px' }}>Our Awesome <span style={{ color: 'hotpink' }}>Services</span></Typography>
            <Grid container spacing={2}>
                {
                    services.map(service => <Service
                        key={service.price}
                        service={service}
                    ></Service>)
                }
            </Grid>
            <Button style={{ color: "inherit", backgroundColor: 'hotpink', padding: '8px 40px', marginTop: '50px', color: '#fff' }}>Explore More</Button>
        </Box>
    );
};

export default Services;