const name = document.querySelector("#name");
const update = document.querySelector("#new");
const details = document.querySelector("#details");
const detailsContainer = document.querySelector("#detailsContainer");
const projectDetails = document.querySelector("#projectDetails");


const words = [
    "To-Do List App", "E-Book Reader", "Chat Applications", 
    "Recipe Sharing Application", "Social Network for Pets", " Music Streaming",
    "Digital Library", "Personal Portfolio Website", " Pet Adoption Platform", "Hotel Management System", 
     "Weather App", "Online Learning Platform", 
  "Smart Home Security System", "Smart Parking System", 
  "Smart Irrigation System", "Digital Art Gallery", 
  "Personal Finance Assistant", "Virtual Reality Experience", 
  "Collaborative Whiteboard App", "Augmented Reality Navigation App", 
  "AI-powered Chatbot", "Issue Tracking System", 
  "Content Management System", "Stock Portfolio Tracker", 
  "Dating App", "Gaming Platform", "Travel Itinerary Generator", 
  "Health and Fitness App", "Event Management System", 
  "Employee Attendance System", "Blog Platform", 
  "Online Marketplace", "Inventory Management System", 
  "Real Estate Management System", "Car Rental Service", 
  "Appointment Scheduling App", "Video Streaming Service", 
  "Cryptocurrency Tracker", "Restaurant Ordering System", 
  "Virtual Classroom", "Job Candidate Tracker", 
  "Home Automation System", "Expense Sharing App", 
  "Travel Expense Tracker", "Community Forum", 
  "Language Translation App", "Crowdfunding Platform", 
  "Fitness Challenge App", "Smart City Waste Management", 
  "Remote Team Collaboration Tool", "Personal Blog", 
  "Portfolio Website", 
  "Weather App", 
  "To-Do List App", 
  "Recipe Book", 
  "Random Quote Generator", 
  "Tip Calculator", 
  "Number Guessing Game", 
  "Simple Calculator", 
  "Color Palette Generator", 
  "Word Counter Tool", 
  "Book Library App", 
  "Meme Generator", 
  "Flashcard Quiz App", 
  "Currency Converter", 
  "Digital Clock", 
  "Responsive Landing Page", 
  "Memory Matching Game", 
  "Interactive Quiz Game", 
  "Contact Form for a Website", 
  "Simple Paint App", 
  "Personal Finance Tracker", 
  "Movie Recommendation App", 
  "Recipe Search App"
]


const getWord = () => {
  const raw = words[Math.floor(Math.random() * Math.floor(words.length))];
  const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);
  return stylish;
}

const updateWords = () => {
  name.value = getWord();
  hideDetails();
}

const projectDetailsMap = {
  "To-Do List App": "A task management application to help users organize their daily activities and improve productivity.",
  "E-book Reader": "An application for reading digital books with features like bookmarking, highlighting, and adjustable fonts.",
  "Chat Application": "Real-time messaging platform that allows users to communicate with each other through text messages.",
  "Recipe Sharing Platform": "A community-driven platform where users can share and discover new recipes.",
  "Social Network for Pets": "Connect with other pet owners, share cute pictures, and find pet-friendly events in your area.",
  "Music Streaming App": "Listen to a vast collection of music, create playlists, and discover new artists and genres.",
  "Digital Library": "Access a digital repository of books, articles, and multimedia resources for learning and entertainment.",
  "Personal Portfolio Website": "Create a digital portfolio to showcase your skills, projects, and achievements.",
  "Smart Shopping List": "An intelligent shopping list that helps users plan their purchases and manage their budget.",
  "Pet Adoption Platform": "Find and adopt adorable pets in need of a loving home through a user-friendly online platform.",
  "Language Learning App": "Learn new languages through interactive lessons, quizzes, and immersive exercises.",
  "Expense Tracker": "Keep track of your expenses, set budgets, and get insights into your spending habits.",
  "Budget Planner": "Plan and manage your finances effectively with features like budgeting, expense tracking, and financial analysis.",
  "Feedback Collection System": "Collect valuable feedback from users, customers, or employees to improve products or services.",
  "Job Portal": "Connect job seekers with employers, allowing them to search for jobs and submit applications online.",
  "Task Management System": "Organize and prioritize tasks, collaborate with team members, and track project progress.",
  "Weather App": "Get real-time weather updates, forecasts, and radar information for your location and other places.",
  "Online Learning Platform": "Offer a variety of courses and educational materials online, making learning accessible to a global audience.",
  "Smart Home Security System": "Enhance home security with smart features like surveillance cameras, motion sensors, and remote monitoring.",
  "Smart Parking System": "Efficiently manage parking spaces using sensors and technology to streamline parking for drivers.",
  "Smart Irrigation System": "Optimize water usage for agriculture by incorporating smart sensors and automation.",
  "Digital Art Gallery": "Showcase digital artwork from various artists, providing a platform for creativity and expression.",
  "Personal Finance Assistant": "Assist users in managing their personal finances, providing insights and recommendations.",
  "Virtual Reality Experience": "Immerse users in a virtual world with interactive and engaging experiences using virtual reality technology.",
  "Collaborative Whiteboard App": "Facilitate teamwork and collaboration by providing a virtual whiteboard for brainstorming and planning.",
  "Augmented Reality Navigation App": "Navigate the real world with augmented reality overlays, providing helpful information and directions.",
  "AI-powered Chatbot": "Create an intelligent chatbot that can answer questions, provide assistance, and engage in conversations with users.",
  "Issue Tracking System": "Manage and track issues, bugs, and tasks in software development projects.",
  "Content Management System": "Build and manage digital content, making it easy to publish, organize, and update information online.",
  "Stock Portfolio Tracker": "Track and analyze stock investments, monitor portfolio performance, and receive market insights.",
  "Dating App": "Connect people based on shared interests, preferences, and geographical proximity.",
  "Gaming Platform": "Provide a platform for gamers to discover, play, and connect with others who share their gaming interests.",
  "Travel Itinerary Generator": "Plan and organize travel itineraries, suggesting activities, accommodations, and transportation options.",
  "Health and Fitness App": "Monitor health metrics, track fitness activities, and provide personalized workout and nutrition plans.",
  "Event Management System": "Organize and manage events, from planning and promotion to ticketing and attendee management.",
  "Employee Attendance System": "Automate the tracking of employee attendance, providing accurate and efficient record-keeping.",
  "Blog Platform": "Create a platform for individuals to publish and share blog posts on various topics.",
  "Online Marketplace": "Facilitate buying and selling of goods and services online through a secure and user-friendly platform.",
  "Inventory Management System": "Track and manage inventory levels, streamline order processing, and optimize supply chain operations.",
  "Real Estate Management System": "Manage properties, listings, and transactions in the real estate industry through a comprehensive system.",
  "Car Rental Service": "Provide an online platform for users to rent cars, choose rental options, and make reservations.",
  "Appointment Scheduling App": "Allow users to schedule appointments, meetings, and events with ease.",
  "Video Streaming Service": "Offer a platform for users to stream and enjoy a wide range of video content.",
  "Cryptocurrency Tracker": "Track real-time prices, trends, and market information for various cryptocurrencies.",
  "Restaurant Ordering System": "Enable users to browse menus, place orders, and make reservations for restaurants.",
  "Virtual Classroom": "Facilitate online learning and collaboration between teachers and students through virtual classrooms.",
  "Job Candidate Tracker": "Streamline the recruitment process by tracking job applicants, interviews, and candidate evaluations.",
  "Home Automation System": "Automate and control home appliances, lighting, and security systems for convenience and energy efficiency.",
  "Expense Sharing App": "Simplify the process of sharing expenses among friends, roommates, or colleagues.",
  "Travel Expense Tracker": "Track and manage travel expenses, providing insights into spending during trips.",
  "Community Forum": "Create an online community where users can discuss and share ideas on various topics.",
  "Language Translation App": "Translate text or speech between different languages, aiding communication across language barriers.",
  "Crowdfunding Platform": "Enable individuals or businesses to raise funds for projects or causes through a crowdfunding campaign.",
  "Fitness Challenge App": "Encourage users to participate in fitness challenges, set goals, and track their progress.",
  "Smart City Waste Management": "Implement smart solutions to optimize waste collection and management in urban areas.",
  "Remote Team Collaboration Tool": "Facilitate collaboration and communication among remote team members, enhancing productivity.",
  "Personal Blog": "Create a space for individuals to express themselves, share thoughts, and connect with a wider audience.",
  "Portfolio Website": "Build a digital portfolio showcasing skills, projects, and achievements for personal or professional purposes.",
  "Weather App": "Get real-time weather updates, forecasts, and radar information for your location and other places.",
  "To-Do List App": "Organize tasks, set priorities, and manage time efficiently with a user-friendly to-do list application.",
  "Recipe Book": "Create a digital recipe book to store and organize favorite recipes, making cooking and meal planning easier.",
  "Random Quote Generator": "Generate and display random quotes to inspire and motivate users.",
  "Tip Calculator": "Calculate tips and split bills easily with a user-friendly tip calculator.",
  "Number Guessing Game": "Entertain users with a fun number guessing game, challenging them to guess a randomly generated number.",
  "Simple Calculator": "Perform basic arithmetic calculations with a simple and easy-to-use calculator application.",
  "Color Palette Generator": "Generate color palettes based on user preferences or input, aiding in design and creativity.",
  "Word Counter Tool": "Count words, characters, and sentences in a text document with a word counter tool.",
  "Book Library App": "Organize and manage a digital library of books, keeping track of reading progress and favorite titles.",
  "Meme Generator": "Create and customize memes with a meme generator tool, adding humor to social media posts.",
  "Flashcard Quiz App": "Learn and review information through flashcard quizzes, enhancing memory and retention.",
  "Currency Converter": "Convert currencies quickly and accurately, providing real-time exchange rates.",
  "Digital Clock": "Display the current time with a digital clock application, offering various customization options.",
  "Responsive Landing Page": "Build a landing page with responsive design, ensuring a seamless user experience across devices.",
  "Memory Matching Game": "Challenge memory skills with a classic memory matching game, featuring various themes and difficulty levels.",
  "Interactive Quiz Game": "Create an engaging quiz game with interactive questions and diverse topics.",
  "Contact Form for a Website": "Integrate a contact form into a website, allowing users to send messages and inquiries.",
  "Simple Paint App": "Unleash creativity with a simple paint application, featuring basic drawing and editing tools.",
  "Personal Finance Tracker": "Track income, expenses, and savings to manage personal finances effectively.",
  "Movie Recommendation App": "Receive personalized movie recommendations based on user preferences and viewing history.",
  "Recipe Search App": "Search and discover new recipes based on ingredients, cuisine, or dietary preferences."
};


const showDetails = () => {
  detailsContainer.classList.remove("hidden");
  const projectName = name.value;
  projectDetails.textContent = projectDetailsMap[projectName] || "Additional details about the project can go here.";
}

const hideDetails = () => {
  detailsContainer.classList.add("hidden");
}

update.addEventListener("click", function (event) {
  updateWords();
});

details.addEventListener("click", function (event) {
  showDetails();
});

updateWords();  // Initialize on page load

const projectHintsMap = {
  "To-Do List App": [
    "Prioritize task management features such as adding, editing, and deleting tasks.",
    "Consider implementing reminders and notifications for important tasks.",
    "Explore options for organizing tasks using categories or labels."
  ],
  "E-book Reader": [
    "Focus on creating a user-friendly interface for reading digital books.",
    "Consider implementing features like bookmarking and highlighting.",
    "Explore options for adjusting font settings and supporting various e-book formats."
  ],
  "Chat Application": [
    "Implement real-time messaging using technologies like WebSockets.",
    "Consider adding features like group chats and multimedia support.",
    "Explore ways to enhance user engagement and interaction."
  ],
  "Recipe Sharing Platform": [
    "Allow users to create and share their favorite recipes.",
    "Implement a user-friendly recipe editor for easy recipe creation.",
    "Consider adding features like rating and commenting on recipes."
  ],
  "Social Network for Pets": [
    "Create user profiles for pets, including pictures and descriptions.",
    "Implement a feed for users to share updates and stories about their pets.",
    "Consider adding social features like likes and comments."
  ],
  "Music Streaming App": [
    "Design an intuitive interface for browsing and listening to music.",
    "Implement features like playlists, recommendations, and favorites.",
    "Consider options for offline listening and social sharing of music."
  ],
  "Digital Library": [
    "Create a searchable database of books, articles, and multimedia resources.",
    "Implement categorization, tags, and filters for efficient organization.",
    "Consider adding a recommendation system based on user preferences."
  ],
  "Personal Portfolio Website": [
    "Showcase your projects, skills, and achievements in a well-organized manner.",
    "Design a clean and professional layout that reflects your personal brand.",
    "Consider adding a blog or news section for regular updates."
  ],
  "Smart Shopping List": [
    "Create a user-friendly interface for managing shopping lists.",
    "Implement features like categorizing items, setting quantities, and marking as purchased.",
    "Explore options for syncing the shopping list across devices."
  ],
  "Pet Adoption Platform": [
    "Create user profiles for shelters and individuals looking to adopt pets.",
    "Implement a search feature for finding pets based on species, age, and location.",
    "Consider adding detailed profiles for each pet with pictures and descriptions."
  ],
  "Language Learning App": [
    "Focus on creating interactive lessons for language learners.",
    "Implement features like quizzes, pronunciation exercises, and vocabulary building.",
    "Consider incorporating a spaced repetition system for effective learning."
  ],
  "Expense Tracker": [
    "Design a user-friendly interface for tracking expenses and income.",
    "Implement categories and tags for organizing transactions.",
    "Consider adding budgeting features to help users manage their finances."
  ],
  "Budget Planner": [
    "Create a comprehensive budgeting tool with income and expense tracking.",
    "Implement features for setting financial goals and monitoring progress.",
    "Consider adding visualizations such as charts and graphs for better insights."
  ],
  "Feedback Collection System": [
    "Design a user-friendly feedback form for collecting user opinions.",
    "Implement features for analyzing and categorizing feedback.",
    "Consider adding an option for users to provide feedback anonymously."
  ],
  "Job Portal": [
    "Create user profiles for job seekers and employers.",
    "Implement features like job searching, application submissions, and resume uploads.",
    "Consider adding features for employers to post job openings and manage applications."
  ],
  "Task Management System": [
    "Design a robust task management system with features for assigning tasks and tracking progress.",
    "Implement collaboration features for team projects.",
    "Consider adding integrations with popular productivity tools."
  ],
  "Weather App": [
    "Focus on displaying accurate and up-to-date weather information.",
    "Implement features like hourly and weekly forecasts.",
    "Consider adding geolocation features for personalized weather updates."
  ],
  "Online Learning Platform": [
    "Create a platform for hosting and accessing educational content.",
    "Implement features like course creation, enrollment, and progress tracking.",
    "Consider incorporating interactive elements such as quizzes and discussions."
  ],
  "Smart Home Security System": [
    "Design a user-friendly interface for monitoring and controlling home security devices.",
    "Implement features like video surveillance, door/window sensors, and alarms.",
    "Consider integrating with smart home platforms for seamless automation."
  ],
  "Smart Parking System": [
    "Create a system for monitoring and managing parking spaces.",
    "Implement features like real-time parking availability updates and reservations.",
    "Consider incorporating sensors or cameras for accurate parking space detection."
  ],
  "Smart Irrigation System": [
    "Design an automated irrigation system based on weather conditions.",
    "Implement features for scheduling watering times and adjusting settings.",
    "Consider adding sensors for soil moisture detection to optimize watering."
  ],
  "Digital Art Gallery": [
    "Create an online gallery for showcasing digital art pieces.",
    "Implement features for artists to upload and share their work.",
    "Consider adding a rating system for art pieces and a comment section."
  ],
  "Personal Finance Assistant": [
    "Design a virtual assistant to provide personalized financial advice.",
    "Implement features for expense tracking, budgeting, and investment recommendations.",
    "Consider adding machine learning algorithms for improved financial insights."
  ],
  "Virtual Reality Experience": [
    "Create an immersive virtual reality experience with engaging content.",
    "Implement features like 3D environments, interactive elements, and realistic simulations.",
    "Consider supporting various VR devices for a wider audience."
  ],
  "Collaborative Whiteboard App": [
    "Design a collaborative space for users to share ideas using a digital whiteboard.",
    "Implement real-time drawing and editing features for a seamless collaborative experience.",
    "Consider adding tools for annotations, shapes, and text."
  ],
  "Augmented Reality Navigation App": [
    "Create an app that enhances real-world navigation using augmented reality.",
    "Implement features like AR markers for directions and points of interest.",
    "Consider adding location-based information overlays for a richer user experience."
  ],
  "AI-powered Chatbot": [
    "Design an intelligent chatbot with natural language processing capabilities.",
    "Implement features for answering user queries, providing assistance, and learning from interactions.",
    "Consider adding integration with external APIs for more extensive functionality."
  ],
  "Issue Tracking System": [
    "Create a robust system for tracking and managing software issues.",
    "Implement features for issue creation, assignment, and progress tracking.",
    "Consider adding features for categorizing issues and generating reports."
  ],
  "Content Management System": [
    "Design a flexible and user-friendly content management system for websites.",
    "Implement features for creating, editing, and organizing digital content.",
    "Consider adding collaboration features for multiple users to work on content simultaneously."
  ],
  "Stock Portfolio Tracker": [
    "Create a tool for users to monitor and analyze their stock portfolios.",
    "Implement features like real-time stock quotes, portfolio diversification analysis, and historical performance tracking.",
    "Consider adding alerts for significant stock price changes or portfolio milestones."
  ],
  "Dating App": [
    "Design a user-friendly dating app with features for creating profiles and matching.",
    "Implement features for swiping, messaging, and discovering new matches.",
    "Consider incorporating safety features and user verification processes."
  ],
  "Gaming Platform": [
    "Create a platform for hosting and playing online games.",
    "Implement features for user accounts, game libraries, and multiplayer functionality.",
    "Consider adding social features like friend requests and leaderboards."
  ],
  "Travel Itinerary Generator": [
    "Design a tool for creating and organizing travel itineraries.",
    "Implement features for adding destinations, booking information, and daily schedules.",
    "Consider integrating with travel APIs for real-time information on flights, hotels, and attractions."
  ],
  "Health and Fitness App": [
    "Create a comprehensive health and fitness app with features for tracking workouts, nutrition, and overall well-being.",
    "Implement features like goal setting, progress tracking, and personalized workout plans.",
    "Consider integrating wearable device support for automatic data syncing."
  ],
  "Event Management System": [
    "Design a system for planning and organizing events.",
    "Implement features for creating events, sending invitations, and managing RSVPs.",
    "Consider adding a calendar view for users to visualize their upcoming events."
  ],
  "Employee Attendance System": [
    "Create a system for tracking employee attendance and working hours.",
    "Implement features for clocking in and out, managing leave requests, and generating reports.",
    "Consider integrating with biometric systems for secure attendance tracking."
  ],
  "Blog Platform": [
    "Design a user-friendly platform for creating and publishing blog posts.",
    "Implement features for categorizing posts, managing comments, and tracking analytics.",
    "Consider adding a user-friendly editor with rich text formatting options."
  ],
  "Online Marketplace": [
    "Create a platform for buying and selling products online.",
    "Implement features for product listings, shopping carts, and secure payment processing.",
    "Consider adding seller profiles and user reviews for a trustworthy marketplace experience."
  ],
  "Inventory Management System": [
    "Design a system for tracking and managing inventory in a business.",
    "Implement features for adding products, managing stock levels, and generating reports.",
    "Consider integrating with barcode scanners for efficient inventory tracking."
  ],
  "Real Estate Management System": [
    "Create a system for managing real estate properties and listings.",
    "Implement features for property details, search functionality, and contact forms.",
    "Consider adding features for virtual property tours and interactive maps."
  ],
  "Car Rental Service": [
    "Design an online platform for renting and booking cars.",
    "Implement features for searching available cars, making reservations, and managing bookings.",
    "Consider adding features for user profiles, vehicle details, and payment processing."
  ],
  "Appointment Scheduling App": [
    "Create a tool for scheduling appointments and managing calendars.",
    "Implement features for setting availability, sending reminders, and handling cancellations.",
    "Consider integrating with online communication tools for virtual appointments."
  ],
  "Video Streaming Service": [
    "Design a platform for hosting and streaming video content.",
    "Implement features for user accounts, video libraries, and content recommendations.",
    "Consider adding support for live streaming and user-generated content."
  ],
  "Cryptocurrency Tracker": [
    "Create a tool for tracking real-time cryptocurrency prices and market trends.",
    "Implement features for tracking multiple cryptocurrencies, historical data, and portfolio management.",
    "Consider adding price alerts and news feeds for informed decision-making."
  ],
  "Restaurant Ordering System": [
    "Design an online system for ordering food from restaurants.",
    "Implement features for browsing menus, placing orders, and choosing delivery or pickup.",
    "Consider adding a review system for users to share their dining experiences."
  ],
  "Virtual Classroom": [
    "Create an online learning platform with features for live classes, discussions, and assignments.",
    "Implement tools for teachers to manage classes, grade assignments, and interact with students.",
    "Consider adding features for screen sharing, virtual whiteboards, and breakout rooms."
  ],
  "Job Candidate Tracker": [
    "Design a system for managing job candidates during the recruitment process.",
    "Implement features for creating candidate profiles, scheduling interviews, and managing application statuses.",
    "Consider integrating with HR tools for a seamless recruitment workflow."
  ],
  "Home Automation System": [
    "Create a platform for controlling and automating smart home devices.",
    "Implement features for managing lights, thermostats, security systems, and more.",
    "Consider adding support for voice commands and integration with popular smart home protocols."
  ],
  "Expense Sharing App": [
    "Design a tool for easily splitting and tracking shared expenses among friends or roommates.",
    "Implement features for creating expense groups, adding bills, and settling debts.",
    "Consider adding notifications and reminders for pending expenses."
  ],
  "Travel Expense Tracker": [
    "Create an app for tracking and managing travel expenses during trips.",
    "Implement features for adding expenses, categorizing costs, and generating expense reports.",
    "Consider integrating with currency conversion tools for accurate expense tracking in different currencies."
  ],
  "Community Forum": [
    "Design a platform for users to discuss and share information on various topics.",
    "Implement features for creating threads, posting replies, and moderating content.",
    "Consider adding categories and tags for organized content discovery."
  ],
  "Language Translation App": [
    "Create a tool for translating text between different languages.",
    "Implement features for text input, language selection, and accurate translation results.",
    "Consider adding features for voice translation and offline language packs."
  ],
  "Crowdfunding Platform": [
    "Design a platform for creators to fund their projects through crowdfunding.",
    "Implement features for creating campaigns, pledging support, and tracking campaign progress.",
    "Consider adding reward tiers and communication tools for campaign creators and backers."
  ],  "To-Do List App": [
    "Prioritize task management features such as adding, editing, and deleting tasks.",
    "Consider implementing reminders and notifications for important tasks.",
    "Explore options for organizing tasks using categories or labels."
  ],
  "E-book Reader": [
    "Focus on creating a user-friendly interface for reading digital books.",
    "Consider implementing features like bookmarking and highlighting.",
    "Explore options for adjusting font settings and supporting various e-book formats."
  ],
  "Chat Application": [
    "Implement real-time messaging using technologies like WebSockets.",
    "Consider adding features like group chats and multimedia support.",
    "Explore ways to enhance user engagement and interaction."
  ],
  "Recipe Sharing Platform": [
    "Allow users to create and share their favorite recipes.",
    "Implement a user-friendly recipe editor for easy recipe creation.",
    "Consider adding features like rating and commenting on recipes."
  ],
  "Social Network for Pets": [
    "Create user profiles for pets, including pictures and descriptions.",
    "Implement a feed for users to share updates and stories about their pets.",
    "Consider adding social features like likes and comments."
  ],
  "Music Streaming App": [
    "Design an intuitive interface for browsing and listening to music.",
    "Implement features like playlists, recommendations, and favorites.",
    "Consider options for offline listening and social sharing of music."
  ],
  "Digital Library": [
    "Create a searchable database of books, articles, and multimedia resources.",
    "Implement categorization, tags, and filters for efficient organization.",
    "Consider adding a recommendation system based on user preferences."
  ],
  "Personal Portfolio Website": [
    "Showcase your projects, skills, and achievements in a well-organized manner.",
    "Design a clean and professional layout that reflects your personal brand.",
    "Consider adding a blog or news section for regular updates."
  ],
  "Smart Shopping List": [
    "Create a user-friendly interface for managing shopping lists.",
    "Implement features like categorizing items, setting quantities, and marking as purchased.",
    "Explore options for syncing the shopping list across devices."
  ],
  "Pet Adoption Platform": [
    "Create user profiles for shelters and individuals looking to adopt pets.",
    "Implement a search feature for finding pets based on species, age, and location.",
    "Consider adding detailed profiles for each pet with pictures and descriptions."
  ],
  "Language Learning App": [
    "Design interactive lessons for language learning.",
    "Implement features like quizzes, flashcards, and pronunciation exercises.",
    "Consider incorporating a progress tracking system to motivate learners."
  ],
  "Expense Tracker": [
    "Create an easy-to-use interface for tracking income and expenses.",
    "Implement categories and tags for organizing different types of expenses.",
    "Consider adding budgeting features and financial insights."
  ],
  "Budget Planner": [
    "Design a comprehensive budgeting tool with income and expense tracking.",
    "Implement goal-setting features for saving and financial planning.",
    "Explore options for generating reports and visualizing budget trends."
  ],
  "Feedback Collection System": [
    "Create a user-friendly form for collecting feedback.",
    "Implement options for rating, comments, and file uploads.",
    "Consider adding analytics to analyze and visualize feedback data."
  ],
  "Job Portal": [
    "Design an intuitive platform for job seekers to find and apply for jobs.",
    "Implement features like resume upload, job alerts, and application tracking.",
    "Consider adding employer features for posting jobs and managing applications."
  ],
  "Task Management System": [
    "Create a versatile task management system with user-friendly features.",
    "Implement collaboration tools such as task assignment and comments.",
    "Consider integrating with calendars and other productivity tools."
  ],
  "Weather App": [
    "Design a clean and visually appealing interface for displaying weather information.",
    "Implement features like real-time weather updates, forecasts, and location-based weather.",
    "Consider adding additional features like radar maps or severe weather alerts."
  ],
  "Online Learning Platform": [
    "Create a platform for hosting online courses with diverse content.",
    "Implement features like video lectures, quizzes, and discussion forums.",
    "Consider incorporating a certification or credential system for completed courses."
  ],
  "Smart Home Security System": [
    "Design a comprehensive security system for monitoring and controlling home security.",
    "Implement features like video surveillance, door/window sensors, and alarm systems.",
    "Consider integrating with smart home devices for automation and control."
  ],
  "Smart Parking System": [
    "Create a system for efficiently managing parking spaces.",
    "Implement features like real-time parking availability updates and reservation options.",
    "Consider incorporating sensors or cameras for smart parking space monitoring."
  ],
  "Smart Irrigation System": [
    "Design an automated irrigation system for efficient water usage.",
    "Implement features like soil moisture sensing, weather-based scheduling, and remote control.",
    "Consider incorporating water conservation strategies in the system."
  ],
  "Digital Art Gallery": [
    "Create an online platform for artists to showcase and sell their digital artwork.",
    "Implement features like artist profiles, gallery views, and artwork categories.",
    "Consider incorporating a secure payment system for art transactions."
  ],
  "Personal Finance Assistant": [
    "Develop an intelligent finance assistant for managing personal finances.",
    "Implement features like expense tracking, budgeting, and investment analysis.",
    "Consider using AI for providing personalized financial advice."
  ],
  "Virtual Reality Experience": [
    "Create an immersive virtual reality experience with engaging content.",
    "Implement interactive elements, 3D environments, and realistic simulations.",
    "Consider compatibility with popular virtual reality headsets and platforms."
  ],
  "Collaborative Whiteboard App": [
    "Design a collaborative platform for real-time whiteboard collaboration.",
    "Implement features like drawing tools, text editing, and collaborative document editing.",
    "Consider adding features for remote collaboration and real-time updates."
  ],
  "Augmented Reality Navigation App": [
    "Create an app that utilizes augmented reality for navigation and exploration.",
    "Implement features like AR markers, location-based information, and turn-by-turn directions.",
    "Consider incorporating points of interest and interactive AR elements."
  ],
  "AI-powered Chatbot": [
    "Develop a chatbot with artificial intelligence capabilities for natural language understanding.",
    "Implement features like conversation flow, intent recognition, and user context management.",
    "Consider integrating with popular messaging platforms for wider accessibility."
  ],
  "Issue Tracking System": [
    "Design a comprehensive system for tracking and managing software issues.",
    "Implement features like issue creation, assignment, status tracking, and commenting.",
    "Consider incorporating features for bug tracking and release planning."
  ],
  "Content Management System": [
    "Create a flexible content management system for managing digital content.",
    "Implement features like content creation, editing, categorization, and version control.",
    "Consider customization options for different types of content websites."
  ],
  "Stock Portfolio Tracker": [
    "Develop a stock portfolio tracker for monitoring investments.",
    "Implement features like real-time stock quotes, portfolio performance analytics, and news updates.",
    "Consider integrating with financial APIs for accurate and up-to-date information."
  ],
  "Dating App": [
    "Design an intuitive and user-friendly dating app.",
    "Implement features like user profiles, matching algorithms, and chat functionality.",
    "Consider incorporating safety features and user verification methods."
  ],
  "Gaming Platform": [
    "Create a gaming platform with a diverse collection of games.",
    "Implement features like user profiles, multiplayer options, and in-game purchases.",
    "Consider incorporating features for game discovery and community interaction."
  ],
  "Travel Itinerary Generator": [
    "Develop a tool for generating and managing travel itineraries.",
    "Implement features like destination suggestions, trip planning, and budget tracking.",
    "Consider integrating with travel APIs for real-time information and booking."
  ],
  "Health and Fitness App": [
    "Design an app for tracking health and fitness activities.",
    "Implement features like workout tracking, meal planning, and health metrics monitoring.",
    "Consider incorporating gamification elements for user motivation."
  ],
  "Event Management System": [
    "Create a comprehensive system for managing events and conferences.",
    "Implement features like event creation, attendee management, and ticketing.",
    "Consider incorporating options for virtual events and live streaming."
  ],
  "Employee Attendance System": [
    "Develop a system for tracking and managing employee attendance.",
    "Implement features like biometric authentication, shift scheduling, and leave management.",
    "Consider integrating with HR systems for seamless workforce management."
  ],
  "Blog Platform": [
    "Create a platform for publishing and managing blog content.",
    "Implement features like post creation, commenting, and content categorization.",
    "Consider customization options for bloggers and content creators."
  ],
  "Online Marketplace": [
    "Design an online marketplace with a user-friendly interface.",
    "Implement features like product listings, reviews, and secure payment options.",
    "Consider incorporating seller profiles and a robust search system."
  ],
  "Inventory Management System": [
    "Develop a system for efficiently managing inventory and stock.",
    "Implement features like product tracking, restocking alerts, and order processing.",
    "Consider integrating with barcode scanning for faster inventory management."
  ],
  "Real Estate Management System": [
    "Create a system for managing real estate properties and transactions.",
    "Implement features like property listings, virtual tours, and contact forms.",
    "Consider incorporating options for property valuation and mortgage calculators."
  ],
  "Car Rental Service": [
    "Develop an online platform for renting and managing car reservations.",
    "Implement features like vehicle listings, reservation management, and user reviews.",
    "Consider incorporating a secure payment system for reservations."
  ],
  "Appointment Scheduling App": [
    "Create a user-friendly app for scheduling appointments and meetings.",
    "Implement features like calendar integration, availability tracking, and reminders.",
    "Consider options for group scheduling and video conferencing integration."
  ],
  "Video Streaming Service": [
    "Design a platform for streaming and sharing video content.",
    "Implement features like user channels, video uploads, and subscription options.",
    "Consider incorporating live streaming and interactive features."
  ],
  "Cryptocurrency Tracker": [
    "Develop a cryptocurrency tracker for monitoring prices and trends.",
    "Implement features like real-time price updates, portfolio tracking, and news alerts.",
    "Consider integrating with cryptocurrency APIs for accurate data."
  ],
  "Restaurant Ordering System": [
    "Create an online system for ordering food from restaurants.",
    "Implement features like menu browsing, order customization, and secure payment options.",
    "Consider incorporating options for delivery tracking and restaurant reviews."
  ],
  "Virtual Classroom": [
    "Develop a virtual classroom platform for online education.",
    "Implement features like live lectures, interactive quizzes, and student collaboration tools.",
    "Consider incorporating options for grading and attendance tracking."
  ],
  "Job Candidate Tracker": [
    "Create a system for tracking and managing job candidates in the hiring process.",
    "Implement features like resume parsing, interview scheduling, and candidate evaluation.",
    "Consider incorporating options for team collaboration in the hiring process."
  ],
  "Home Automation System": [
    "Develop a comprehensive home automation system for controlling smart devices.",
    "Implement features like smart lighting, thermostat control, and security system integration.",
    "Consider incorporating voice control and remote monitoring options."
  ],
  "Expense Sharing App": [
    "Create an app for easily splitting and tracking shared expenses among friends or groups.",
    "Implement features like expense categorization, bill splitting, and group budgeting.",
    "Consider incorporating options for sending reminders and notifications."
  ]
};

const showHints = () => {
  const projectName = name.value;
  const hints = projectHintsMap[projectName] || ["No hints available for this project."];

  alert("Hints:\n\n" + hints.join("\n"));
}

hints.addEventListener("click", function (event) {
  showHints();
}); 
