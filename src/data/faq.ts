export interface FAQData {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQData[] = [
  {
    id: "1",
    question: "How can I get started on AI Chatbot?",
    answer:
      "To begin chatting on AI Chat Bot, simply complete our quick registration process. Once done, you're all set to dive into the world of chatting. It's as simple as that—one easy step, and you're good to go!",
  },
  {
    id: "2",
    question: "What are the key features of app?",
    answer:
      "Our AI Chatbot app offers advanced natural language processing, real-time conversation capabilities, multi-language support, voice interaction, and seamless integration with various platforms. You can also customize your chat experience with different themes and conversation styles.",
  },
  {
    id: "3",
    question: "Tell me more about the pricing plans.",
    answer:
      "We offer flexible pricing plans to suit different needs. Our free tier includes basic chat functionality with limited messages per day. Premium plans start at $9.99/month and include unlimited messages, advanced features, priority support, and access to specialized AI models.",
  },
  {
    id: "4",
    question:
      "How do I contact your Support Team if I face any service difficulties?",
    answer:
      "You can reach our support team through multiple channels: email us at support@aichatbot.com, use the in-app chat feature, or visit our help center. Our team typically responds within 24 hours and is available 7 days a week to assist you.",
  },
  {
    id: "5",
    question:
      'What should I do if I see the "Message not sent. Tap to retry." error?',
    answer:
      "This error usually indicates a temporary connection issue. First, check your internet connection. If the problem persists, try closing and reopening the app, or restart your device. If the issue continues, contact our support team with details about when the error occurs.",
  },
  {
    id: "6",
    question: "How do I recover my password?",
    answer:
      "To recover your password, go to the login screen and tap 'Forgot Password'. Enter your registered email address, and we'll send you a secure link to reset your password. Make sure to check your spam folder if you don't receive the email within a few minutes.",
  },
];
