
# Course Registration System

It's a simple project built with React and Tailwind CSS.


## Project Features

- Displayed variety of courses with details inside a card
- Any course can be taken by simply clicking on the 'Select' button.
- Users can easily check the total credit, price, and remaining credit hours in the cart section.
- Added filter that ensures the same course can never be taken twice
- Users cannot exceed the credit hour limit. If selected courses cross the limit, they will get an error message.


## How I managed the state of my project

These are the states that I have used for my project.
```javascript
const [cards, setCards] = useState([]);
const [selectedCourse, setSelectedCourse] = useState([]);
const [totalCreditHour, setTotalCreditHour] = useState(0);
const [remainingTime, setRemainingTime] = useState(20);
const [totalCost, setTotalCost] = useState(0);
```
- The card state was initialised as an empty array. It was used to store the data fetched from a JSON file using the fetch API, and then it was updated with the course data once the data was fetched successfully.

- The selectedCourse state was initialised as an empty array. It was used to keep track of the courses that a user had selected to take. When a user adds a course to the cart, the selected course object is then updated to this array.

- The totalCreditHour state was initialised with a value of '0' When a user adds a course, the value of the state is updated to calculate the total credit hours.

- The remainingTime state was initialised with a value of '0' When a user adds a course, the value of the state is updated to calculate the remaining credit hours.

- The totalCost state was initialised with a value of '0' When a user adds a course, the value of the state is updated to calculate the total cost.