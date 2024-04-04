import React from 'react'

const UserReview = () => {
  return (
    <div class="review-card-holder">
      <div class="flex column review-card bg-dark-gray-col">

        <div class="flex space-between">
          <div class="flex align-center user-info">
            <img class="profile" src="./assets/profile-white-bg.jpeg" alt="profile"/>
            <p>username</p>
          </div>

          <div class="flex rating-wrapper-reviews" >
            <p class="flex avg-rating"> 4.5</p>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>

        <p class="review-flight primary-color">New York</p>
        <p>Smooth booking process, efficient check-in, and pleasant flight experience. Would fly again.</p>

      </div>
    </div>
  )
}

export default UserReview