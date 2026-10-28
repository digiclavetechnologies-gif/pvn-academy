import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, Award, Bell, BookOpen, Check, Clock3, ExternalLink,
  Heart, Laptop, MapPin, Menu, MessageCircle, Phone, Play, Smartphone,
  Star, Users, X, Youtube
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
  logo: '/padmini_logo.png',
  heroPhoto: '/pvn-students-group.jpeg',
  studentAppUrl: 'https://ehkku.on-app.in/app/home?orgCode=ehkku',
  mapEmbedUrl: 'https://www.google.com/maps?q=F-246%2C%20Gali%20No.%203%2C%20Mangal%20Bazar%2C%20Laxmi%20Nagar%2C%20Delhi%20110092&output=embed',
  youtube: [
    { name: 'Padmini Vidhya Niketan', url: 'https://youtube.com/@padminividhyaniketan' },
    { name: 'Padmini Vidhya Niketan Edu', url: 'https://youtube.com/@pvnedu' }
  ],
  courses: ['Class 10th', 'Class 11th', 'Class 12th', 'JEE Maths', 'CA Foundation', 'CMA Foundation', 'CMA Inter (OMSM)'],
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
const cleanText = (value, limit) => String(value ?? '')
  .replace(/[\u0000-\u001f\u007f]/g, ' ')
  .replace(/<[^>]*>/g, '')
  .replace(/\s+/g, ' ')
  .trim()
  .slice(0, limit);

function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function SectionTitle({ eyebrow, title, copy }) {
  return <div className="section-title reveal">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState('idle');
  useReveal();

  useEffect(() => {
    document.title = window.location.pathname === '/' || window.location.pathname === '/index.html'
      ? 'Padmini Vidhya Niketan | Coaching in Laxmi Nagar, Delhi'
      : 'Page not found | Padmini Vidhya Niketan';
  }, []);

  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    return <main className="not-found"><span className="eyebrow">Padmini Vidhya Niketan</span><h1>Page not found</h1><p>The page you’re looking for isn’t here.</p><a className="button primary" href="/">Return to home</a></main>;
  }

  const submitForm = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    if (formData.get('website')) return;
    const data = {
      name: cleanText(formData.get('name'), 80),
      parent: cleanText(formData.get('parent'), 80),
      phone: cleanText(formData.get('phone'), 24),
      className: cleanText(formData.get('class'), 40),
      batch: cleanText(formData.get('batch'), 40),
      mode: cleanText(formData.get('mode'), 20),
      message: cleanText(formData.get('message'), 500)
    };
    const phoneDigits = data.phone.replace(/\D/g, '');
    const phoneInput = form.elements.phone;
    const classInput = form.elements.namedItem('class');
    const batchInput = form.elements.namedItem('batch');
    const modeInput = form.elements.namedItem('mode');
    phoneInput.setCustomValidity('');
    classInput.setCustomValidity('');
    batchInput.setCustomValidity('');
    modeInput.setCustomValidity('');
    if (!/^\+?[\d\s()-]{10,24}$/.test(data.phone) || phoneDigits.length < 10 || phoneDigits.length > 15) {
      phoneInput.setCustomValidity('Enter a valid phone number with 10 to 15 digits.');
      form.reportValidity();
      return;
    }
    if (!['10th', '11th', '12th', 'JEE Maths', 'CA Foundation', 'CMA Foundation', 'CMA Inter OMSM'].includes(data.className)) {
      classInput.setCustomValidity('Choose a class from the list.');
    }
    if (!['Mon-Wed-Fri', 'Tue-Thu-Sat'].includes(data.batch)) {
      batchInput.setCustomValidity('Choose a batch from the list.');
    }
    if (!['Offline', 'Online'].includes(data.mode)) {
      modeInput.setCustomValidity('Choose a mode from the list.');
    }
    form.elements.namedItem('name').setCustomValidity(data.name ? '' : 'Enter a student name.');
    form.elements.namedItem('parent').setCustomValidity(data.parent ? '' : 'Enter a parent or guardian name.');
    if (!data.name || !data.parent || !data.className || !data.batch || !data.mode || classInput.validationMessage || batchInput.validationMessage || modeInput.validationMessage) {
      form.reportValidity();
      return;
    }

    const message = [
      'Hello Padmini Vidhya Niketan, I would like to book a free demo class.',
      `Student: ${data.name}`,
      `Parent: ${data.parent}`,
      `Phone: ${data.phone}`,
      `Class: ${data.className}`,
      `Batch: ${data.batch}`,
      `Mode: ${data.mode}`,
      `Message: ${data.message || 'None'}`
    ].join('\n');
    const appUrl = new URL(CONFIG.whatsapp);
    appUrl.searchParams.set('text', message);
    window.open(appUrl.toString(), '_blank', 'noopener,noreferrer');
    setFormState('success');
    form.reset();
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
          <div className="pill">Coaching in Laxmi Nagar, Delhi</div>
          <h1>{CONFIG.tagline}</h1>
          <p className="hero-lead">Offline &amp; Online Batches · English Medium · Individual Guidance</p>
          <p className="hero-sub">Also offering JEE Maths, CA Foundation and CMA coaching.</p>
          <div className="hero-actions">
            <a className="button primary" href="#book">Book Free Demo Class <ArrowRight size={18} /></a>
            <a className="button ghost" href={CONFIG.phoneHref} target="_blank" rel="noopener noreferrer"><Phone size={17} /> Call Now</a>
            <a className="button app-button" href={CONFIG.studentAppUrl} target="_blank" rel="noopener noreferrer"><Smartphone size={17} /> Student App <ExternalLink size={14} /></a>
          </div>
          <div className="hero-trust"><Star size={16} fill="currentColor" /><span><b>{CONFIG.rating} on Google</b> · {CONFIG.reviewCount} reviews</span></div>
        </div>
        <div className="hero-visual reveal">
          <div className="hero-card">
            <div className="hero-student"><img src={CONFIG.heroPhoto} alt="Amaarendra Kumar with students of Padmini Vidhya Niketan" fetchPriority="high" /></div>
            <div className="float-badge badge-trial"><span><b>10 Days</b><small>Free Trial Classes</small></span></div>
            <div className="float-badge badge-rating"><Star size={16} fill="currentColor" /><span><b>5.0</b><small>on Google · 28 reviews</small></span></div>
          </div>
        </div>
      </section>

      <section className="highlight-strip" aria-label="Institute highlights">
        {CONFIG.highlights.map(([number, label]) => <div className="highlight" key={label}><strong>{number}</strong><span>{label}</span></div>)}
      </section>

      <section className="app-promo-section">
        <div className="app-promo reveal">
          <div className="app-promo-icon"><Smartphone size={27} /></div>
          <div className="app-promo-copy"><span className="eyebrow">Student App</span><h2>Learn on our App</h2><p>Notes, classes and updates in one place.</p></div>
          <div className="app-promo-features"><span><BookOpen size={16} /> Notes</span><span><Play size={16} /> Classes</span><span><Bell size={16} /> Updates</span></div>
          <a className="button primary" href={CONFIG.studentAppUrl} target="_blank" rel="noopener noreferrer">Open App <ExternalLink size={15} /></a>
        </div>
      </section>

      <section className="section why" id="why">
        <SectionTitle eyebrow="Why Padmini Vidhya Niketan" title="Class features" copy={CONFIG.about} />
        <div className="feature-grid">{[
          [BookOpen, '10 Days Free Trial Classes'], [BookOpen, 'Twice Revision Before Annual Exam'], [Award, 'Notes on Student App'], [Check, 'Weekly Exams'],
          [MessageCircle, 'Doubt Clearing Sessions'], [Laptop, 'English Medium'], [Heart, 'Individual Guidance'], [Users, 'Offline + Online Batches']
        ].map(([Icon, text]) => <div className="feature-card reveal" key={text}><div className="icon-box"><Icon size={20} /></div><h3>{text}</h3><span className="arrow-circle"><ArrowRight size={15} /></span></div>)}</div>
      </section>

      <section className="section courses-section" id="courses">
        <SectionTitle eyebrow="Courses" title="Classes and programmes" copy="Coaching for Class 10th, 11th, 12th, JEE Maths, CA Foundation and CMA." />
        <div className="course-grid">{CONFIG.courses.map((name) => <article className="course-card reveal" key={name}>
          <h3>{name}</h3>
          <a href={waMessage(`Hello, I would like to enquire about ${name}.`)} target="_blank" rel="noopener noreferrer">Enquire <ArrowRight size={15} /></a>
        </article>)}</div>
      </section>

      <section className="section timetable-section" id="timetable">
        <div className="timetable-layout">
          <SectionTitle eyebrow="Batch timetable" title="Class times" />
          <div className="timetable-wrap"><table className="timetable"><thead><tr><th scope="col">Class / Programme</th><th scope="col">Batch timings</th></tr></thead><tbody>{CONFIG.timetable.map((batch) => <tr key={batch.name}><th scope="row">{batch.name}</th><td>{batch.slots.join(' · ')}</td></tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="section faculty-section" id="faculty">
        <SectionTitle eyebrow="Faculty" title="Meet the faculty" />
        <div className="faculty-card reveal"><div className="faculty-photo"><img loading="lazy" decoding="async" src={CONFIG.faculty.photo} alt={`${CONFIG.faculty.name}, faculty at Padmini Vidhya Niketan`} /></div><div className="faculty-info"><span className="tag">{CONFIG.faculty.badge}</span><h3>{CONFIG.faculty.name}</h3><p className="credentials">{CONFIG.faculty.credentials}</p><p>{CONFIG.faculty.bio}</p><div className="teach-box"><b>Teaches</b><span>{CONFIG.faculty.teaches}</span></div><a className="text-link" href="#book">Enquire about classes <ArrowRight size={16} /></a></div></div></section>

      <section className="section results-section" id="results">
        <SectionTitle eyebrow="Results" title="Our toppers" />
        <div className="topper-grid">{CONFIG.toppers.map(({ name, score, photo }, index) => <figure className="topper-card reveal" key={`${name}-${index}`}><img className="topper-avatar" loading="lazy" decoding="async" src={photo} alt={name} /><figcaption><strong>{name}</strong><span>{score}%</span></figcaption></figure>)}</div>
      </section>

      <section className="section videos-section" id="videos">
        <SectionTitle eyebrow="Videos" title="YouTube channels" />
        <div className="channel-grid">{CONFIG.youtube.map((channel) => <article className="channel-card reveal" key={channel.name}><div className="channel-copy"><Youtube size={24} /><h3>{channel.name}</h3><a className="text-link" href={channel.url} target="_blank" rel="noopener noreferrer">Subscribe <ExternalLink size={14} /></a></div></article>)}</div>
      </section>

      <section className="reviews-section">
        <div className="reviews-inner"><div className="section-title"><span className="eyebrow">Reviews</span><h2>Student reviews</h2><p className="review-rating">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={16} fill="currentColor" aria-hidden="true" />)} <strong>{CONFIG.rating} on Google · {CONFIG.reviewCount} reviews</strong></p></div><div className="review-list">{CONFIG.reviews.map((text) => <blockquote key={text}>“{text}”</blockquote>)}</div></div>
      </section>

      <section className="section booking-section" id="book">
        <div className="booking-layout"><div><SectionTitle eyebrow="Demo class" title="Book a free demo class" copy="Call or message Padmini Vidhya Niketan to ask about a class." /><div className="booking-note"><Check size={17} /> 10 days of free trial classes</div><div className="booking-note"><Check size={17} /> Offline and online batches</div><div className="booking-note"><Check size={17} /> Individual guidance</div></div><form className="booking-form reveal" onSubmit={submitForm}><div className="form-heading"><span className="eyebrow">Demo class enquiry</span><h3>Student details</h3></div><label className="honeypot" aria-hidden="true">Leave this field empty<input tabIndex="-1" autoComplete="off" name="website" /></label><div className="form-row"><label>Student name<input required maxLength="80" name="name" autoComplete="name" placeholder="Student name" /></label><label>Parent name<input required maxLength="80" name="parent" autoComplete="name" placeholder="Parent or guardian name" /></label></div><div className="form-row"><label>Phone number<input required maxLength="24" name="phone" type="tel" inputMode="tel" pattern="[0-9+ ()-]{10,24}" autoComplete="tel" placeholder="+91 ..." /></label><label>Class<select required name="class"><option value="">Select class</option>{['10th', '11th', '12th', 'JEE Maths', 'CA Foundation', 'CMA Foundation', 'CMA Inter OMSM'].map((item) => <option key={item}>{item}</option>)}</select></label></div><div className="form-row"><label>Preferred batch<select required name="batch"><option value="">Select batch</option><option>Mon-Wed-Fri</option><option>Tue-Thu-Sat</option></select></label><label>Mode<select required name="mode"><option value="">Select mode</option><option>Offline</option><option>Online</option></select></label></div><label>Message (optional)<textarea maxLength="500" name="message" rows="3" placeholder="Message"></textarea></label><label className="consent"><input required type="checkbox" name="consent" /> I agree to share these details via WhatsApp. <a href="/privacy.html">Privacy Policy</a></label><button className="button primary form-submit">{formState === 'success' ? <><Check size={17} /> WhatsApp opened. We will contact you shortly.</> : <>Continue to WhatsApp <ArrowRight size={17} /></>}</button><small className="form-disclaimer">Your details are placed in a WhatsApp message; this website does not store enquiries.</small></form></div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-inner"><SectionTitle eyebrow="Contact" title="Visit Padmini Vidhya Niketan" copy={CONFIG.address} /><div className="contact-grid"><div className="contact-details"><a href={CONFIG.phoneHref} target="_blank" rel="noopener noreferrer"><Phone size={19} /><span><small>Phone</small>{CONFIG.phone}</span></a><a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} /><span><small>WhatsApp</small>Message Padmini Vidhya Niketan</span></a><div><MapPin size={19} /><span><small>Address</small>{CONFIG.address}</span></div><div><Clock3 size={19} /><span><small>Hours</small>{CONFIG.hours}</span></div></div><iframe className="map-frame" loading="lazy" title="Map showing Padmini Vidhya Niketan in Laxmi Nagar, Delhi" src={CONFIG.mapEmbedUrl} referrerPolicy="no-referrer-when-downgrade" /></div></div></section>
    </main>

    <footer><div className="footer-inner"><div className="footer-brand"><img loading="lazy" src={CONFIG.logo} alt="Padmini Vidhya Niketan logo" /><p>{CONFIG.name}<br />{CONFIG.address}</p></div><div><h4>Sections</h4>{navItems.slice(0, 5).map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</div><div><h4>Contact</h4><a href={CONFIG.phoneHref} target="_blank" rel="noopener noreferrer">{CONFIG.phone}</a><a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp us</a><a href={CONFIG.studentAppUrl} target="_blank" rel="noopener noreferrer">Student App <ExternalLink size={13} /></a>{CONFIG.youtube.map((channel) => <a href={channel.url} target="_blank" rel="noopener noreferrer" key={channel.name}>YouTube · {channel.name}</a>)}<a href="/privacy.html">Privacy Policy</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Padmini Vidhya Niketan</span></div></footer>
    <div className="mobile-bar"><a href={CONFIG.phoneHref} target="_blank" rel="noopener noreferrer"><Phone size={18} /> Call</a><a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp</a></div>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
