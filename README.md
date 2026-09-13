Project Name: Dev Stack Builder

Dev Stack is a responsive React website where users can explore different technologies and create their own stack. Users can add, remove, or clear technologies from their stack.

Technologies Used

React
-TypeScript
-Tailwind CSS
-DaisyUI
-React Toastify
-Vite
-JSON


Features

-Explore different technologies with their category, difficulty, rating, description, and icon.
-Add technologies to the stack and remove them individually or all at once.
-Responsive design for mobile, tablet, and desktop devices.


1. What is JSX, and why is it used in React?

-JSX is a way to write HTML-like code in JavaScript. It helps us create the UI in React easily.

2. What is the difference between props and state?

-Props are data passed from a parent to a child. State is data that a component can store and change.

3. What does useState do, and where did you use it?

-useState is used to store and update data. I used it in App.tsx to store the selected technologies.

4. What does useEffect do, and why did you need it?

-useEffect is used for tasks like fetching data. But I did not use it in this project. I used fetch(), Suspense, and use() to load the JSON data.

5. Why does .map() need a unique key?

-A unique key helps React identify each item in a list and update it correctly.

6. What is conditional rendering?

-Conditional rendering means showing different content based on a condition. I used it for the empty stack. If the stack is empty, it shows “Your stack is empty.”

7. How do parent and child components share data?

-A parent sends data to a child using props. The child can send information back by calling a function passed through props.