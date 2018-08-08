import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  displayReviews = () => this.props.reviews.map(review => <Review deleteReview={this.props.deleteReview} key={review.id} review={review}/>);
  render() {
    return (
      <ul>
        {this.displayReviews()}
      </ul>
    );
  }
};

export default Reviews;
