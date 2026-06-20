/* ─── CATEGORY FILTERING ─── */
function filterCategory(cat) {
  // Update active button state
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // Find clicked button
  const clickedBtn = Array.from(buttons).find(btn => {
    return btn.getAttribute('onclick').includes(cat);
  });
  if (clickedBtn) clickedBtn.classList.add('active');

  // Filter cards
  const cards = document.querySelectorAll('.volunteer-card');
  cards.forEach(card => {
    const categories = card.getAttribute('data-category').split(' ');
    if (cat === 'all' || categories.includes(cat)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ─── CREDENTIAL MODAL ─── */
function verifyCredentials(name, score, hours, project, level) {
  const modal = document.getElementById('credentialModal');
  
  // Populate details
  document.getElementById('modalName').textContent = name;
  document.getElementById('modalScore').textContent = score;
  document.getElementById('modalHours').textContent = hours;
  document.getElementById('modalProject').textContent = project;
  
  // Open modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  const modal = document.getElementById('credentialModal');
  
  // Close only if clicking overlay or close button
  if (e && e.target !== modal && !e.target.classList.contains('modal-close')) {
    return;
  }
  
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on Escape key press
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

/* ─── INDIA IMPACT MAP DATABASE ─── */
const cityData = {
  saharanpur: {
    name: "Saharanpur",
    region: "Uttar Pradesh",
    volunteers: 1,
    events: 4,
    hours: 120,
    students: 150,
    dsc: 8400,
    story: {
      tag: "Tech & Mentorship",
      date: "October 12, 2025",
      text: "Shourya Garg spearheaded the Saharanpur chapter, organizing 4 community events, mentoring 20 students, and designing the main DISHA For Life trust website, generating 8,400 DSC coins.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop",
      volunteer: "Shourya Garg",
      avatar: "shourya.png"
    }
  },
  ghaziabad: {
    name: "Ghaziabad",
    region: "Uttar Pradesh",
    volunteers: 12,
    events: 8,
    hours: 320,
    students: 450,
    dsc: 9600,
    story: {
      tag: "Career Guidance",
      date: "October 20, 2025",
      text: "Career Guidance Workshop conducted in Ghaziabad reached 120 students and was organized by DISHA volunteers to help high schoolers map out vocational and college opportunities.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop",
      volunteer: "Aditya Patel",
      avatar: "AP"
    }
  },
  delhi: {
    name: "Delhi NCR",
    region: "National Capital Region",
    volunteers: 35,
    events: 18,
    hours: 1250,
    students: 2800,
    dsc: 48200,
    story: {
      tag: "Upskilling Summit",
      date: "November 05, 2025",
      text: "A comprehensive Youth Upskilling summit in Delhi provided free AI upskilling assessments, resume guidance, and mock interviews for over 350 regional candidates.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&auto=format&fit=crop",
      volunteer: "Amit Kumar",
      avatar: "AK"
    }
  },
  noida: {
    name: "Noida",
    region: "Uttar Pradesh",
    volunteers: 18,
    events: 10,
    hours: 480,
    students: 980,
    dsc: 18400,
    story: {
      tag: "Digital Literacy",
      date: "December 18, 2025",
      text: "Noida volunteers successfully conducted a 3-week basic programming and computing literacy bootcamp, helping regional school students learn web markup and coding essentials.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop",
      volunteer: "Rahul Sharma",
      avatar: "RS"
    }
  },
  jaipur: {
    name: "Jaipur",
    region: "Rajasthan",
    volunteers: 15,
    events: 6,
    hours: 290,
    students: 620,
    dsc: 8800,
    story: {
      tag: "Wellness Drive",
      date: "January 14, 2026",
      text: "Jaipur chapter members organized an emotional wellness drive, providing student mental health guidelines and interactive counseling seminars.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop",
      volunteer: "Priya Sharma",
      avatar: "PS"
    }
  },
  lucknow: {
    name: "Lucknow",
    region: "Uttar Pradesh",
    volunteers: 14,
    events: 7,
    hours: 310,
    students: 840,
    dsc: 9200,
    story: {
      tag: "Financial Awareness",
      date: "February 22, 2026",
      text: "A Financial Literacy workshop in Lucknow introduced 210 trade school students to secure banking procedures and basic family budgeting outlines.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop",
      volunteer: "Sneha Gupta",
      avatar: "SG"
    }
  },
  mumbai: {
    name: "Mumbai",
    region: "Maharashtra",
    volunteers: 22,
    events: 12,
    hours: 760,
    students: 1450,
    dsc: 24500,
    story: {
      tag: "Tech For Good",
      date: "March 10, 2026",
      text: "Mumbai developer volunteers held a localized code sprint, successfully building prototype portals for local welfare organizations.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop",
      volunteer: "Vikram Singh",
      avatar: "VS"
    }
  },
  bengaluru: {
    name: "Bengaluru",
    region: "Karnataka",
    volunteers: 28,
    events: 15,
    hours: 920,
    students: 2100,
    dsc: 32800,
    story: {
      tag: "Widget Dev",
      date: "April 05, 2026",
      text: "Bengaluru tech volunteers conducted hands-on programming bootcamps, guiding 130 engineering graduates in contributing open source widgets.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop",
      volunteer: "Karan Johar",
      avatar: "KJ"
    }
  }
};

/* ─── MAP INTERACTION LOGIC ─── */
function animateValue(id, start, end, duration, formatFn) {
  const obj = document.getElementById(id);
  if (!obj) return;
  const range = end - start;
  const startTime = new Date().getTime();
  const endTime = startTime + duration;
  
  function run() {
    const now = new Date().getTime();
    const remaining = Math.max((endTime - now) / duration, 0);
    const value = Math.round(end - (remaining * range));
    obj.textContent = formatFn ? formatFn(value) : value;
    if (value === end) {
      clearInterval(timer);
    }
  }
  
  const timer = setInterval(run, 16);
  run();
}

function selectCity(cityId) {
  const data = cityData[cityId];
  if (!data) return;
  
  // Highlight active marker on SVG
  document.querySelectorAll('.map-marker').forEach(marker => {
    marker.classList.remove('active');
  });
  const activeMarker = document.getElementById(`marker-${cityId}`);
  if (activeMarker) activeMarker.classList.add('active');
  
  // Update Dashboard Headers
  document.getElementById('dashCityName').textContent = data.name;
  document.getElementById('dashRegion').textContent = data.region;
  
  // Animate stats count-up
  animateValue("statVolunteers", 0, data.volunteers, 400);
  animateValue("statEvents", 0, data.events, 400);
  animateValue("statHours", 0, data.hours, 400, v => v.toLocaleString() + " hrs");
  animateValue("statStudents", 0, data.students, 400, v => v.toLocaleString());
  animateValue("statDSC", 0, data.dsc, 400, v => v.toLocaleString() + " DSC");
  
  // Update Story block
  document.getElementById('storyTag').textContent = data.story.tag;
  document.getElementById('storyDate').textContent = data.story.date;
  document.getElementById('storyText').textContent = data.story.text;
  document.getElementById('storyImage').style.backgroundImage = `url('${data.story.image}')`;
  document.getElementById('storyAuthorName').textContent = data.story.volunteer;
  
  // Set volunteer avatar (initials or custom photo)
  const avatarEl = document.getElementById('storyAuthorAvatar');
  if (data.story.avatar.endsWith('.png')) {
    avatarEl.innerHTML = `<img src="${data.story.avatar}" alt="${data.story.volunteer}">`;
  } else {
    avatarEl.innerHTML = data.story.avatar;
  }
}

// Auto-select Saharanpur on load
document.addEventListener('DOMContentLoaded', () => {
  selectCity('saharanpur');
});
