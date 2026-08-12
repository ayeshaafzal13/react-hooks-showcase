import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const accordionData = [
  { id: 1, title: "What is React?", content: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently." },
  { id: 2, title: "What are React Hooks?", content: "Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8." },
  { id: 3, title: "What is useState?", content: "useState is a React Hook that lets you add state to functional components. It returns an array with two elements: the current state value and a function to update it." },
  { id: 4, title: "What is useEffect?", content: "useEffect is a React Hook that lets you perform side effects in functional components. It runs after the component renders and can be used for data fetching or subscriptions." },
  { id: 5, title: "What is the Virtual DOM?", content: "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by comparing the virtual DOM with the real DOM and updating only the changed elements." },
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight = openIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  return (
    <div className="project-container accordion-container">
      <Link to="/" className="back-btn">← Back to Home</Link>
      <h2>📋 Accordion</h2>
      <p className="project-desc">FAQ accordion with smooth animations</p>

      <div className="accordion-list">
        {accordionData.map((item, index) => (
          <div key={item.id} className="accordion-item">
            <button className="accordion-header" onClick={() => toggleItem(index)}>
              <span>{item.title}</span>
              <span className="accordion-icon">{openIndex === index ? "−" : "+"}</span>
            </button>
            <div className="accordion-content" ref={(el) => (contentRefs.current[index] = el)}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;