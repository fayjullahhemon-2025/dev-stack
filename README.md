## Project Name
Dev Stack Builder

## Description
Dev Stack Builder is a React web application that allows developers to build their ideal development stack. Users can browse various frontend, backend, database, and DevOps tools and add their favorites to a personalized stack sidebar.

## Technologies Used
- React (with TypeScript)
- Tailwind CSS
- React-Toastify (NPM Package)
- Vite  (build tool)
- React-Icons
- JSON (for technology data)

## Key Features
1. **Dynamic Technology Grid**: A responsive grid showcasing technologies fetched dynamically from a JSON file wich contains category badges, ratings, and difficulty levels.
2. **Interactive Stack Builder**: Users can add or remove technologies from their custom stack, with real-time updates and prevention of duplicate entries.
3. **Beautiful Toast Notifications**: Integrated toast alerts that provide immediate feedback when users add, remove, remove all technologies in their stack.

## React Questions & Answers
**1. What is JSX, and why is it used in React?**
JSX is a syntax extension for JavaScript that looks very similar to HTML but not HTML. It is used in React to describe what the UI should look like. It makes it easier to write and understand React components by allowing us to mix HTML-like structures directly inside JavaScript code.

**2. What is the difference between props and state?**
Props are used to pass data from a parent component to a child component; they are read-only and cannot be changed by the child. Thats mean React support Uni-Directional data pass flow. On the other hand,State is internal memory or variable for a component; it is used to hold data that can change over time (like user input) and is managed directly by the component itself.When state changes, then react will re-render the component to display the UI changes.

**3. What does the `useState` hook do, and where did you use it in this project?**
The `useState` hook allows functional components to have their own local state. It returns the current state value and a function to update it. In this project, I used many time `useState` like in `Technologies.tsx` file I used `useState` to store `selectedStacks`. 

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
The `useEffect` hook allows you to perform side effects in functional components, like data fetching, subscriptions, or manually changing the DOM. I needed it to load the JSON data because fetching data is a side effect that shouldn't block the initial rendering of the component, and it should only happen once when the component first loads.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
Every item needs a unique `key` prop so React can identify which items have changed, been added, or been removed. This helps React optimize performance by only re-rendering the specific elements that changed rather than re-rendering the entire list.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering is the process of displaying different UI elements or components based on certain conditions or state. I used it in `TechnologyCard.tsx` to either show an `✓ Added to Stack` or `Add to Stack` in techonology card. 

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
I will pass data from a parent to a child by using props (e.g., ` <SelectedStacks selectedStacks={selectedStacks} handleRemoveStack={handleRemoveStack} handleRemoveAll={handleRemoveAll}></SelectedStacks>`). To send something back, the parent passes a function down to the child as a prop, and the child calls that function with the necessary data (e.g., `<button onClick={handleRemoveAll}className="text-red-500 hover:text-red-700 text-[14px] flex items-center gap-1 font-semibold border border-[#ED8C85] py-3 rounded-lg justify-center">Remove All</button>`, which calls it on button click).