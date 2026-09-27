// ============================================================
//  SITE CONTENT
//  All the text on this website lives in this one file.
//  Edit these values to update the whole site — the React
//  components will pick up the changes automatically.
// ============================================================

export const TEACHER = {
  name: 'Anish Kumar',
  firstName: 'Anish',
  role: 'Tuition Teacher',
  subjectLine: 'Tuition Classes for School Children · Classes 1 – 12',
  tagline:
    'I help school children build strong fundamentals, real confidence and lifelong learning habits — with personal attention in every single class.',
  email: 'bkanish4@gmail.com',
  phone: '+917470999920',
  phoneDisplay: '+91 74709 99920',
  location: 'Bhilai, Chhattisgarh, India',
  address: 'Home tuition & small batches across Bhilai, Chhattisgarh',
  hours: 'Mon – Sat · 4:00 PM – 8:00 PM',
  image: '/assets/images/profile.jpg',
}

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/subjects', label: 'Subjects' },
  { to: '/schedule', label: 'Schedule & Fees' },
  { to: '/contact', label: 'Contact' },
]

export const STATS = [
  { value: 15, suffix: '+', label: 'Years of Teaching' },
  { value: 500, suffix: '+', label: 'Students Taught' },
  { value: 40, suffix: '+', label: 'School Toppers' },
  { value: 98, suffix: '%', label: 'Parent Satisfaction' },
]

export const FEATURES = [
  {
    icon: '👥',
    title: 'Small Batch Size',
    text: 'Limited students per batch so every child gets individual attention and a comfortable pace.',
  },
  {
    icon: '🧑‍🏫',
    title: 'Personal Attention',
    text: 'Each student is tracked individually — strengths, weak areas and learning speed.',
  },
  {
    icon: '📝',
    title: 'Regular Tests',
    text: 'Weekly tests and homework reviews keep learning measurable and parents informed.',
  },
  {
    icon: '💬',
    title: 'Doubt Solving',
    text: 'Open-doubt sessions and extra time for any concept a child finds difficult.',
  },
  {
    icon: '📊',
    title: 'Progress Reports',
    text: 'Monthly progress updates shared with parents, with clear next-step guidance.',
  },
  {
    icon: '🛡️',
    title: 'Safe Environment',
    text: 'A calm, disciplined and child-friendly space where kids feel confident to ask anything.',
  },
]

export const SUBJECT_GROUPS = [
  {
    group: 'Classes 1 – 5',
    subjects: ['All subjects', 'Maths', 'English', 'EVS', 'Hindi', 'Computer basics'],
  },
  {
    group: 'Classes 6 – 8',
    subjects: ['Maths', 'Science', 'English', 'Hindi', 'Social Studies', 'Computers'],
  },
  {
    group: 'Classes 9 – 10',
    subjects: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'],
  },
  {
    group: 'Classes 11 – 12',
    subjects: ['Physics', 'Chemistry', 'Maths', 'Computer Science'],
  },
]

export const SUBJECTS = [
  {
    name: 'Mathematics',
    icon: '🧮',
    tagline: 'Strong number sense, clear concepts and confident problem-solving.',
    classes: 'Classes 1 – 12',
  },
  {
    name: 'Physics',
    icon: '🔭',
    tagline: 'Concepts made simple with real-life examples and plenty of practice.',
    classes: 'Classes 9 – 12',
  },
  {
    name: 'Chemistry',
    icon: '🧪',
    tagline: 'Step-by-step learning of reactions, equations and concepts.',
    classes: 'Classes 9 – 12',
  },
  {
    name: 'Biology',
    icon: '🧬',
    tagline: 'Clear diagrams, easy memory aids and concept-first teaching.',
    classes: 'Classes 9 – 12',
  },
  {
    name: 'General Science',
    icon: '🔬',
    tagline: 'Curiosity-driven lessons that make science interesting again.',
    classes: 'Classes 1 – 8',
  },
  {
    name: 'English',
    icon: '📚',
    tagline: 'Grammar, vocabulary, reading and writing made simple.',
    classes: 'Classes 1 – 10',
  },
  {
    name: 'Hindi',
    icon: '✍️',
    tagline: 'Reading, writing and grammar with fun worksheets.',
    classes: 'Classes 1 – 10',
  },
  {
    name: 'Computers',
    icon: '💻',
    tagline: 'Computer fundamentals and programming basics for kids.',
    classes: 'Classes 3 – 12',
  },
  {
    name: 'Social Studies',
    icon: '🗺️',
    tagline: 'History, geography and civics taught with stories and maps.',
    classes: 'Classes 6 – 10',
  },
]

export const SCHEDULE_GROUPS = [
  {
    days: 'Monday – Friday',
    slots: [
      { time: '4:00 – 5:00 PM', label: 'Batch A · Classes 1 – 5' },
      { time: '5:15 – 6:15 PM', label: 'Batch B · Classes 6 – 8' },
      { time: '6:30 – 8:00 PM', label: 'Batch C · Classes 9 – 12' },
    ],
  },
  {
    days: 'Saturday',
    slots: [
      { time: '10:00 AM – 12:00 PM', label: 'Doubt clearing & weekly tests' },
      { time: '3:00 – 5:00 PM', label: 'Computers / extra practice' },
    ],
  },
  {
    days: 'Sunday',
    slots: [
      { time: 'By appointment', label: 'Home tuition & parent meetings' },
    ],
  },
]

export const FEES = [
  {
    group: 'Classes 1 – 5',
    note: 'All subjects',
    amount: '₹1,200 / month',
    accent: 'indigo',
  },
  {
    group: 'Classes 6 – 8',
    note: 'All subjects',
    amount: '₹1,500 / month',
    accent: 'violet',
  },
  {
    group: 'Classes 9 – 10',
    note: 'Maths · Science · English',
    amount: '₹2,000 / month',
    accent: 'amber',
  },
  {
    group: 'Classes 11 – 12',
    note: 'Physics · Chemistry · Maths · CS',
    amount: '₹2,500 / month',
    accent: 'rose',
  },
]

export const FEE_NOTES = [
  'One free demo class before you decide',
  'Monthly fees — pay by cash or UPI',
  '10% discount for siblings studying together',
  'No hidden charges, no admission fee',
]

// ------------------------------------------------------------
// Note: these testimonials are sample content.
// Replace them with real feedback from your students' parents.
// ------------------------------------------------------------
export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Parent of a Class 5 student',
    rating: 5,
    quote:
      'My daughter used to fear Maths. Within two months of joining Anish sir\u2019s classes, her marks went up and she actually enjoys solving problems now. The monthly progress reports are a big help.',
  },
  {
    name: 'Rahul Verma',
    role: 'Parent of Class 8 & 10 students',
    rating: 5,
    quote:
      'Both my children attend different batches and the attention they get is remarkable. Clear explanations, regular tests and honest feedback to parents — exactly what we were looking for.',
  },
  {
    name: 'Sunita Tiwari',
    role: 'Parent of a Class 3 student',
    rating: 5,
    quote:
      'The small batch size makes all the difference. My son is a shy kid but he now asks questions freely. Very patient and caring teacher, and the fee is very reasonable too.',
  },
]

export const STEPS = [
  {
    icon: '📞',
    title: 'Get in Touch',
    text: 'Call or WhatsApp us for an enquiry. We answer all questions about batches and fees.',
  },
  {
    icon: '🎓',
    title: 'Free Demo Class',
    text: 'Your child attends one free demo class so you can judge the teaching style yourself.',
  },
  {
    icon: '📈',
    title: 'Track Progress',
    text: 'After joining, get weekly tests, homework reviews and monthly progress reports.',
  },
]

export const EDUCATION = [
  {
    title: 'M.Tech — Computer Science',
    org: 'MATS University, Raipur',
    detail: 'Postgraduate studies in Computer Science & Engineering.',
  },
  {
    title: 'Professional Software Training',
    org: 'Tata CMC · Naresh i Technologies · Oracle',
    detail: 'Software development training, Advanced Java (JDBC) and database programming.',
  },
]

export const CERTIFICATIONS = [
  'Oracle 9i Fundamentals — Oracle',
  'Advanced Java (JDBC Fundamentals) — Naresh i Technologies',
  'Database Programming & SQL Fundamentals',
  'Software Development Training — Tata CMC',
]

export const VALUES = [
  {
    icon: '🎯',
    title: 'Concept First',
    text: 'Children learn the “why” behind every topic, not just the “how”. No rote learning.',
  },
  {
    icon: '🕰️',
    title: 'Discipline & Routine',
    text: 'Regular attendance, fixed timings and consistent practice build strong study habits.',
  },
  {
    icon: '🤝',
    title: 'Parent Partnership',
    text: 'Parents are treated as partners — open communication at every stage.',
  },
  {
    icon: '❤️',
    title: 'Care First',
    text: 'Every child is different. Lessons are adjusted to their speed and personality.',
  },
]

export const SOCIAL_LINKS = [
  { name: 'WhatsApp', url: 'https://wa.me/917470999920' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'YouTube', url: 'https://youtube.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
]