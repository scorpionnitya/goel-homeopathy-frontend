const consultationQuestions = [
  {
    id: "age",
    question: "👋 Welcome to HomisCare AI.\n\nLet's begin your consultation.\n\nWhat is your age?",
    type: "text",
    placeholder: "Enter your age..."
  },

  {
    id: "gender",
    question: "Select your gender",
    type: "buttons",
    options: [
      "👨 Male",
      "👩 Female",
      "⚧ Other"
    ]
  },

  {
    id: "symptom",
    question: "What is your main symptom?",
    type: "text",
    placeholder: "Describe your main symptom..."
  },

  {
    id: "duration",
    question: "Since when are you experiencing this?",
    type: "buttons",
    options: [
      "Today",
      "2–3 Days",
      "1 Week",
      "More than 1 Week"
    ]
  },

  {
    id: "severity",
    question: "How severe is it?",
    type: "buttons",
    options: [
      "😊 Mild",
      "😐 Moderate",
      "😣 Severe"
    ]
  },

  {
    id: "fever",
    question: "Do you have fever?",
    type: "buttons",
    options: [
      "✅ Yes",
      "❌ No"
    ]
  },

  {
    id: "otherSymptoms",
    question: "Any other symptoms? (Optional)",
    type: "text",
    placeholder: "Type here..."
  }
];

export default consultationQuestions;