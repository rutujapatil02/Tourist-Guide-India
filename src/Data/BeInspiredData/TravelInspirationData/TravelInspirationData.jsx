// TravelInspirationData.jsx

// Use @/ or relative paths that accurately reflect your structure
// If your file is in src/Data/BeInspiredData/TravelInspirationData/
// You need to go up 4 levels to reach src/
import andamanVideo from '../../../assets/videos/StateVideos/Andaman nikobar.mp4';
import dargilingVideo from '../../../assets/videos/StateVideos/Dargiling.mp4';
import goaVideo from '../../../assets/videos/StateVideos/Goa.mp4';
import jaipurVideo from '../../../assets/videos/StateVideos/Jaipur.mp4';
import keralaVideo from '../../../assets/videos/StateVideos/Kerala.mp4';
import ladakhVideo from '../../../assets/videos/StateVideos/Ladakh.mp4';
import varanasiVideo from '../../../assets/videos/StateVideos/Varanasi.mp4';
import mahabaleshwarVideo from '../../../assets/videos/StateVideos/Mahabaleshvar.mp4';
import rishikeshVideo from '../../../assets/videos/StateVideos/Rishikesh.mp4';
import tajmahalVideo from '../../../assets/videos/StateVideos/Tajmahal.mp4';

// Use NAMED EXPORTS to avoid the 'default export' error
export const indiaVideoData = [
  { id: 1, name: "Varanasi's Sacred Aarti", video: varanasiVideo, category: "Spirituality" },
  { id: 2, name: "Andaman & Nicobar Islands", video: andamanVideo, category: "Beaches" },
  { id: 3, name: "The Beauty of Goa", video: goaVideo, category: "Leisure" },
  { id: 4, name: "Pink City Jaipur", video: jaipurVideo, category: "Culture" },
  { id: 5, name: "Kerala Backwaters", video: keralaVideo, category: "Nature" },
  { id: 6, name: "Highlands of Ladakh", video: ladakhVideo, category: "Adventure" },
  { id: 7, name: "Tea Gardens of Darjeeling", video: dargilingVideo, category: "Highlands" },
  { id: 8, name: "Mahabaleshwar Hills", video: mahabaleshwarVideo, category: "Nature" },
  { id: 9, name: "Spiritual Rishikesh", video: rishikeshVideo, category: "Spirituality" },
  { id: 10, name: "The Taj Mahal", video: tajmahalVideo, category: "Heritage" },
];

export const travelInspirationData = [
  { id: 101, name: "Rajasthan", img: "https://images.unsplash.com/photo-1599661046289-e318978567c4?w=800" },
  { id: 102, name: "Himachal", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800" },
  { id: 103, name: "Tamil Nadu", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800" },
];

// TravelInspirationData.js
export const indiaDestinations = [
  { id: 1, name: "Taj Mahal", category: "History", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800", location: "Agra, Uttar Pradesh" },
  { id: 2, name: "Varanasi Ghats", category: "Culture", img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800", location: "Varanasi, Uttar Pradesh" },
  { id: 3, name: "Leh Ladakh", category: "Nature", img: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800", location: "Ladakh" },
  { id: 4, name: "Munnar Tea Gardens", category: "Nature", img: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800", location: "Kerala" },
  // Add more based on your images...
];

// src/Data/BeInspiredData/TravelInspirationData/IndiaTravelListData.js

export const indiaVideoListData = [
  {
    id: 1,
    title: "Taj Mahal, Agra",
    location: "Agra, Uttar Pradesh",
    description: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife. The Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",
    imageUrl: "https://t3.ftcdn.net/jpg/03/04/85/26/360_F_304852693_nSOn9KvUgafgvZ6wM0CNaULYUa7xXBkA.jpg",
    imageCaption: "The Taj Mahal at sunrise © Incredible India",
    readTime: "5min",
  },
  {
    id: 2,
    title: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    description: "One of the oldest continually inhabited cities in the world. The riverfront steps, or ghats, lead down to the Ganges River where pilgrims perform ritual ablutions. The evening Ganga Aarti is a spiritual spectacle of light and chanting that has remained unchanged for centuries.",
    imageUrl: "https://t4.ftcdn.net/jpg/02/64/56/29/360_F_264562951_MQRFSoIUDhNi3RVJByRKGtD2sVtRJb4W.jpg",
    imageCaption: "Devotees at the Dashashwamedh Ghat © Tourism Uttar Pradesh",
    readTime: "6min",
  },
  {
    id: 3,
    title: "Hampi Monuments",
    location: "Vijayanagara District, Karnataka",
    description: "The austere, grandiose site of Hampi was the last capital of the great Hindu Kingdom of Vijayanagara. Its fabulously rich princes built Dravidian temples and palaces which won the admiration of travellers between the 14th and 16th centuries.",
    imageUrl: "https://t4.ftcdn.net/jpg/03/75/40/73/360_F_375407347_spt4AF5sxsIt9gBIKVzJl95tiQhEGNXy.jpg",
    imageCaption: "The Vitthala Temple complex © Karnataka Tourism",
    readTime: "4min",
  },
  {
    id: 4,
    title: "Amer Fort",
    location: "Jaipur, Rajasthan",
    description: "Known for its artistic style elements, Amer Fort is located high on a hill and is the principal tourist attraction in Jaipur. With its large ramparts and series of gates and cobbled paths, the fort overlooks Maota Lake, which is the main source of water for the Amer Palace.",
    imageUrl: "https://placestovisitinjaipur.com/wp-content/uploads/2024/09/Amer-Fort-4.jpg",
    imageCaption: "The majestic walls of Amer Fort © Rajasthan Tourism",
    readTime: "4min",
  },
  {
    id: 5,
    title: "Ajanta Caves",
    location: "Aurangabad, Maharashtra",
    description: "The first Buddhist cave monuments at Ajanta date from the 2nd and 1st centuries B.C. During the Gupta period (5th and 6th centuries A.D.), many more richly decorated caves were added. The paintings and sculptures are considered masterpieces of Buddhist religious art.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1697729588019-20a1f5a325d1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWphbnRhJTIwY2F2ZXN8ZW58MHx8MHx8fDA%3D",
    imageCaption: "Intricate rock-cut architecture of Cave 19 © Maharashtra Tourism",
    readTime: "7min",
  },
  {
    id: 6,
    title: "Konark Sun Temple",
    location: "Puri, Odisha",
    description: "On the shores of the Bay of Bengal, bathed in the rays of the rising sun, the temple at Konark is a monumental representation of the sun god Surya's chariot; its 24 wheels are decorated with symbolic designs and it is led by a team of six horses.",
    imageUrl: "https://thumbs.dreamstime.com/b/sun-temple-konark-india-27237609.jpg",
    imageCaption: "The iconic stone chariot wheel © Odisha Tourism",
    readTime: "5min",
  },
  {
    id: 7,
    title: "Kaziranga National Park",
    location: "Kanchanjuri, Assam",
    description: "In the heart of Assam, this park is one of the last areas in eastern India undisturbed by a human presence. It is inhabited by the world's largest population of one-horned rhinoceroses, as well as many mammals, including tigers, elephants, and panthers.",
    imageUrl: "https://media.istockphoto.com/id/1324063823/photo/one-horned-rhino-with-her-baby-at-grassland-with-sunrise-orange-sky-at-dawn.jpg?s=612x612&w=0&k=20&c=MuqpGmHWgRD39THlbUyIcBCsGAN9jwJ1tRMfC7Jq0hA=",
    imageCaption: "The Great Indian One-Horned Rhinoceros © Assam Tourism",
    readTime: "4min",
  },
  {
    id: 8,
    title: "Khajuraho Group of Monuments",
    location: "Chhatarpur, Madhya Pradesh",
    description: "The temples at Khajuraho were built during the Chandella dynasty. Only 20 temples remain; they fall into three distinct groups and belong to two different religions – Hinduism and Jainism. They strike a perfect balance between architecture and sculpture.",
    imageUrl: "https://media.istockphoto.com/id/528284252/photo/kjaruharo-temples-india.jpg?s=612x612&w=0&k=20&c=-iWM83PbINoAS5i_06cVjIDpe_yT0cE3uw0_iPoeWHM=", // Placeholder
    imageCaption: "Detailed carvings on Kandariya Mahadeva temple © MP Tourism",
    readTime: "6min",
  },
  {
    id: 9,
    title: "Western Ghats",
    location: "Across Maharashtra, Goa, Karnataka, Kerala",
    description: "Older than the Himalayas, the mountain chain of the Western Ghats represents geomorphic features of immense importance with unique biophysical and ecological processes. The site’s high montane forest ecosystems influence the Indian monsoon weather pattern.",
    imageUrl: "https://media.istockphoto.com/id/506921458/photo/western-ghats-mountains.jpg?s=612x612&w=0&k=20&c=Kalt0aRM5vG83bFKN4IlYJFt6ZiQSbkynOKwO0trnVw=",
    imageCaption: "The lush misty peaks of Munnar © Kerala Tourism",
    readTime: "5min",
  },
  {
    id: 10,
    title: "Humayun's Tomb",
    location: "Delhi",
    description: "This tomb, built in 1570, is of particular cultural significance as it was the first garden-tomb on the Indian subcontinent. It inspired several major architectural innovations, culminating in the construction of the Taj Mahal.",
    imageUrl: "https://www.sahapedia.org/sites/default/files/styles/sp_page_banner_800x800/public/_DSC0073_0.jpg?itok=FM0yRiNJ",
    imageCaption: "The Persian-style architecture of the Charbagh garden © Delhi Tourism",
    readTime: "4min",
  },
];

export const travelInspirationStoryData = [
  {
    id: 1,
    name: "Rajasthan",
    title: "Discovering the hidden gems of Rajasthan",
    location: "Rajasthan, India",
    img: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a",
    video: "https://v1.mixkit.co/videos/preview/mixkit-palace-of-the-winds-in-jaipur-india-40244-large.mp4"
  },
  {
    id: 2,
    name: "Varanasi",
    title: "The Spiritual Soul of India",
    location: "Uttar Pradesh, India",
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
    video: "https://v1.mixkit.co/videos/preview/mixkit-evening-ceremony-on-the-ganges-river-40248-large.mp4"
  },
  {
    id: 3,
    name: "Kerala",
    title: "Tranquil Backwaters and Greenery",
    location: "Kerala, India",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    video: "https://v1.mixkit.co/videos/preview/mixkit-traditional-boat-on-the-kerala-backwaters-40250-large.mp4"
  }
];