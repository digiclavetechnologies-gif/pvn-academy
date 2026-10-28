import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, Award, Bell, BookOpen, Check, ChevronDown, Clock3, ExternalLink, GraduationCap,
  Heart, Instagram, Laptop, Lightbulb, MapPin, Menu, MessageCircle, Phone, Play, Quote,
  Smartphone,
  ShieldCheck, Sparkles, Star, Target, Users, X, Youtube
} from 'lucide-react';
import './styles.css';

// Edit all institute content here. Fees stay disabled until SHOW_FEES is set to true.
const CONFIG = {
  name: 'Padmini Vidhya Niketan',
  location: 'Laxmi Nagar',
  tagline: 'Best Coaching for Class 10th, 11th & 12th',
  about: 'A premier institute in Laxmi Nagar, Delhi offering coaching for Class 10th, 11th, 12th, JEE Maths, CA Foundation and CMA.',
  phone: '+91 99110 00896',
  phoneHref: 'tel:+919911000896',
  whatsapp: 'https://wa.me/919911000896',
  address: 'F-246, Gali No. 3, Mangal Bazar, Block F, Laxmi Nagar, New Delhi 110092',
  hours: 'Open till 8 PM',
  rating: '5.0',
  reviewCount: 28,
  SHOW_FEES: false,
  emailFormspreeEndpoint: '',
  logo: '/padmini_logo.png',
  heroPhoto: '/pvn-students-group.jpeg',
  studentAppUrl: 'https://ehkku.on-app.in/app/home?orgCode=ehkku',
  youtube: [
    { name: 'Padmini Vidhya Niketan', url: 'https://youtube.com/@padminividhyaniketan', description: 'Concepts made simple, one lesson at a time.', videos: [] },
    { name: 'Padmini Vidhya Niketan Edu', url: 'https://youtube.com/@pvnedu', description: 'Exam-ready learning for ambitious students.', videos: [] }
  ],
  courses: [
    { name: 'Class 10th', detail: 'Strong foundations for board success', icon: BookOpen },
    { name: 'Class 11th', detail: 'Build confidence with every concept', icon: Lightbulb },
    { name: 'Class 12th', detail: 'Focused support for your final year', icon: Target },
    { name: 'JEE Maths', detail: 'Problem-solving that goes beyond the textbook', icon: Sparkles },
    { name: 'CA Foundation', detail: 'Clear concepts for a confident start', icon: GraduationCap },
    { name: 'CMA Foundation', detail: 'A structured path to your professional goal', icon: Award },
    { name: 'CMA Inter (OMSM)', detail: 'Specialist guidance for advanced learners', icon: ShieldCheck }
  ],
  timetable: [
    { name: 'Class 10', slots: ['Mon / Wed / Fri · 5–6 PM', 'Tue / Thu / Sat · 6–7 PM'] },
    { name: 'Class 11', slots: ['Mon / Wed / Fri · 7–8 PM', 'Tue / Thu / Sat · 5–6 PM'] },
    { name: 'Class 12', slots: ['Mon / Wed / Fri · 4–5 PM', 'Tue / Thu / Sat · 6–7 PM'] },
    { name: 'CA Foundation', slots: ['12 PM–2 PM'] },
    { name: 'CMA Foundation', slots: ['10:30 AM–12 PM'] },
    { name: 'CMA Inter (OMSM)', slots: ['2 PM–4 PM'] },
    { name: 'JEE Maths', slots: ['Contact us for timings'] }
  ],
  faculty: {
    name: 'Amaarendra Kumar',
    photo: '/faculty-amarendra.jpeg',
    badge: 'ICSI & ICMAI Visiting Faculty',
    credentials: 'M.Sc (Maths), M.Phil · 18+ years of teaching experience',
    bio: 'Specialist in Mathematics, Statistics and Operations Research. Visiting faculty of ICSI and ICMAI, member of the editorial board of various publications. Teaching style is based on conceptual clarity, effective and adaptive.',
    teaches: 'Class 11–12 Maths, IIT-JEE, CA Foundation, CMA Foundation, CMA Inter (Operation Management), CA Final (Operation Research), CS Foundation (Statistics), Graduation and MBA (Maths, Statistics, Quantitative Technique).'
  },
  toppers: [
    { name: 'Bhumika', score: 96, photo: '/result-bhumika.jpeg' },
    { name: 'Karan', score: 95, photo: '/result-karan-95.jpeg' },
    { name: 'Khushi', score: 95, photo: '/result-khushi.jpeg' },
    { name: 'Ankita', score: 95, photo: '/result-ankita.jpeg' },
    { name: 'Jessica Saini', score: 95, photo: '/result-jessica-saini.jpeg' },
    { name: 'Priyanshu Sati', score: 95, photo: '/result-priyanshu-sati.jpeg' },
    { name: 'Jaanvi Khemka', score: 94, photo: '/result-jaanvi-khemka.jpeg' },
    { name: 'Karan', score: 92, photo: '/result-karan-92.jpeg' },
    { name: 'Tushnika Chaudhary', score: 90, photo: '/result-tushnika.jpeg' }
  ],
  reviews: [
    'The highlighting point is the quality and commitment of the teaching staff.',
    'The experience with this coaching has been really transformative for me.',
    'It is a great place to learn.'
  ],
  highlights: [['18+', 'Years teaching experience'], ['5.0', 'Google rating'], ['12', 'Toppers up to 96%'], ['90%+', 'Results']]
};

const navItems = ['Home', 'Courses', 'Faculty', 'Results', 'Videos', 'Contact'];
const waMessage = (text) => `${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function SectionTitle({ eyebrow, title, copy, light = false }) {
  return <div className={`section-title reveal ${light ? 'light' : ''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeBatch, setActiveBatch] = useState('Class 10');
  const [review, setReview] = useState(0);
  const [formState, setFormState] = useState('idle');
  useReveal();

  const submitForm = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    setFormState('loading');
    const text = `Hello Padmini Vidhya Niketan! I would like to book a free demo class.%0AStudent: ${data.student}%0AParent: ${data.parent}%0APhone: ${data.phone}%0AClass: ${data.class}%0ABatch: ${data.batch}%0AMode: ${data.mode}%0AMessage: ${data.message || 'None'}`;
    window.open(`${CONFIG.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
    setTimeout(() => setFormState('success'), 500);
  };

  return <div className="app">
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Padmini Vidhya Niketan home">
        <img src={CONFIG.logo} alt="Padmini Vidhya Niketan logo" />
        <span><strong>Padmini Vidhya Niketan</strong><small>Coaching institute · Laxmi Nagar</small></span>
      </a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        <a className="nav-app" href={CONFIG.studentAppUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Student App <ExternalLink size={14} /></a>
        <a className="nav-cta" href="#book">Book Free Demo <ArrowRight size={16} /></a>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="blob blob-one" /><div className="blob blob-two" />
        <div className="hero-content reveal">
          <div className="pill"><span className="pulse-dot" /> Trusted learning since 18+ years</div>
          <h1>Learn with clarity.<br /><span>Grow with confidence.</span></h1>
          <p className="hero-lead">{CONFIG.tagline}</p>
          <p className="hero-sub">Offline & Online Batches <i /> English Medium <i /> Individual Guidance</p>
          <div className="hero-actions">
            <a className="button primary" href="#book">Book Free Demo Class <ArrowRight size={18} /></a>
            <a className="button ghost" href={CONFIG.phoneHref}><Phone size={17} /> Call Now</a>
            <a className="button app-button" href={CONFIG.studentAppUrl} target="_blank" rel="noopener noreferrer"><Smartphone size={17} /> Student App <ExternalLink size={14} /></a>
          </div>
          <div className="hero-trust"><div className="avatar-stack"><span>AV</span><span>SK</span><span>RJ</span></div><span>Parents choose us for <b>personal attention</b></span></div>
        </div>
        <div className="hero-visual reveal">
          <div className="hero-card">
            <div className="hero-student"><img src={CONFIG.heroPhoto} alt="Padmini Vidhya Niketan faculty and students" /></div>
            <div className="float-badge badge-trial"><Sparkles size={16} /><span><b>10 Days</b><small>Free Trial Classes</small></span></div>
            <div className="float-badge badge-rating"><Star size={16} fill="currentColor" /><span><b>5.0</b><small>on Google · 28 reviews</small></span></div>
            <div className="scribble">Your success<br /><b>starts here</b> ✦</div>
          </div>
        </div>
      </section>

      <section className="highlight-strip" aria-label="Institute highlights">
        {CONFIG.highlights.map(([number, label]) => <div className="highlight" key={label}><strong>{number}</strong><span>{label}</span></div>)}
      </section>

      <section className="app-promo-section">
        <div className="app-promo reveal">
          <div className="app-promo-icon"><Smartphone size={27} /></div>
          <div className="app-promo-copy"><span className="eyebrow">Learning, all together</span><h2>Learn on our App</h2><p>Notes, classes and updates in one place.</p></div>
          <div className="app-promo-features"><span><BookOpen size={16} /> Notes</span><span><Play size={16} /> Classes</span><span><Bell size={16} /> Updates</span></div>
          <a className="button primary" href={CONFIG.studentAppUrl} target="_blank" rel="noopener noreferrer">Open App <ExternalLink size={15} /></a>
        </div>
      </section>

      <section className="section why" id="why">
        <SectionTitle eyebrow="Why Padmini Vidhya Niketan" title="A little extra care makes a big difference." copy={CONFIG.about} />
        <div className="feature-grid">{[
          [Sparkles, '10 Days Free Trial Classes'], [BookOpen, 'Twice Revision Before Annual Exam'], [Award, 'Study Material Provided'], [Check, 'Weekly Exams'],
          [MessageCircle, 'Doubt Clearing Sessions'], [Laptop, 'English Medium'], [Heart, 'Individual Guidance'], [Users, 'Offline + Online Batches']
        ].map(([Icon, text]) => <div className="feature-card reveal" key={text}><div className="icon-box"><Icon size={20} /></div><h3>{text}</h3><span className="arrow-circle"><ArrowRight size={15} /></span></div>)}</div>
      </section>

      <section className="section courses-section" id="courses">
        <SectionTitle eyebrow="Explore programmes" title="The right support for every next step." copy="From school foundations to professional courses, learn in a focused, encouraging environment." />
        <div className="course-grid">{CONFIG.courses.map(({ name, detail, icon: Icon }, index) => <article className={`course-card reveal ${index === 2 ? 'featured-course' : ''}`} key={name}>
          <div className="course-icon"><Icon size={22} /></div><span className="course-number">0{index + 1}</span><h3>{name}</h3><p>{detail}</p>
          <a href={waMessage(`Hello, I would like to enquire about ${name}.`)} target="_blank" rel="noreferrer">Enquire <ArrowRight size={15} /></a>
        </article>)}</div>
      </section>

      <section className="section timetable-section" id="timetable">
        <div className="timetable-layout">
          <SectionTitle eyebrow="Plan your week" title="A batch that fits your rhythm." copy="Choose a schedule that keeps learning consistent and manageable." />
          <div className="batch-tabs" role="tablist">{CONFIG.timetable.map((batch) => <button key={batch.name} className={activeBatch === batch.name ? 'active' : ''} onClick={() => setActiveBatch(batch.name)}>{batch.name}</button>)}</div>
          <div className="schedule-card"><div className="schedule-icon"><Clock3 /></div><div><span className="eyebrow">Available timing</span><h3>{activeBatch}</h3>{CONFIG.timetable.find((batch) => batch.name === activeBatch).slots.map((slot) => <p key={slot}><Check size={16} />{slot}</p>)}</div><a className="button small primary" href="#book">Ask about this batch <ArrowRight size={15} /></a></div>
        </div>
      </section>

      <section className="section faculty-section" id="faculty">
        <SectionTitle eyebrow="Meet your mentor" title="Guidance that makes concepts click." copy="Learn from experienced educators who care about how you learn, not just what you score." />
        <div className="faculty-card reveal"><div className="faculty-photo"><img src={CONFIG.faculty.photo} alt={`${CONFIG.faculty.name}, faculty at Padmini Vidhya Niketan`} /></div><div className="faculty-info"><span className="tag">{CONFIG.faculty.badge}</span><h3>{CONFIG.faculty.name}</h3><p className="credentials">{CONFIG.faculty.credentials}</p><p>{CONFIG.faculty.bio}</p><div className="teach-box"><b>Teaches</b><span>{CONFIG.faculty.teaches}</span></div><a className="text-link" href="#book">Talk to Amaarendra sir <ArrowRight size={16} /></a></div></div></section>

      <section className="section results-section" id="results">
        <SectionTitle eyebrow="Celebrating effort" title="Our toppers, our happy moments." copy="Every score is a story of steady practice, patient guidance and a student who kept going." />
        <div className="topper-grid">{CONFIG.toppers.map(({ name, score, photo }, index) => <div className="topper-card reveal" key={`${name}-${index}`}><img className="topper-avatar" src={photo} alt={`${name}, ${score}% result`} /><div><h3>{name}</h3><span>Class topper</span></div><b>{score}%</b></div>)}</div>
      </section>

      <section className="section videos-section" id="videos">
        <SectionTitle eyebrow="Learn beyond the classroom" title="Small lessons. Big lightbulb moments." copy="Find helpful explainers and exam-focused guidance on our YouTube channels." />
        <div className="channel-grid">{CONFIG.youtube.map((channel) => <article className="channel-card reveal" key={channel.name}><div className="channel-thumb"><Youtube size={44} /><div className="play"><Play size={15} fill="currentColor" /></div></div><div className="channel-copy"><span className="eyebrow">YouTube channel</span><h3>{channel.name}</h3><p>{channel.description}</p><a className="button small dark" href={channel.url} target="_blank" rel="noreferrer">Subscribe <ExternalLink size={14} /></a></div></article>)}</div>
      </section>

      <section className="reviews-section">
        <div className="reviews-inner"><SectionTitle eyebrow="Kind words" title="Students feel the difference." light /><div className="review-wrap"><Quote className="quote-mark" size={54} /><div className="review-card"><div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} fill="currentColor" size={17} />)}</div><blockquote>“{CONFIG.reviews[review]}”</blockquote><span>Verified student review</span></div><div className="review-controls"><button onClick={() => setReview((review + CONFIG.reviews.length - 1) % CONFIG.reviews.length)} aria-label="Previous review">←</button><span>0{review + 1} / 0{CONFIG.reviews.length}</span><button onClick={() => setReview((review + 1) % CONFIG.reviews.length)} aria-label="Next review">→</button></div></div><div className="review-badge"><Star fill="currentColor" size={20} /><b>5.0</b><span>on Google<br />{CONFIG.reviewCount} reviews</span></div></div>
      </section>

      <section className="section booking-section" id="book">
        <div className="booking-layout"><div><SectionTitle eyebrow="Your first step" title="Ready to make learning feel lighter?" copy="Book a free demo class and experience our way of teaching. No pressure, just a friendly conversation." /><div className="booking-note"><Check size={17} /> 10 days of free trial classes</div><div className="booking-note"><Check size={17} /> Offline and online options</div><div className="booking-note"><Check size={17} /> Individual guidance from day one</div></div><form className="booking-form reveal" onSubmit={submitForm}><div className="form-heading"><span className="eyebrow">Book your free demo</span><h3>Let's get to know you.</h3></div><div className="form-row"><label>Student name<input required name="student" placeholder="Your name" /></label><label>Parent name<input required name="parent" placeholder="Parent / guardian name" /></label></div><div className="form-row"><label>Phone number<input required name="phone" type="tel" pattern="[0-9+ ()-]{10,}" placeholder="+91 ..." /></label><label>Class<select required name="class"><option value="">Select class</option>{['10th', '11th', '12th', 'JEE Maths', 'CA Foundation', 'CMA Foundation', 'CMA Inter OMSM'].map((item) => <option key={item}>{item}</option>)}</select></label></div><div className="form-row"><label>Preferred batch<select required name="batch"><option>Mon-Wed-Fri</option><option>Tue-Thu-Sat</option></select></label><label>Mode<select required name="mode"><option>Offline</option><option>Online</option></select></label></div><label>Message (optional)<textarea name="message" rows="3" placeholder="Anything you'd like us to know?"></textarea></label><button className="button primary form-submit" disabled={formState === 'loading'}>{formState === 'loading' ? 'Opening WhatsApp…' : formState === 'success' ? <><Check size={17} /> Thank you! We will contact you shortly.</> : <>Send enquiry <ArrowRight size={17} /></>}</button><small className="form-disclaimer">Your enquiry opens WhatsApp with a prefilled message. Email/Formspree can be enabled in CONFIG.</small></form></div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-inner"><SectionTitle eyebrow="Come say hello" title="Your classroom is closer than you think." copy="Drop by for a chat, a campus visit or simply a quick question on WhatsApp." /><div className="contact-grid"><div className="contact-details"><a href={CONFIG.phoneHref}><Phone size={19} /><span><small>Call us</small>{CONFIG.phone}</span></a><a href={CONFIG.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19} /><span><small>WhatsApp us</small>Usually replies quickly</span></a><div><MapPin size={19} /><span><small>Find us</small>{CONFIG.address}</span></div><div><Clock3 size={19} /><span><small>Opening hours</small>{CONFIG.hours}</span></div></div><div className="map-card"><div className="map-grid" /><MapPin size={34} /><b>Laxmi Nagar</b><span>F-246, Gali No. 3, Mangal Bazar</span><a href="https://www.google.com/maps/search/?api=1&query=F-246+Gali+No+3+Mangal+Bazar+Laxmi+Nagar+Delhi" target="_blank" rel="noreferrer">Get directions <ArrowRight size={15} /></a></div></div></div></section>
    </main>

    <footer><div className="footer-inner"><div className="footer-brand"><img src={CONFIG.logo} alt="Padmini Vidhya Niketan logo" /><p>Making learning clearer, kinder and more confident.</p></div><div><h4>Explore</h4>{navItems.slice(0, 5).map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</div><div><h4>Connect</h4><a href={CONFIG.phoneHref}>{CONFIG.phone}</a><a href={CONFIG.whatsapp}>WhatsApp us</a><a href={CONFIG.studentAppUrl} target="_blank" rel="noopener noreferrer">Student App <ExternalLink size={13} /></a>{CONFIG.youtube.map((channel) => <a href={channel.url} key={channel.name}>YouTube · {channel.name}</a>)}</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Padmini Vidhya Niketan</span><span>Made with care in Laxmi Nagar <Heart size={14} fill="currentColor" /></span></div></footer>
    <div className="mobile-bar"><a href={CONFIG.phoneHref}><Phone size={18} /> Call</a><a href={CONFIG.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a></div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: CONFIG.name, address: { '@type': 'PostalAddress', streetAddress: CONFIG.address, addressLocality: 'New Delhi', postalCode: '110092', addressCountry: 'IN' }, telephone: CONFIG.phone, aggregateRating: { '@type': 'AggregateRating', ratingValue: CONFIG.rating, reviewCount: CONFIG.reviewCount } }) }} />
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
