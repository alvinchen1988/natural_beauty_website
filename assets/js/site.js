const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('.dropdown-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const parent = button.closest('.nav-dropdown');
    const open = parent.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
});
document.querySelectorAll('.faq-item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq-item[open]').forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});

// Replace design-prototype placeholders with the client-supplied page media.
const mediaRoot = 'assets/';
const pathSegments = window.location.pathname.split('/').filter(Boolean);
const pageName = pathSegments.at(-1) || 'index';
const currentPage = pageName.endsWith('.html') ? pageName : `${pageName}.html`;
const image = (src, alt, options = {}) => ({ type: 'image', src, alt, ...options });
const video = (src, alt, options = {}) => ({ type: 'video', src, alt, ...options });

// Keep clinic contact information consistent across every page.
const clinicContact = {
  address: '328–1251 Hornby Street, Vancouver, BC',
  phoneDisplay: '(604) 722-0601',
  phoneHref: 'tel:+16047220601',
  instagramHandle: '@Dina_np_injector',
  instagramHref: 'https://www.instagram.com/dina_np_injector/',
  wechat: 'Dina_np_injector'
};

const utilityLocation = document.querySelector('.utility-inner > span:first-child');
if (utilityLocation) {
  utilityLocation.textContent = 'Natural Beauty Medical Clinic · Vancouver, BC';
}

const utilityContact = document.querySelector('.utility-inner > span:last-child');
if (utilityContact && utilityContact !== utilityLocation) {
  utilityContact.innerHTML = `
    <a href="${clinicContact.phoneHref}">Tel: ${clinicContact.phoneDisplay}</a>
    <span aria-hidden="true"> · </span>
    <a href="${clinicContact.instagramHref}" target="_blank" rel="noopener noreferrer">IG: ${clinicContact.instagramHandle}</a>
    <span aria-hidden="true"> · </span>
    <span>WeChat: ${clinicContact.wechat}</span>
  `;
}

document.title = document.title.replaceAll('Richmond BC', 'Vancouver BC');
const metaDescription = document.querySelector('meta[name="description"]');
if (metaDescription) {
  metaDescription.content = metaDescription.content.replaceAll('Richmond, BC', 'Vancouver, BC');
}

const footerColumns = document.querySelectorAll('.footer-grid > div');
const footerSummary = footerColumns[0]?.querySelector('p');
if (footerSummary) {
  footerSummary.textContent = footerSummary.textContent.replace(
    'Richmond, British Columbia',
    'Vancouver, British Columbia'
  );
}

const footerContact = footerColumns[3];
if (footerContact) {
  const heading = footerContact.querySelector('h3');
  const details = footerContact.querySelector('p');
  if (heading) heading.textContent = 'Contact';
  if (details) {
    details.className = 'footer-contact';
    details.innerHTML = `
      <span>${clinicContact.address}</span>
      <a href="${clinicContact.phoneHref}">${clinicContact.phoneDisplay}</a>
      <a href="${clinicContact.instagramHref}" target="_blank" rel="noopener noreferrer">Instagram: ${clinicContact.instagramHandle}</a>
      <span>WeChat: ${clinicContact.wechat}</span>
    `;
  }
}

const suppliedMedia = {
  'index.html': {
    'Homepage hero image placeholder': image('images/Main Page/About Clinic.png', 'Natural Beauty Medical Clinic reception and treatment rooms', { position: 'center' }),
    'About the clinic image placeholder': image('images/Main Page/About Clinic.png', 'Natural Beauty Medical Clinic interior', { position: 'center' }),
    'Philosophy image placeholder': image('images/Main Page/Philosophy section.png', 'A thoughtful one-to-one wellness consultation', { position: 'center' }),
    'About Dina image placeholder': image('images/Main Page/About Dina.png', 'Portrait of Dina at the clinic', { fit: 'contain' }),
    'Before & after image set 1': image('images/Main Page/Before and After/Forehead line correction.png', 'Forehead line treatment before and after', { fit: 'contain' }),
    'Before & after image set 2': video('videos/tear-trough-correction.mp4', 'Tear trough treatment before and after', { autoplay: true, poster: 'images/home-tear-trough-poster.png', fit: 'contain' }),
    'Before & after image set 3': video('videos/chin-augmentation.mp4', 'Chin augmentation before and after', { autoplay: true, poster: 'images/home-chin-poster.png', fit: 'contain' }),
    'Before & after image set 4': image('images/Main Page/Before and After/Lip filler.png', 'Lip filler treatment before and after', { fit: 'contain' })
  },
  'about-dina.html': {
    'About Dina hero image placeholder': image('images/About/6DA4DC26-3C40-4FC7-A418-D99CE153C71E.png', 'Portrait of Dina at Natural Beauty Medical Clinic', { position: 'center 25%' }),
    'Advanced Clinical Care with a Personal Approach image placeholder': image('images/About/Advanced Clinical Care with a Personal Approach.png', 'Dina speaking with a patient during a consultation', { position: 'center' }),
    'Dina’s Philosophy image placeholder': image('images/About/Dina_s Philosophy.png', 'Women of different ages and backgrounds represented in Dina’s care philosophy', { position: 'center' })
  },
  'aesthetic-treatments.html': {
    'Medical Aesthetic Treatments hero image placeholder': image('images/Aesthetic Treatment/Overview/Medical Aesthetic Treatments.png', 'Facial assessment at Natural Beauty Medical Clinic', { position: 'center' }),
    'Treatment Options image placeholder': image('images/Aesthetic Treatment/Overview/Treatment Options.png', 'A selection of medical aesthetic treatment products', { fit: 'contain' }),
    'Our Approach image placeholder': image('images/Aesthetic Treatment/Overview/our approach1.png', 'Dina discussing an individualized aesthetic treatment plan', { position: 'center' })
  },
  'neuromodulator-treatments.html': {
    'Neuromodulator Treatments hero image placeholder': video('videos/neuromodulator-result.m4v', 'Neuromodulator treatment result demonstration', { autoplay: true, poster: 'images/neuromodulator-result-poster.png', fit: 'contain' }),
    'Common Cosmetic Treatment Areas image placeholder': image('images/Aesthetic Treatment/Neuromodulator tx/tox tx areas.png', 'Common neuromodulator treatment areas', { fit: 'contain' })
  },
  'hyaluronic-acid-dermal-fillers.html': {
    'Hyaluronic Acid Dermal Fillers hero image placeholder': image('images/Aesthetic Treatment/HA filler/Full face balancing filler.PNG', 'Full-face balancing with hyaluronic acid filler before and after', { fit: 'contain' }),
    'Common Treatment Areas image placeholder': image('images/Aesthetic Treatment/HA filler/Hyaluronic acid filler treatment areas.png', 'Hyaluronic acid filler treatment areas', { fit: 'contain' })
  },
  'sculptra-face.html': {
    'Sculptra for the Face hero image placeholder': image('images/Aesthetic Treatment/Sculptra face/Sculptra face_.jpg', 'Sculptra facial treatment before and after', { fit: 'contain' }),
    'Concerns Sculptra May Address image placeholder': image('images/Aesthetic Treatment/Sculptra face/Sculptra Facial Treatment Areas-2.png', 'Sculptra facial treatment areas', { fit: 'contain' })
  },
  'aptos-thread-lift.html': {
    'APTOS Thread Lift hero image placeholder': image('images/Aesthetic Treatment/Aptos thread/Aptos thread.jpg', 'Dina with an APTOS thread-lift training certificate', { position: 'center 30%' }),
    'Areas That May Be Considered image placeholder': image('images/Aesthetic Treatment/Aptos thread/Natural beauty thread lift portrait.png', 'Illustration of areas considered for an APTOS thread lift', { fit: 'contain' })
  },
  'sculptra-body-buttock.html': {
    'Sculptra Body and Buttock Treatment hero image placeholder': image('images/Aesthetic Treatment/Sculptra body/Sculptra butt lift_.jpg', 'Sculptra buttock treatment before and after', { fit: 'contain' }),
    'Potential Treatment Goals image placeholder': image('images/Aesthetic Treatment/Sculptra body/Sculptra body treatment areas.png', 'Sculptra body treatment areas', { fit: 'contain' })
  },
  'belkyra.html': {
    'Belkyra hero image placeholder': image('images/Aesthetic Treatment/Belkyra/Belkyra b&a.png', 'Belkyra treatment before and after', { fit: 'contain' }),
    'Who May Be a Candidate image placeholder': image('images/Aesthetic Treatment/Belkyra/good candidate for Belkyra_.png', 'Profile illustrating the area assessed for Belkyra treatment', { position: 'center' })
  },
  'womens-health-wellness.html': {
    'Women’s Health and Wellness hero image placeholder': image('images/Women_s Health and Wellness/Overview/Six women in harmonious clinic hues.png', 'Women of different ages and backgrounds', { position: 'center' }),
    'Areas of Care image placeholder': image('images/Women_s Health and Wellness/Overview/Warm Wellness Consultation Scene.png', 'A women’s health and wellness consultation', { position: 'center' })
  },
  'iv-therapy.html': {
    'IV Therapy hero image placeholder': image('images/Women_s Health and Wellness/IV/Warm-toned IV therapy session.png', 'A monitored IV therapy session', { position: 'center' }),
    'Treatment Planning image placeholder': image('images/Women_s Health and Wellness/IV/Common IV drip types with five bags.png', 'Common types of IV drips and evidence limitations', { fit: 'contain' })
  },
  'medical-weight-management.html': {
    'Medical Weight Management hero image placeholder': image('images/Women_s Health and Wellness/Weight Management/Warm wellness consultation.png', 'A personalized medical weight-management consultation', { position: 'center' }),
    'Comprehensive Assessment image placeholder': image('images/Women_s Health and Wellness/Weight Management/Personalized Weight Management Poster.png', 'Personalized weight-management assessment and treatment plan', { fit: 'contain' })
  },
  'perimenopause-menopause-care.html': {
    'Perimenopause and Menopause Care hero image placeholder': image('images/Women_s Health and Wellness/Perimenopause-Menopause/Perimenopause Wellness Guide.png', 'Perimenopause and menopause wellness guide', { fit: 'contain' }),
    'Common Reasons to Seek Care image placeholder': image('images/Women_s Health and Wellness/Perimenopause-Menopause/menopause symptom.png', 'Common perimenopause and menopause symptoms and health concerns', { fit: 'contain' })
  },
  'professional-injectable-training.html': {
    'Professional Injectable Training hero image placeholder': image('images/Training/Overview/training general_.png', 'Professional aesthetic injectable training overview', { fit: 'contain' }),
    'Core Learning Priorities image placeholder': image('images/Training/Overview/Core Learning Priorities.png', 'Core priorities for safe, effective and patient-centred injectable training', { fit: 'contain' })
  },
  'neuromodulator-training.html': {
    'Neuromodulator Training hero image placeholder': image('images/Training/Neuromodulators/training tox.png', 'Hands-on neuromodulator training demonstration', { position: 'center' }),
    'Topics May Include image placeholder': image('images/Training/Neuromodulators/Simulated forehead lines before and after.png', 'Simulated forehead-line treatment before and after', { fit: 'contain' })
  },
  'hyaluronic-acid-filler-training.html': {
    'Hyaluronic Acid Filler Training hero image placeholder': image('images/Training/Dermal Filler/filler training 1_.png', 'Hands-on dermal filler training demonstration', { fit: 'contain' }),
    'Topics May Include image placeholder': image('images/Training/Dermal Filler/filler training_.png', 'Small-group dermal filler training session', { fit: 'contain' })
  },
  'sculptra-face-training.html': {
    'Sculptra Face Training hero image placeholder': image('images/Training/Sculptra face training/Aesthetic Clinic Teaching Demonstration.png', 'Aesthetic clinic teaching demonstration', { position: 'center' }),
    'Topics May Include image placeholder': image('images/Training/Sculptra face training/Sculptra face training_.png', 'Hands-on Sculptra face training', { position: 'center' })
  },
  'sculptra-body-buttock-training.html': {
    'Sculptra Body and Buttock Training hero image placeholder': video('videos/sculptra-body-training.m4v', 'Sculptra reconstitution training demonstration', { controls: true, poster: 'images/sculptra-body-training-poster.png', fit: 'contain' }),
    'Topics May Include image placeholder': image('images/Training/Sculptra Body/Sculptra body treatment areas.png', 'Sculptra body treatment areas', { fit: 'contain' })
  },
  'customized-advanced-training-mentorship.html': {
    'Customized Advanced Training and Mentorship hero image placeholder': image('images/Training/Mentership/Mentership Program_.png', 'Dina leading a hands-on mentorship session', { position: 'center' }),
    'Education Tailored to Your Experience and Learning Goals image placeholder': image('images/Training/Mentership/Mentership Program 1.png', 'Advanced injectable mentorship training', { position: 'center' })
  },
  'before-after.html': {
    'Before and After Gallery hero image placeholder': image('images/Training/Before and After/Tear Trough Filler_.png', 'Tear trough filler before and after', { fit: 'contain' })
  }
};

const findPlaceholder = (label) => Array.from(document.querySelectorAll('[aria-label]'))
  .find((element) => element.getAttribute('aria-label') === label);

const applyMedia = (label, config) => {
  const target = findPlaceholder(label);
  if (!target || !config) return null;

  const element = document.createElement(config.type === 'video' ? 'video' : 'img');
  const src = `${mediaRoot}${config.src}`;

  target.classList.add('has-real-media');
  if (config.fit === 'contain') target.classList.add('media-contain');
  if (config.position) target.style.setProperty('--media-position', config.position);
  target.removeAttribute('role');
  target.removeAttribute('aria-label');

  if (config.type === 'video') {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.src = src;
    element.playsInline = true;
    element.preload = config.autoplay ? 'auto' : 'metadata';
    element.setAttribute('aria-label', config.alt);
    if (config.poster) element.poster = `${mediaRoot}${config.poster}`;
    if (config.autoplay && !reduceMotion) {
      element.autoplay = true;
      element.muted = true;
      element.loop = true;
    } else {
      element.controls = true;
    }
    if (config.controls) element.controls = true;
    element.append('Your browser does not support embedded video.');
  } else {
    element.src = src;
    element.alt = config.alt;
    element.decoding = 'async';
    element.loading = label.toLowerCase().includes('hero') ? 'eager' : 'lazy';
  }

  target.replaceChildren(element);
  return target;
};

Object.entries(suppliedMedia[currentPage] || {}).forEach(([label, config]) => {
  applyMedia(label, config);
});

const removePlaceholder = (label) => {
  const target = findPlaceholder(label);
  if (!target) return;

  const interiorMedia = target.closest('.interior-hero-media');
  if (interiorMedia) {
    interiorMedia.closest('.interior-hero-grid')?.classList.add('without-media');
    interiorMedia.remove();
    return;
  }

  const sectionMedia = target.closest('.section-media');
  if (sectionMedia) {
    sectionMedia.closest('.split-section')?.classList.add('without-media');
    sectionMedia.remove();
    return;
  }

  const finalHome = target.closest('.final-home-cta');
  if (finalHome) {
    finalHome.classList.add('without-media');
    target.parentElement?.remove();
    return;
  }

  target.remove();
};

const placeholdersToRemove = {
  'index.html': ['Natural Beauty closing image placeholder'],
  'before-after.html': [
    'Recommended Gallery Categories image placeholder',
    'Required Gallery Notice image placeholder'
  ],
  'faqs.html': ['Frequently Asked Questions hero image placeholder'],
  'medical-disclaimer.html': ['Website Wide Medical Disclaimer hero image placeholder'],
  'contact.html': [
    'Contact and Booking hero image placeholder',
    'Booking Categories image placeholder',
    'Information to Complete Before Publication image placeholder',
    'Contact Notice image placeholder'
  ]
};

(placeholdersToRemove[currentPage] || []).forEach(removePlaceholder);

const prototypeStatus = document.querySelector('.footer-bottom span:last-child');
if (prototypeStatus) {
  prototypeStatus.textContent = 'Design prototype · Content and remaining booking details pending client approval';
}

if (currentPage === 'index.html') {
  const reviewImages = [
    ['images/Main Page/Patient Experiences/IMG_9690.PNG', 'Five-star patient review'],
    ['images/Main Page/Patient Experiences/IMG_9691.PNG', 'Patient feedback message'],
    ['images/Main Page/Patient Experiences/IMG_9689.PNG', 'Five-star patient experience review']
  ];

  document.querySelectorAll('.quote-card').forEach((card, index) => {
    const media = reviewImages[index];
    if (!media) return;
    const img = document.createElement('img');
    img.src = `${mediaRoot}${media[0]}`;
    img.alt = media[1];
    img.loading = 'lazy';
    img.decoding = 'async';
    card.classList.add('patient-experience-card');
    card.replaceChildren(img);
  });
}

if (currentPage === 'before-after.html') {
  const galleryResults = [
    ['Neuromodulators before photo', 'Neuromodulators after photo', 'Neuromodulator Treatment', 'images/Training/Before and After/Tox Treatment Forehead_.png', 'Forehead neuromodulator treatment before and after'],
    ['Lips before photo', 'Lips after photo', 'Chin Filler', 'images/Training/Before and After/Chin Filler_.png', 'Chin filler before and after'],
    ['Facial Balancing before photo', 'Facial Balancing after photo', 'Cheek Filler', 'images/Training/Before and After/Cheek Filler Before and After.png', 'Cheek filler before and after'],
    ['Sculptra Face before photo', 'Sculptra Face after photo', 'Tear Trough Filler', 'images/Training/Before and After/Tear Trough filler 2_.png', 'Tear trough filler before and after'],
    ['APTOS Threads before photo', 'APTOS Threads after photo', 'Full-Face Balancing', 'images/Training/Before and After/Whole Face Balancing 2 Before and After.png', 'Full-face balancing before and after'],
    ['Belkyra before photo', 'Belkyra after photo', 'Facial Balancing', 'images/Training/Before and After/Whole Face Balancing with dermal filler_.png', 'Facial balancing with dermal filler before and after']
  ];

  galleryResults.forEach(([beforeLabel, afterLabel, title, src, alt]) => {
    const media = applyMedia(beforeLabel, image(src, alt, { fit: 'contain' }));
    const after = findPlaceholder(afterLabel);
    const gallery = media?.closest('.before-after');
    after?.parentElement?.remove();
    gallery?.classList.add('single-result');
    const card = media?.closest('.gallery-card');
    const heading = card?.querySelector('h3');
    if (heading) heading.textContent = title;
  });
}

// Consolidate related short sections into one composition with a shared visual.
document.querySelectorAll('.compact-group.group-lead').forEach((leadSection) => {
  const groupedSections = [leadSection];
  let nextSection = leadSection.nextElementSibling;

  while (nextSection?.classList.contains('compact-group')) {
    groupedSections.push(nextSection);
    if (nextSection.classList.contains('group-end')) break;
    nextSection = nextSection.nextElementSibling;
  }

  if (groupedSections.length < 2) return;

  const consolidatedSection = document.createElement('section');
  consolidatedSection.className = 'section consolidated-section';

  const layout = document.createElement('div');
  layout.className = 'shell consolidated-layout';

  const content = document.createElement('div');
  content.className = 'consolidated-content';

  groupedSections.forEach((section) => {
    const copy = section.querySelector('.section-copy');
    if (!copy) return;

    copy.className = 'consolidated-item';
    if (section.id) copy.id = section.id;
    content.appendChild(copy);
  });

  const sharedMedia = leadSection.querySelector('.section-media');
  layout.appendChild(content);

  if (sharedMedia) {
    sharedMedia.classList.add('consolidated-media');
    layout.appendChild(sharedMedia);
  } else {
    layout.classList.add('without-media');
  }

  consolidatedSection.appendChild(layout);
  leadSection.before(consolidatedSection);
  groupedSections.forEach((section) => section.remove());
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Give the page a gentle entrance without hiding content when JavaScript is unavailable.
if (!reducedMotion) {
  requestAnimationFrame(() => document.body.classList.add('page-loaded'));
}

// Add a little depth to the sticky navigation once content begins to scroll beneath it.
const header = document.querySelector('.site-header');
if (header) {
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 20);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

// Reveal key content in small staggered groups as it enters the viewport.
if (!reducedMotion) {
  const revealElements = document.querySelectorAll([
    '.section-heading',
    '.split-section',
    '.service-card',
    '.value-card',
    '.info-card',
    '.quote-card',
    '.gallery-card',
    '.review-card',
    '.contact-cards > div',
    '.prototype-form',
    '.training-intro',
    '.training-panel',
    '.consolidated-item',
    '.trust-strip > div'
  ].join(','));

  revealElements.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }
}
