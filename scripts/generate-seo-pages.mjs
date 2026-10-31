import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const publicDirectory = resolve('public');
const siteUrl = 'https://www.pvnedu.com';
const businessName = 'Padmini Vidhya Niketan';
const phone = '099110 00896';
const phoneLink = '+919911000896';
const address = 'F-246, Gali No. 3, Mangal Bazar, Block F, Laxmi Nagar, New Delhi, Delhi 110092';
const socialLinks = [
  'https://www.instagram.com/padmini_vidhyaniketan/',
  'https://youtube.com/@padminividhyaniketan',
  'https://youtube.com/@pvnedu'
];

const facultyCopy = 'The website lists Amaarendra Kumar for mathematics, with M.Sc. (Maths), M.Phil, 18+ years teaching experience and visiting-faculty roles with ICSI and ICMAI. Call to confirm the teacher for this batch.';

const courses = [
  {
    slug: 'class-10-coaching-laxmi-nagar',
    name: 'Class 10 tuition',
    shortName: 'Class 10',
    title: 'Class 10 Tuition in Laxmi Nagar | Padmini Vidhya Niketan',
    description: 'Looking for class 10 tuition in Laxmi Nagar? Ask about current subjects, batch times and a free demo class at Padmini Vidhya Niketan.',
    intro: 'Class 10 brings new school chapters and an important year-end examination. Padmini Vidhya Niketan offers Class 10 coaching in Laxmi Nagar. Share the student’s board, subjects and difficult topics to check whether a current batch is suitable.',
    overview: 'At a demo, ask how lessons are explained, how questions are practised and how revision is planned. Parents can share an upcoming test. Coaching supports learning but cannot promise an exam score.',
    syllabusIntro: 'Syllabus depends on the board and school session. Confirm subject coverage. General mathematics areas may include:',
    topics: ['algebra, polynomials and equations', 'geometry, coordinate geometry and trigonometry', 'statistics, probability and exam-style problem solving'],
    audience: 'This class may suit a learner seeking mathematics help, guided practice or a revision routine. Share a recent worksheet. Ask whether other required subjects are taught before booking.',
    timing: 'The published Class 10 options are Monday, Wednesday and Friday, 5–6 pm, or Tuesday, Thursday and Saturday, 6–7 pm. Call to confirm availability and start date.',
    fees: 'Call 099110 00896 for current Class 10 fees. Confirm the amount, payment schedule, materials and missed-class policy before enrolling.',
    teaching: 'The institute lists weekly exams, doubt-clearing, annual-exam revision and app notes. Ask which supports are included. A free demo helps the student experience the teaching and ask questions.',
    faqs: [
      ['Which subjects are included in Class 10 tuition?', 'Call with the board and subject list. Confirm what the current batch teaches.'],
      ['What are the Class 10 batch timings?', 'Published options are Monday, Wednesday and Friday, 5–6 pm, or Tuesday, Thursday and Saturday, 6–7 pm. Reconfirm by phone.'],
      ['Can my child attend a demo class?', 'The institute advertises a free demo. Call to check the current schedule and reserve a place.'],
      ['How much are the Class 10 fees?', 'Call 099110 00896 for current fees, payment dates and material charges.'],
      ['Will tuition guarantee an exam score?', 'No score is guaranteed. Ask how practice follows the current syllabus.']
    ]
  },
  {
    slug: 'class-11-coaching-laxmi-nagar',
    name: 'Class 11 coaching',
    shortName: 'Class 11',
    title: 'Class 11 Coaching in Laxmi Nagar | Padmini Vidhya Niketan',
    description: 'Explore Class 11 coaching in Laxmi Nagar, Delhi. Ask about mathematics support, current timings, fees and a free demo class.',
    intro: 'Class 11 introduces detailed concepts and a faster school pace. Padmini Vidhya Niketan offers Class 11 coaching in Laxmi Nagar. Share the student’s board, stream and subject needs to check current classes.',
    overview: 'Bring a chapter list or recent test to a demo. Students can ask about difficult topics and parents can discuss revision. Coaching supports school learning; it does not promise marks.',
    syllabusIntro: 'Subjects depend on board and stream. Confirm coverage. General mathematics areas may include:',
    topics: ['sets, functions, algebra and trigonometric ideas', 'coordinate geometry, sequences and introductory calculus', 'statistics, probability and practice with written solutions'],
    audience: 'This class may suit a student seeking mathematics practice, step-by-step help or school-topic revision. Share an upcoming test. Confirm other subject coverage before booking.',
    timing: 'Published Class 11 options are Monday, Wednesday and Friday, 7–8 pm, or Tuesday, Thursday and Saturday, 5–6 pm. Call to confirm the schedule and availability.',
    fees: 'Call 099110 00896 for current Class 11 fees. Confirm the amount, payment plan, included sessions and materials.',
    teaching: 'The institute lists weekly exams, doubt-clearing, annual-exam revision and app notes. Ask what this batch includes. A demo helps the student check the pace and explanations.',
    faqs: [
      ['Does Class 11 tuition cover every subject?', 'Call with the board, stream and subject list. Confirm what the batch teaches.'],
      ['What are the Class 11 batch hours?', 'Published options are Monday, Wednesday and Friday, 7–8 pm, or Tuesday, Thursday and Saturday, 5–6 pm. Please confirm.'],
      ['Is a demo class available?', 'The institute advertises a free demo. Call to check its current schedule.'],
      ['How do I ask about fees?', 'Call 099110 00896 for current fees, payment dates and material details.'],
      ['Does the class follow my school board?', 'Share the board and syllabus. Ask the institute to confirm coverage.']
    ]
  },
  {
    slug: 'class-12-coaching-laxmi-nagar',
    name: 'Class 12 coaching',
    shortName: 'Class 12',
    title: 'Class 12 Coaching in Laxmi Nagar | Padmini Vidhya Niketan',
    description: 'Need Class 12 coaching in Laxmi Nagar, Delhi? Discuss mathematics classes, revision, current batches and a free demo with PVN.',
    intro: 'Class 12 students balance school lessons, practice and exams. Padmini Vidhya Niketan offers Class 12 coaching in Laxmi Nagar, Delhi. Call with the student’s board and subjects to check the current batch.',
    overview: 'At a demo, ask about a difficult topic and how lessons fit the school syllabus. Bring a chapter list. Coaching supports study but cannot promise a score or admission.',
    syllabusIntro: 'Use the current school syllabus to plan. Confirm subject coverage. Mathematics areas may include:',
    topics: ['relations, functions, algebra and matrices', 'calculus, vectors, three-dimensional geometry and linear programming', 'probability, written working and timed question practice'],
    audience: 'This class may suit a learner wanting mathematics practice, clearer school concepts or test revision. Share the student’s goals and confirm board coverage.',
    timing: 'Published Class 12 options are Monday, Wednesday and Friday, 4–5 pm, or Tuesday, Thursday and Saturday, 6–7 pm. Call to confirm current availability.',
    fees: 'Call 099110 00896 for current Class 12 fees. Confirm the amount, payment dates, included sessions and materials.',
    teaching: 'The institute lists weekly exams, doubt-clearing, annual-exam revision and app notes. Ask what the current batch includes. A demo lets families check the teaching style.',
    faqs: [
      ['Is Class 12 coaching available for my board?', 'Call with the board and subjects. Confirm that the batch follows the student’s syllabus.'],
      ['What are the Class 12 batch timings?', 'Published options are Monday, Wednesday and Friday, 4–5 pm, or Tuesday, Thursday and Saturday, 6–7 pm. Reconfirm.'],
      ['Is Class 12 Maths support available?', 'Call with the board and current chapter to confirm the mathematics batch.'],
      ['What is the current Class 12 fee?', 'Call 099110 00896 for fees, payment dates and materials.'],
      ['Can the institute promise board results?', 'No score is promised. Ask how lessons and revision follow the syllabus.']
    ]
  },
  {
    slug: 'jee-maths-coaching-laxmi-nagar',
    name: 'JEE Maths coaching',
    shortName: 'JEE Maths',
    title: 'JEE Maths Coaching in Laxmi Nagar | Padmini Vidhya Niketan',
    description: 'Ask about JEE Maths coaching in Laxmi Nagar, Delhi, current batch availability, preparation approach and a free demo class.',
    intro: 'JEE Maths preparation develops understanding across connected topics and unfamiliar questions. Padmini Vidhya Niketan lists JEE Maths coaching in Laxmi Nagar. Call with the student’s class and exam year to check availability.',
    overview: 'Before joining, ask which exam level and syllabus the class supports, how practice works and how doubts are handled. Check official notices. Coaching cannot guarantee a rank or admission.',
    syllabusIntro: 'Use the official syllabus for the exam year. A general JEE Maths plan may revisit:',
    topics: ['algebra, functions, sequences and trigonometry', 'coordinate geometry, vectors and three-dimensional geometry', 'calculus, probability and multi-step problem practice'],
    audience: 'This class may suit students preparing for JEE alongside school who want concept explanations and guided practice. Share the exam year. Confirm whether the batch supports Main, Advanced or both.',
    timing: 'No fixed JEE Maths time is published; the timetable says to contact the institute. Call 099110 00896 for class days and availability.',
    fees: 'Call for current JEE Maths fees. Confirm the level, included tests or material and payment schedule.',
    teaching: 'The institute lists weekly exams and doubt-clearing. Ask how these work for JEE and whether practice follows the current syllabus. A demo lets students assess the pace.',
    faqs: [
      ['Does JEE Maths cover Main or Advanced?', 'The level is not published. Call with the exam year and ask which syllabus the batch follows.'],
      ['What are the JEE Maths timings?', 'No fixed time is published. Call 099110 00896 for the schedule.'],
      ['Which JEE syllabus should I follow?', 'Use official notices for the exam year. Ask how the class covers those topics.'],
      ['How much does JEE Maths cost?', 'Call for current fees, duration, materials and payment schedule.'],
      ['Can coaching guarantee a JEE rank?', 'No rank is guaranteed. Check official exam information and ask about the teaching plan.']
    ]
  },
  {
    slug: 'ca-foundation-coaching-laxmi-nagar',
    name: 'CA Foundation coaching',
    shortName: 'CA Foundation',
    title: 'CA Foundation in Laxmi Nagar | PVN Coaching',
    description: 'Explore CA Foundation coaching in Laxmi Nagar, Delhi. Call to confirm the current syllabus, batch timing, fees and demo.',
    intro: 'Starting CA Foundation is a big step after school. Padmini Vidhya Niketan lists CA Foundation coaching in Laxmi Nagar, Delhi. Call to confirm current papers, class format and the next batch.',
    overview: 'Discuss the student’s exam attempt and subjects needing help. Ask how questions and doubts are handled. Confirm which papers are included and compare the plan with current ICAI notices.',
    syllabusIntro: 'ICAI publishes the current syllabus. Confirm paper names for the student’s attempt. Broad areas have included:',
    topics: ['accounting principles and practice', 'business laws and quantitative aptitude', 'business economics and related examination practice'],
    audience: 'This class may suit students planning the CA Foundation route who want guided study. Check the exam attempt, then ask which papers and resources are covered.',
    timing: 'The published timetable lists CA Foundation, 12 noon–2 pm. Call to confirm class days, start date and current availability.',
    fees: 'Call 099110 00896 for tuition fees and included sessions. Confirm material charges; check registration and exam fees directly with ICAI.',
    teaching: 'The institute lists weekly exams, doubt-clearing and student-app notes. Ask which support covers each paper and how lessons follow the current ICAI syllabus. A demo helps check the pace.',
    faqs: [
      ['Which CA Foundation syllabus is followed?', 'Ask which attempt the batch supports and compare its plan with current ICAI information.'],
      ['When are CA Foundation classes held?', 'Published time is 12 noon–2 pm. Call to confirm class days.'],
      ['Are ICAI registration and exam fees included?', 'Confirm tuition with the institute. Check official fees directly with ICAI.'],
      ['How do I ask about course fees?', 'Call 099110 00896 for tuition, payment dates and material charges.'],
      ['Does coaching guarantee a pass?', 'No result is guaranteed. Check ICAI rules and ask how doubts are handled.']
    ]
  },
  {
    slug: 'cma-coaching-laxmi-nagar',
    name: 'CMA coaching',
    shortName: 'CMA',
    title: 'CMA Coaching in Laxmi Nagar | Padmini Vidhya Niketan',
    description: 'Looking for CMA coaching in Laxmi Nagar? Ask about Foundation and Inter classes, current syllabus, timings and fees.',
    intro: 'CMA classes should match the student’s ICMAI level and exam attempt. Padmini Vidhya Niketan lists Foundation and CMA Inter (OMSM) coaching in Laxmi Nagar. Call to confirm current papers and batches.',
    overview: 'Tell the institute the student’s level and attempt, then ask which papers and practice resources are included. Compare the plan with current ICMAI notices. No result is promised.',
    syllabusIntro: 'ICMAI publishes the current syllabus. The institute lists Foundation and an Inter class described as Operations Management and Strategic Management (OMSM). Confirm current paper names. Broad areas include:',
    topics: ['fundamentals of business mathematics and statistics', 'accounting, business laws and business economics', 'for the listed Inter class: Operations Management and Strategic Management topics'],
    audience: 'This page is for students comparing CMA Foundation or Inter OMSM. Share the level and attempt, then confirm which papers are currently available.',
    timing: 'The published times are Foundation, 10:30 am–12 noon, and Inter OMSM, 2–4 pm. Call to confirm teaching days and availability.',
    fees: 'Call for current fees for the student’s CMA level and paper. Confirm included classes, notes, payment dates and material charges.',
    teaching: 'The institute lists weekly exams, doubt-clearing and app notes. Ask which supports are available and how lessons follow current ICMAI papers. A demo helps discuss expectations.',
    faqs: [
      ['Does PVN offer CMA Foundation and Inter?', 'The website lists both Foundation and Inter OMSM. Call to confirm current papers.'],
      ['What are current CMA class times?', 'Published times are Foundation, 10:30 am–12 noon, and Inter OMSM, 2–4 pm. Confirm class days.'],
      ['Which CMA syllabus should I follow?', 'Use ICMAI information for the student’s attempt. Ask which syllabus the batch follows.'],
      ['How much does CMA coaching cost?', 'Call for current fees, included classes and material charges.'],
      ['Are ICMAI registration and exam fees included?', 'Confirm tuition with the institute and official charges with ICMAI.']
    ]
  }
];

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const organizationSchema = (pageUrl) => ({
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${siteUrl}/#organization`,
  name: businessName,
  url: `${siteUrl}/`,
  telephone: '+919911000896',
  image: `${siteUrl}/pvn-students-group.webp`,
  logo: `${siteUrl}/padmini_logo.webp`,
  sameAs: socialLinks,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'F-246, Gali No. 3, Mangal Bazar, Block F, Laxmi Nagar',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110092',
    addressCountry: 'IN'
  },
  mainEntityOfPage: pageUrl
});

// Add verified opening hours and map coordinates here when the institute confirms them.
// Keep owner-operated review ratings out of this LocalBusiness schema.
const courseLinks = courses.map((course) =>
  `<a href="/${course.slug}">${escapeHtml(course.shortName)}</a>`
).join('\n          ');

const header = `<header class="site-header">
    <a class="brand" href="/" aria-label="${businessName} home">
      <img src="/padmini_logo.webp" width="800" height="298" alt="${businessName} logo" />
      <span><strong>${businessName}</strong><small>${address}</small></span>
    </a>
    <a class="header-phone" href="tel:${phoneLink}">Call ${phone}</a>
  </header>`;

const footer = `<footer class="site-footer">
    <div><strong>${businessName}</strong><address>${address}</address><a href="tel:${phoneLink}">${phone}</a></div>
    <nav aria-label="Course links">${courseLinks}<a href="/privacy">Privacy policy</a></nav>
    <p>Class schedules can change. Call to confirm current course and visit timings.</p>
    <p>© ${businessName}</p>
  </footer>
  <nav class="mobile-actions" aria-label="Contact PVN">
    <a href="tel:${phoneLink}">Call ${phone}</a>
    <a href="https://wa.me/${phoneLink}">WhatsApp</a>
  </nav>`;

const mainPageMarkup = (course) => {
  const faqMarkup = course.faqs.map(([question, answer]) => `<details class="faq-item">
          <summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p>
        </details>`).join('\n        ');
  const topics = course.topics.map((topic) => `<li>${escapeHtml(topic)}</li>`).join('\n          ');
  return `<main class="course-main">
    <p class="breadcrumbs"><a href="/">Home</a> / <a href="/#courses">Courses</a> / ${escapeHtml(course.shortName)}</p>
    <section class="course-hero">
      <p class="eyebrow">${escapeHtml(course.name)} · Laxmi Nagar, Delhi</p>
      <h1>${escapeHtml(course.name)} in Laxmi Nagar</h1>
      <p class="lead">${escapeHtml(course.intro)}</p>
      <div class="button-row"><a class="button primary" href="tel:${phoneLink}">Call ${phone}</a><a class="button secondary" href="https://wa.me/${phoneLink}?text=${encodeURIComponent(`Hello, I would like to ask about ${course.shortName} coaching in Laxmi Nagar.`)}">Ask on WhatsApp</a><a class="text-link" href="/#enquiry">Free demo class</a></div>
    </section>
    <section class="content-section"><h2>Course overview</h2><p>${escapeHtml(course.overview)}</p></section>
    <section class="content-section"><h2>Syllabus and study topics</h2><p>${escapeHtml(course.syllabusIntro)}</p><ul>${topics}</ul><p>Topic lists are a starting point, not a substitute for the latest school-board, ICAI, ICMAI or examination syllabus. Ask for the current course outline before joining.</p></section>
    <section class="content-section"><h2>Who this class is for</h2><p>${escapeHtml(course.audience)}</p></section>
    <section class="content-section"><h2>Batch timing</h2><p>${escapeHtml(course.timing)}</p></section>
    <section class="content-section"><h2>Fees</h2><p>${escapeHtml(course.fees)}</p></section>
    <section class="content-section"><h2>Faculty</h2><p>${escapeHtml(facultyCopy)}</p></section>
    <section class="content-section"><h2>How we teach</h2><p>${escapeHtml(course.teaching)}</p></section>
    <section class="content-section faq-section"><h2>Frequently asked questions</h2>${faqMarkup}</section>
    <section class="content-section course-directory"><h2>Explore other courses</h2><p>Compare the classes currently listed by Padmini Vidhya Niketan:</p><nav aria-label="Other courses">${courses.filter((other) => other.slug !== course.slug).map((other) => `<a href="/${other.slug}">${escapeHtml(other.shortName)} coaching</a>`).join('')}</nav><p>For address, contact details and the complete course list, visit the <a href="/">Padmini Vidhya Niketan homepage</a>.</p></section>
    <section class="course-cta"><h2>Ask about ${escapeHtml(course.shortName)} coaching</h2><p>Call the institute to confirm the current syllabus, batch and fees. You can also ask about a free demo class.</p><div class="button-row"><a class="button primary" href="tel:${phoneLink}">Call ${phone}</a><a class="button secondary" href="https://wa.me/${phoneLink}?text=${encodeURIComponent(`Hello, I would like to ask about ${course.shortName} coaching in Laxmi Nagar.`)}">WhatsApp</a><a class="text-link" href="/#enquiry">Request a free demo</a></div></section>
  </main>`;
};

const pageTemplate = (course) => {
  const canonical = `${siteUrl}/${course.slug}`;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: course.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  };
  const organizationJson = JSON.stringify(organizationSchema(canonical), null, 2);
  const faqJson = JSON.stringify(faqSchema, null, 2);
  const document = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#2b2a6b" />
    <meta name="description" content="${escapeHtml(course.description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:site_name" content="${businessName}" />
    <meta property="og:title" content="${escapeHtml(course.title)}" />
    <meta property="og:description" content="${escapeHtml(course.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteUrl}/pvn-students-group.webp" />
    <meta property="og:image:alt" content="Students with their teacher at Padmini Vidhya Niketan in Laxmi Nagar, Delhi" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(course.title)}" />
    <meta name="twitter:description" content="${escapeHtml(course.description)}" />
    <meta name="twitter:image" content="${siteUrl}/pvn-students-group.webp" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="stylesheet" href="/seo-site.css" />
    <title>${escapeHtml(course.title)}</title>
    <script type="application/ld+json">${organizationJson}</script>
    <script type="application/ld+json">${faqJson}</script>
  </head>
  <body class="course-page">
    ${header}
    ${mainPageMarkup(course)}
    ${footer}
  </body>
</html>`;
  const mainHtml = document.match(/<main class="course-main">([\s\S]*?)<\/main>/)[1];
  const plainText = mainHtml
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
  const wordCount = plainText.match(/[\p{L}\p{N}][\p{L}\p{N}'’.-]*/gu)?.length ?? 0;
  if (wordCount < 400 || wordCount > 600) {
    const fields = ['intro', 'overview', 'syllabusIntro', 'audience', 'timing', 'fees', 'teaching']
      .map((key) => `${key}=${course[key].split(/\s+/).length}`).join(', ');
    throw new Error(`${course.slug} has ${wordCount} words; expected 400–600. Fields: ${fields}; faculty=${facultyCopy.split(/\s+/).length}; FAQs=${course.faqs.map((faq) => faq.join(' ').split(/\s+/).length).join('/')}.`);
  }
  if (course.description.length > 155) {
    throw new Error(`${course.slug} meta description is longer than 155 characters.`);
  }
  return { document, wordCount };
};

mkdirSync(publicDirectory, { recursive: true });

for (const course of courses) {
  const { document, wordCount } = pageTemplate(course);
  writeFileSync(resolve(publicDirectory, `${course.slug}.html`), document, 'utf8');
  console.log(`Generated ${course.slug}.html (${wordCount} words).`);
}

const thankYouPage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, follow" />
    <meta name="theme-color" content="#2b2a6b" />
    <title>Enquiry next step | ${businessName}</title>
    <link rel="stylesheet" href="/seo-site.css" />
  </head>
  <body>
    ${header}
    <main class="thank-you-page"><p class="eyebrow">Thank you</p><h1>Your enquiry is ready</h1><p>WhatsApp should open with your message. Please press Send in WhatsApp so the institute receives your enquiry. This website does not store form responses.</p><div class="button-row"><a class="button primary" href="https://wa.me/${phoneLink}">Open WhatsApp</a><a class="button secondary" href="tel:${phoneLink}">Call ${phone}</a><a class="text-link" href="/">Return to homepage</a></div></main>
    ${footer}
  </body>
</html>`;
writeFileSync(resolve(publicDirectory, 'thank-you.html'), thankYouPage, 'utf8');

const sitemapUrls = [
  `${siteUrl}/`,
  `${siteUrl}/privacy`,
  ...courses.map((course) => `${siteUrl}/${course.slug}`)
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`;
writeFileSync(resolve(publicDirectory, 'sitemap.xml'), sitemap, 'utf8');
