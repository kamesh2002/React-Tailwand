import React, {useState} from 'react';

const faqData = [
  {
    question : 'What is React?',
    answer : 'React is a JavaScript library for building user interfaces.',

  },
  {
    question: 'what is Tailwind Css?',
    answer: 'Tailwind is a utility-first Css framework for fast UI building',

  },
  {
    question: 'How do you use useState?',
    answer: 'Use stated is a Hook that lets you add state to functional components.',

  },
];

function AccordionItem({ question, answer, isOpen, onClick}){
  return(
    <div className="border-b">
      <button onClick={onClick}
      className="w-full text-left p-4 focus:outline-none hover:bg-gray-100 flex justify-between item-center"
      >
        <span className="font-medium">{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>

      {isOpen && (
        <div className="p-4 pt-0 text-gray-700 transition all duration-300">{answer}</div>
      )}
    </div>
  );
}

export default function AccordionFAQ(){
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) =>{
    setOpenIndex(openIndex === index ? null : index);

  };

  return(
    <div className="max-w-xl mx-auto mt-10 border rounded shadow">
      <h2 className="text-2xl font-bold p-4 bg-blue-100 text-center">FAQ</h2>

      {faqData.map((faq, index) =>(
        <AccordionItem
        
        key = {index}
        question={faq.question}
        answer={faq.answer}
        isOpen={openIndex === index}
        onClick={() => toggleIndex(index)}
       />
      ))}
    </div>
  );
}

