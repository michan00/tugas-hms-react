import React from 'react';

class Carousel extends React.Component {
    render() {
        return (
            <div class="container">
                <div id="carouselExampleIndicators" class="carousel slide mt-5" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>

                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/img1.jpg" class="d-block img-fluid" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/vans.gif" class="d-block img-fluid" alt="..." />
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Carousel;    