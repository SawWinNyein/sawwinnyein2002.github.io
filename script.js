// Language content objects
const languages = {
    english: {
        title: "My Personal Website",
        personalInfoTitle: "Personal Information",
        nameLabel: "Name:",
        name: "John Doe",
        ageLabel: "Age:",
        age: "25",
        interestsLabel: "Interests:",
        interests: "Web Development, Photography, Travel",
        colorLabel: "Favorite Color:",
        color: "Blue",
        sportLabel: "Favorite Sport:",
        sport: "Basketball",
        heightLabel: "Height:",
        height: "175 cm",
        weightLabel: "Weight:",
        weight: "70 kg",
        skillsTitle: "Skills",
        computerRepair: "Computer Repair",
        microsoftOffice: "Microsoft Office",
        photoshop: "Photoshop",
        htmlSkill: "HTML",
        projectsTitle: "My Projects",
        travelBlog: "Travel Blog",
        travelDesc: "A blog documenting my travels around the world with photos and stories.",
        peduDesc: "An educational platform for learning new skills.",
        computerTeaching: "Computer Teaching",
        teachingDesc: "A project to teach computer skills to beginners.",
        contactTitle: "Contact Me",
        nameInputLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Message:",
        submitBtn: "Send Message",
        copyright: "© 2023 My Personal Website. All rights reserved."
    },
    function changeLanguage(lang) {
  const viewPhotoBtn = document.getElementById('viewPhotoBtn');
  if (photo.style.display === 'none') {
    if (lang === 'english') viewPhotoBtn.textContent = 'View Photo';
    else if (lang === 'myanmar') viewPhotoBtn.textContent = 'ဓာတ်ပုံကြည့်ရန်';
    else if (lang === 'sgawKaren') viewPhotoBtn.textContent = 'ဓာတ်ပုံကြည့်ရန် (စကော)';
    else if (lang === 'pwoKaren') viewPhotoBtn.textContent = 'ဓာတ်ပုံကြည့်ရန် (ပိုး)
    myanmar: {
        title: "ကျွန်တော့်ကိုယ်ပိုင် ဝက်ဘ်ဆိုဒ်",
        personalInfoTitle: "ကိုယ်ရေးအချက်အလက်",
        nameLabel: "နာမည်:",
        name: "ကျော်ထက်အောင်",
        ageLabel: "အသက်:",
        age: "၂၅ နှစ်",
        interestsLabel: "စိတ်ဝင်စားသည့်အရာ:",
        interests: "ဝဘ်ဖွံ့ဖြိုးရေး၊ ဓာတ်ပုံ၊ ခရီးသွား",
        colorLabel: "အကြိုက်ဆုံးအရောင်:",
        color: "အပြာ",
        sportLabel: "အကြိုက်ဆုံးအားကစား:",
        sport: "ဘတ်စကက်ဘော",
        heightLabel: "အရပ်အမြင့်:",
        height: "၁၇၅ စင်တီမီတာ",
        weightLabel: "အလေးချိန်:",
        weight: "၇၀ ကီလိုဂရမ်",
        skillsTitle: "တတ်ကျွမ်းသည့်အရာများ",
        computerRepair: "ကွန်ပျူတာပြုပြင်ခြင်း",
        microsoftOffice: "Microsoft Office",
        photoshop: "ဖိုတိုရှော့",
        htmlSkill: "HTML",
        projectsTitle: "ပရောဂျက်များ",
        travelBlog: "ခရီးသွားဘလော့",
        travelDesc: "ကမ္ဘာတစ်ဝှမ်းရှိ ကျွန်တော့်ခရီးသွားမှတ်တမ်းများ",
        peduDesc: "ကျွမ်းကျင်မှုအသစ်များသင်ယူရန် ပညာရေးပလက်ဖောင်း",
        computerTeaching: "ကွန်ပျူတာသင်ကြားရေး",
        teachingDesc: "အစပျိုးသူများအတွက် ကွန်ပျူတာကျွမ်းကျင်မှုများသင်ကြားပေးသည့်ပရောဂျက်",
        contactTitle: "ဆက်သွယ်ရန်",
        nameInputLabel: "နာမည်:",
        emailLabel: "အီးမေးလ်:",
        messageLabel: "မက်ဆေ့ဂျ်:",
        submitBtn: "မက်ဆေ့ဂျ်ပို့ရန်",
        copyright: "© ၂၀၂၃ ကျွန်တော့်ကိုယ်ပိုင် ဝက်ဘ်ဆိုဒ်။ အခွင့်အရေးအားလုံးရှိသည်။"
    },
    sgawKaren: {
        title: "ကညီဒီၣ်ကရၢတၢ်ဆဲးကျိးအလီၢ်ကစီၣ်",
        personalInfoTitle: "ကညီဒီၣ်ကရၢတၢ်အခီၣ်ထံးခီၣ်ဘျံးပတၢ်",
        nameLabel: "နၢ်မးလီၤ:",
        name: "ဂျၢ်နီထၢ",
        ageLabel: "အသကလီၤ:",
        age: "၂၅ နံၣ်",
        interestsLabel: "စီၤကညီဒီၣ်ကရၢတၢ်ဆဲးကျိးအလီၢ်ကစီၣ်:",
        interests: "ဝဘ်ဖွံ့ဖြိုးရေး၊ ဓာတ်ပုံ၊ ခရီးသွား",
        colorLabel: "အကြိုက်ဆုံးအရောင်:",
        color: "အပြာ",
        sportLabel: "အကြိုက်ဆုံးအားကစား:",
        sport: "ဘတ်စကက်ဘော",
        heightLabel: "အရပ်အမြင့်:",
        height: "၁၇၅ စင်တီမီတာ",
        weightLabel: "အလေးချိန်:",
        weight: "၇၀ ကီလိုဂရမ်",
        skillsTitle: "တတ်ကျွမ်းသည့်အရာများ",
        computerRepair: "ကွန်ပျူတာပြုပြင်ခြင်း",
        microsoftOffice: "Microsoft Office",
        photoshop: "ဖိုတိုရှော့",
        htmlSkill: "HTML",
        projectsTitle: "ပရောဂျက်များ",
        travelBlog: "ခရီးသွားဘလော့",
        travelDesc: "ကမ္ဘာတစ်ဝှမ်းရှိ ကျွန်တော့်ခရီးသွားမှတ်တမ်းများ",
        peduDesc: "ကျွမ်းကျင်မှုအသစ်များသင်ယူရန် ပညာရေးပလက်ဖောင်း",
        computerTeaching: "ကွန်ပျူတာသင်ကြားရေး",
        teachingDesc: "အစပျိုးသူများအတွက် ကွန်ပျူတာကျွမ်းကျင်မှုများသင်ကြားပေးသည့်ပရောဂျက်",
        contactTitle: "ဆက်သွယ်ရန်",
        nameInputLabel: "နာမည်:",
        emailLabel: "အီးမေးလ်:",
        messageLabel: "မက်ဆေ့ဂျ်:",
        submitBtn: "မက်ဆေ့ဂျ်ပို့ရန်",
        copyright: "© ၂၀၂၃ ကျွန်တော့်ကိုယ်ပိုင် ဝက်ဘ်ဆိုဒ်။ အခွင့်အရေးအားလုံးရှိသည်။"
    },
    pwoKaren: {
        title: "ကညီဒီၣ်ကရၢတၢ်ဆဲးကျိးအလီၢ်ကစီၣ် (ပိုးကရင်)",
        personalInfoTitle: "ကညီဒီၣ်ကရၢတၢ်အခီၣ်ထံးခီၣ်ဘျံးပတၢ်",
        nameLabel: "နၢ်မးလီၤ:",
        name: "ဂျၢ်နီထၢ",
        ageLabel: "အသကလီၤ:",
        age: "၂၅ နံၣ်",
        interestsLabel: "စီၤကညီဒီၣ်ကရၢတၢ်ဆဲးကျိးအလီၢ်ကစီၣ်:",
        interests: "ဝဘ်ဖွံ့ဖြိုးရေး၊ ဓာတ်ပုံ၊ ခရီးသွား",
        colorLabel: "အကြိုက်ဆုံးအရောင်:",
        color: "အပြာ",
        sportLabel: "အကြိုက်ဆုံးအားကစား:",
        sport: "ဘတ်စကက်ဘော",
        heightLabel: "အရပ်အမြင့်:",
        height: "၁၇၅ စင်တီမီတာ",
        weightLabel: "အလေးချိန်:",
        weight: "၇၀ ကီလိုဂရမ်",
        skillsTitle: "တတ်ကျွမ်းသည့်အရာများ",
        computerRepair: "ကွန်ပျူတာပြုပြင်ခြင်း",
        microsoftOffice: "Microsoft Office",
        photoshop: "ဖိုတိုရှော့",
        htmlSkill: "HTML",
        projectsTitle: "ပရောဂျက်များ",
        travelBlog: "ခရီးသွားဘလော့",
        travelDesc: "ကမ္ဘာတစ်ဝှမ်းရှိ ကျွန်တော့်ခရီးသွားမှတ်တမ်းများ",
        peduDesc: "ကျွမ်းကျင်မှုအသစ်များသင်ယူရန် ပညာရေးပလက်ဖောင်း",
        computerTeaching: "ကွန်ပျူတာသင်ကြားရေး",
        teachingDesc: "အစပျိုးသူများအတွက် ကွန်ပျူတာကျွမ်းကျင်မှုများသင်ကြားပေးသည့်ပရောဂျက်",
        contactTitle: "ဆက်သွယ်ရန်",
        nameInputLabel: "နာမည်:",
        emailLabel: "အီးမေးလ်:",
        messageLabel: "မက်ဆေ့ဂျ်:",
        submitBtn: "မက်ဆေ့ဂျ်ပို့ရန်",
        copyright: "© ၂၀၂၃ ကျွန်တော့်ကိုယ်ပိုင် ဝက်ဘ်ဆိုဒ်။ အခွင့်အရေးအားလုံးရှိသည်။"
    }
};

// Function to change language
function changeLanguage(lang) {
    const content = languages[lang];
    
    document.getElementById('title').textContent = content.title;
    document.getElementById('personalInfoTitle').textContent = content.personalInfoTitle;
    document.getElementById('nameLabel').textContent = content.nameLabel;
    document.getElementById('name').textContent = content.name;
    document.getElementById('ageLabel').textContent = content.ageLabel;
    document.getElementById('age').textContent = content.age;
    document.getElementById('interestsLabel').textContent = content.interestsLabel;
    document.getElementById('interests').textContent = content.interests;
    document.getElementById('colorLabel').textContent = content.colorLabel;
    document.getElementById('color').textContent = content.color;
    document.getElementById('sportLabel').textContent = content.sportLabel;
    document.getElementById('sport').textContent = content.sport;
    document.getElementById('heightLabel').textContent = content.heightLabel;
    document.getElementById('height').textContent = content.height;
    document.getElementById('weightLabel').textContent = content.weightLabel;
    document.getElementById('weight').textContent = content.weight;
    document.getElementById('skillsTitle').textContent = content.skillsTitle;
    document.getElementById('computerRepair').textContent = content.computerRepair;
    document.getElementById('microsoftOffice').textContent = content.microsoftOffice;
    document.getElementById('photoshop').textContent = content.photoshop;
    document.getElementById('htmlSkill').textContent = content.htmlSkill;
    document.getElementById('projectsTitle').textContent = content.projectsTitle;
    document.getElementById('travelBlog').textContent = content.travelBlog;
    document.getElementById('travelDesc').textContent = content.travelDesc;
    document.getElementById('peduDesc').textContent = content.peduDesc;
    document.getElementById('computerTeaching').textContent = content.computerTeaching;
    document.getElementById('teachingDesc').textContent = content.teachingDesc;
    document.getElementById('contactTitle').textContent = content.contactTitle;
    document.getElementById('nameInputLabel').textContent = content.nameInputLabel;
    document.getElementById('emailLabel').textContent = content.emailLabel;
    document.getElementById('messageLabel').textContent = content.messageLabel;
    document.getElementById('submitBtn').textContent = content.submitBtn;
    document.getElementById('copyright').textContent = content.copyright;
}
document.getElementById('viewPhotoBtn').addEventListener('click', function() {
  const photo = document.getElementById('profilePhoto');
  const placeholder = document.getElementById('profilePicPlaceholder');
  
  if (photo.style.display === 'none') {
    photo.style.display = 'block';
    placeholder.style.display = 'none';
    this.textContent = 'Hide Photo';
  } else {
    photo.style.display = 'none';
    placeholder.style.display = 'flex';
    this.textContent = 'View Photo';
  }
});

// Event listeners for language buttons
document.getElementById('btnEnglish').addEventListener('click', () => changeLanguage('english'));
document.getElementById('btnMyanmar').addEventListener('click', () => changeLanguage('myanmar'));
document.getElementById('btnSgawKaren').addEventListener('click', () => changeLanguage('sgawKaren'));
document.getElementById('btnPwoKaren').addEventListener('click', () => changeLanguage('pwoKaren'));

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Animate skill bars on scroll
window.addEventListener('scroll', function() {
    const skillBars = document.querySelectorAll('.bar');
    const skillsSection = document.querySelector('.skills');
    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    
    if (scrollPosition > sectionTop + sectionHeight / 2) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
});

// Initialize with English
changeLanguage('english');
