import React, { useEffect, useRef, useState } from 'react';
import {
  FaArrowUp,
  FaComments,
  FaMicrophone,
  FaMicrophoneSlash,
  FaRobot,
  FaPhone,
  FaVolumeHigh,
  FaVolumeXmark,
  FaWhatsapp,
  FaXmark,
} from 'react-icons/fa6';
import './PhysioChatbot.css';

const suggestions = [
  'Which conditions do you treat?',
  'How do I book an appointment?',
  'Is physiotherapy painful?',
  'Do you treat sports injuries?',
];

const answers = [
  {
    keywords: ['condition', 'treat', 'pain'],
    response: 'We provide care for neck, back, knee and shoulder pain, sports injuries, arthritis, sciatica, frozen shoulder, posture problems, neurological rehabilitation and post-surgical recovery. A clinical assessment helps us choose the safest plan for you.',
  },
  {
    keywords: ['appointment', 'book', 'schedule'],
    response: 'You can use any “Book an Appointment” button on this page. The clinic team will help confirm a convenient date and time for your consultation.',
  },
  {
    keywords: ['sports', 'injury', 'athlete'],
    response: 'Yes. We treat sports-related strains, sprains, joint injuries and overuse problems, with rehabilitation focused on strength, mobility and a safe return to activity.',
  },
  {
    keywords: ['painful', 'hurt', 'pain during'],
    response: 'Physiotherapy is adapted to your comfort. Some exercises or hands-on techniques may feel mildly challenging, but treatment should remain safe and manageable. Always tell your therapist how you feel.',
  },
  {
    keywords: ['session', 'how many', 'duration', 'long'],
    response: 'Most appointments take around 30 to 60 minutes. The number of sessions varies with your condition, recovery goals and response to treatment. Your therapist will explain this after assessment.',
  },
  {
    keywords: ['referral', 'doctor'],
    response: 'A doctor’s referral is usually not required for a physiotherapy consultation. If further medical investigation is advisable, your physiotherapist will guide you appropriately.',
  },
  {
    keywords: ['home visit', 'home service', 'at home'],
    response: 'Home-visit availability may depend on your location and the clinic schedule. Please contact the clinic directly to confirm availability in your area.',
  },
  {
    keywords: ['treatment', 'therapy', 'services'],
    response: 'Treatments include manual and exercise therapy, Class IV laser, IFT, TENS, ultrasound, diathermy, cervical and lumbar traction, dry needling and kinesiology taping. Your therapist recommends only techniques appropriate for your assessment.',
  },
  {
    keywords: ['first', 'consultation', 'bring', 'wear'],
    response: 'For your first visit, wear comfortable clothing and bring relevant prescriptions, scans or medical reports. Your therapist will discuss your symptoms, assess movement and explain a personalized care plan.',
  },
  {
    keywords: ['hello', 'hi', 'hey'],
    response: 'Hello! I’m the Dr. Jadhavar virtual care assistant. I can help with treatments, conditions, appointments and common physiotherapy questions. What would you like to know?',
  },
];

const findAnswer = (question) => {
  const normalized = question.toLowerCase();
  const match = answers.find((item) => item.keywords.some((keyword) => normalized.includes(keyword)));
  return match?.response || 'I can help with the clinic’s treatments, conditions, appointments, sessions and first-visit information. For personal medical advice or an exact diagnosis, please book an assessment with the physiotherapist.';
};

const PhysioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I’m your virtual care assistant. Ask me about treatments, appointments or your first physiotherapy visit.' },
  ]);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const speak = (text) => {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.96;
    speech.pitch = 1;
    speech.lang = 'en-IN';
    window.speechSynthesis.speak(speech);
  };

  const sendMessage = (value = input) => {
    const question = value.trim();
    if (!question || isTyping) return;
    setMessages((current) => [...current, { role: 'user', text: question }]);
    setInput('');
    setIsTyping(true);
    const response = findAnswer(question);
    window.setTimeout(() => {
      setMessages((current) => [...current, { role: 'bot', text: response }]);
      setIsTyping(false);
      speak(response);
    }, 650);
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      const response = 'Voice input is not supported in this browser. You can still type your question below.';
      setMessages((current) => [...current, { role: 'bot', text: response }]);
      speak(response);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      sendMessage(transcript);
    };
    recognitionRef.current = recognition;
    recognition.start();
  };

  return (
    <aside className={`physio-chat${isOpen ? ' is-open' : ''}`} aria-label="Virtual physiotherapy assistant">
      {!isOpen && (
        <div className="quick-contact-actions" aria-label="Quick contact options">
          <a className="quick-contact whatsapp" href="https://wa.me/918928009640?text=Hello%20Dr.%20Jadhavar%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
            <FaWhatsapp /><span><strong>WhatsApp</strong><small>Chat with us</small></span>
          </a>
          <a className="quick-contact call" href="tel:+918928009640" aria-label="Call +91 89280 09640">
            <FaPhone /><span><strong>Call Now</strong><small>+91 89280 09640</small></span>
          </a>
        </div>
      )}
      {isOpen && (
        <div className="chat-panel">
          <header className="chat-header">
            <div className="chat-avatar"><FaRobot /></div>
            <div><strong>Care Assistant</strong><span><i /> Online now</span></div>
            <button type="button" aria-label={voiceEnabled ? 'Turn spoken replies off' : 'Turn spoken replies on'} onClick={() => setVoiceEnabled((enabled) => !enabled)}>
              {voiceEnabled ? <FaVolumeHigh /> : <FaVolumeXmark />}
            </button>
            <button type="button" aria-label="Close assistant" onClick={() => setIsOpen(false)}><FaXmark /></button>
          </header>

          <div className="chat-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
                {message.role === 'bot' && <span className="message-avatar"><FaRobot /></span>}
                <p>{message.text}</p>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="chat-suggestions">
                {suggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => sendMessage(suggestion)}>{suggestion}</button>)}
              </div>
            )}
            {isTyping && <div className="chat-message bot"><span className="message-avatar"><FaRobot /></span><div className="typing-dots"><i /><i /><i /></div></div>}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-compose" onSubmit={(event) => { event.preventDefault(); sendMessage(); }}>
            <button className={isListening ? 'is-listening' : ''} type="button" aria-label={isListening ? 'Stop listening' : 'Ask using microphone'} onClick={toggleListening}>
              {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
            </button>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder={isListening ? 'Listening…' : 'Ask about physiotherapy…'} aria-label="Message" />
            <button className="chat-send" type="submit" aria-label="Send message" disabled={!input.trim() || isTyping}><FaArrowUp /></button>
          </form>
          <small className="chat-disclaimer">General information only — not a medical diagnosis.</small>
        </div>
      )}

      <button className="chat-launcher" type="button" aria-label={isOpen ? 'Close care assistant' : 'Open care assistant'} onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? <FaXmark /> : <span className="launcher-icon"><FaComments /><i /></span>}
        {!isOpen && <span>Ask our care assistant<small>Online • Replies instantly</small></span>}
      </button>
    </aside>
  );
};

export default PhysioChatbot;
