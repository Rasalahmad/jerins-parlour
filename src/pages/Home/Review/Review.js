import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Rating } from '@mui/material';

const Review = ({ review }) => {
    const { name, img, description, rating, designation } = review;
    return (
        <>
            <Card>
                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                    <img style={{ borderRadius: '50%' }} width="50px" src={img} alt="" />
                    <Box sx={{ px: '20px', textAlign: 'left' }}>
                        <Typography variant="h6">{name}</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{designation}</Typography>
                    </Box>
                </Box>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Rating name="read-only" value={rating} precision={0.5} readOnly />
            </Card>
        </>
    );
};

export default Review;