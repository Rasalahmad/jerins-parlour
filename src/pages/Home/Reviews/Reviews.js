import { Container } from "@mui/material";
import React from "react";
import Carousel from "react-elastic-carousel";
import person1 from '../../../Image_Icon/Image/person1.png'
import person2 from '../../../Image_Icon/Image/person2.png';
import person3 from '../../../Image_Icon/Image/person3.png';
import Review from "../Review/Review";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const reviews = [
    {
        id: 101,
        name: 'Ayon Barua',
        img: person1,
        designation: 'CEO, KLKER LAB',
        description: 'ustralia fabulous vintage inspired dresses and fashion. Shop dresses, skirts, tops and occasionwear online or in store. Free shipping on orders over',
        rating: "5"
    },
    {
        id: 102,
        name: 'Solaiman Islam',
        img: person2,
        designation: 'CEO, KLKER LAB',
        description: 'ustralia fabulous vintage inspired dresses and fashion. Shop dresses, skirts, tops and occasionwear online or in store. Free shipping on orders over',
        rating: "4"
    },
    {
        id: 103,
        name: 'Jerine',
        img: person3,
        designation: 'CEO, KLKER LAB',
        description: 'ustralia fabulous vintage inspired dresses and fashion. Shop dresses, skirts, tops and occasionwear online or in store. Free shipping on orders over',
        rating: "4.5"
    },
    {
        id: 104,
        name: 'Sharif Durjoy',
        img: 'https://www.whatsappimages.in/wp-content/uploads/2021/03/Cute-Girl-Images-For-Whatsapp-Dp-Photo-Download.jpg',
        designation: 'CEO, KLKER LAB',
        description: 'ustralia fabulous vintage inspired dresses and fashion. Shop dresses, skirts, tops and occasionwear online or in store. Free shipping on orders over',
        rating: "3"
    }
]

const Reviews = () => {
    return (
        <Container>
            <h1 style={{ textAlign: "center", marginTop: '50px', marginBottom: '50px' }}>Testimonials</h1>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </Carousel>
            </div>
        </Container>
    );
};

export default Reviews;