# Welcome to Sea BnB
Sea Bn is a Nautical themed multi-page web application inspired by Air BnB that allows users to reserve slips and docks to park their boats that have been posted by other users. The user is able to also submit a rating and a review on the dock so other users can make a better informed decision on if they want to book the dock. Once the user has made their reservation, they are directed to a page where they have the ability to view all of their current and past reservations.

<br>

[Click here to see it in action!](https://theseabnb.herokuapp.com/)

<br>


## Home Page

![image](https://user-images.githubusercontent.com/79103461/131862057-687f7452-f72b-45cb-b9ed-39e4ef763d22.png)

<br>

# Technologies Used

The Backend logic was created with the use of javascript and Express to handle all of the custom api routes that were created. The SQL database was manipulated with the utilization of sequelize. To keep things as light and responsive as possible for the user, React was chose to render the frontend. The site was styled with the use of CSS.

<br>

# Components
## Login and User Signup

* The users passwords are protected by being stored using bcrypt password hashing. In addition to having an account theres is also authorization and authentication for the user that utilizes session based storage.

## Viewing Docks
* On the Docks page of the application the user can browse various slips that are available to rent, view an average rating, and see the docks current location. Additionaly on this page a map is rendered with the use of google maps API. This feature to sort and view the location has not yet been fully implemented but this will show the exact location on the map as well as when you move around be able to see available slips around you.

<br>

![image](https://user-images.githubusercontent.com/79103461/131872080-542a42ac-6ded-4230-9db3-5f7bb402d57b.png)

<br>

## Individual Dock
* once the user has selected a dock that they are interested in they are directed to the individual dock page where they can find more information on that individual dock. The dock can have up to 5 separate images to get a better idea about what the dock looks like as well as read a description that is left by the host that lists important details about the slip as well as the amenities that are available.

<br>

![image](https://user-images.githubusercontent.com/79103461/131879005-eb799a13-1944-4fc9-8886-af755df59f25.png)

<br>

## Reviews
* Additionally on the individual dock page a logged in user has the ability to leave reviews on the docks as well as a rating. The rating system utilizes the react-stars react component from the react library to render onto the page. After leaving a review the user will then be able to edit the review or delete it entirely only for the reviews that they left and see the changes in real time.


<br>

![image](https://user-images.githubusercontent.com/79103461/132344036-13f5ec01-d43b-48ec-9c9e-0f2589b78bf5.png)

<br>

## Reservations
* After the user has a chance to review the listing and makes the decision that they would like to book their reservation they have the ability to select a range of dates that they would like to stay and submit their reservation request. Upon submitting the reservation the user is redirected to a a page that displays all of their current reservations where the user can cancel the reservation or update the day that they will be arriving. \

<br>

![image](https://user-images.githubusercontent.com/79103461/132345271-8171bbb7-6eb3-41ca-87b9-1cb31bdfb686.png)

<br>


![image](https://user-images.githubusercontent.com/79103461/132345334-54e6f123-1c24-4c9d-a94a-d67fa115a370.png)
<br>
