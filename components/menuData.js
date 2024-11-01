// components/menuData.js
export const topLevelItems = [
  {
      label: 'ABOUT',
      submenu: [
        {
          heading: 'OUR COLLEGE',
          items: [
            { label: 'About Us', path: '/about' },

            { label: 'History', path: '/about#history' },

          ]
        },
        {
          heading: 'PEOPLE',
          items: [
            { label: 'Management', path: '/about#management' },
            { label: 'Faculty', path: '/about#faculty' },
            { label: 'Administration', path: '/about#administration' }
          ]
        },
        {
          heading: 'QUICK LINKS',
          items: [
            { label: 'Campus Life', path: '/campus-life' },
            { label: 'Contact Us', path: '/contact' },
            { label: 'Photo Gallery', path: '/gallery' }
          ]
        }
      ]
  },
  {
      label: 'ACADEMICS & ADMISSIONS',
      submenu: [
        {
          heading: 'ACADEMICS',
          items: [
            { label: 'Programs', path: '/programs' },
            { label: 'Academic Calendar', path: '/calendar' },
            { label: 'Examinations', path: '/examinations' },
            { label: 'Results', path: '/results' }
          ]
        },
        {
          heading: 'ADMISSIONS',
          items: [
            { label: 'How to Apply', path: '/admissions/apply' },
            { label: 'Requirements', path: '/admissions/requirements' },
            { label: 'Fee Structure', path: '/admissions/fees' },
            { label: 'Scholarships', path: '/admissions/scholarships' }
          ]
        },
        {
          heading: 'RESOURCES',
          items: [
            { label: 'Student Handbook', path: '/resources/handbook' },
            { label: 'Forms & Documents', path: '/resources/forms' },
            { label: 'FAQs', path: '/resources/faqs' }
          ]
        }
      ]
  },
  {
      label: 'CAMPUS LIFE',
      submenu: [
        {
          heading: 'FACILITIES',
          items: [
            { label: 'Hostel', path: '/hostel' },
            { label: 'Library', path: '/library' },
            { label: 'Laboratories', path: '/laboratories' },
            { label: 'Sports Complex', path: '/sports' },
            { label: 'Cafeteria', path: '/cafeteria' }
          ]
        },
        {
          heading: 'STUDENT ACTIVITIES',
          items: [
            { label: 'Clubs & Societies', path: '/clubs' },
            { label: 'Sports Teams', path: '/sports-teams' },
            { label: 'Cultural Events', path: '/cultural-events' },
            { label: 'Student Council', path: '/student-council' }
          ]
        },
        {
          heading: 'STUDENT SERVICES',
          items: [
            { label: 'Health Center', path: '/health-center' },
            { label: 'Counseling', path: '/counseling' },
            { label: 'Transport', path: '/transport' }
          ]
        }
      ]
  },
  {
      label: 'ACHIEVEMENTS',
      submenu: [
        {
          heading: 'ACADEMIC EXCELLENCE',
          items: [
            { label: 'Toppers', path: '/toppers' },
            { label: 'Results Analysis', path: '/results-analysis' },
            { label: 'Success Stories', path: '/success-stories' }
          ]
        },
        {
          heading: 'AWARDS & RECOGNITION',
          items: [
            { label: 'Institutional Awards', path: '/institutional-awards' },
            { label: 'Faculty Achievements', path: '/faculty-achievements' },
            { label: 'Student Achievements', path: '/student-achievements' }
          ]
        },
        {
          heading: 'ALUMNI',
          items: [
            { label: 'Notable Alumni', path: '/notable-alumni' },
            { label: 'Alumni Association', path: '/alumni-association' },
            { label: 'Alumni Events', path: '/alumni-events' }
          ]
        }
      ]
  },
  {
      label: 'NEWS & EVENTS',
      submenu: [
        {
          heading: 'LATEST NEWS',
          items: [
            { label: 'College News', path: '/news' },
            { label: 'Announcements', path: '/announcements' },
            { label: 'Press Releases', path: '/press-releases' }
          ]
        },
        {
          heading: 'EVENTS',
          items: [
            { label: 'Upcoming Events', path: '/upcoming-events' },
            { label: 'Academic Events', path: '/academic-events' },
            { label: 'Cultural Events', path: '/cultural-events' },
            { label: 'Sports Events', path: '/sports-events' }
          ]
        },
        {
          heading: 'MEDIA',
          items: [
            { label: 'Photo Gallery', path: '/gallery' },
            { label: 'Video Gallery', path: '/videos' },
            { label: 'Newsletter', path: '/newsletter' }
          ]
        }
      ]
  },
  {
      label: 'CONTACT',
      submenu: [
        {
          heading: 'GET IN TOUCH',
          items: [
            { label: 'Contact Information', path: '/contact' },
            { label: 'Location & Directions', path: '/location' },
            { label: 'Feedback', path: '/feedback' }
          ]
        },
        {
          heading: 'QUICK CONTACT',
          items: [
            { label: 'Admission Enquiry', path: '/admission-enquiry' },
            { label: 'General Enquiry', path: '/general-enquiry' },
            { label: 'Grievances', path: '/grievances' }
          ]
        },
        {
          heading: 'CONNECT WITH US',
          items: [
            { label: 'Social Media', path: '/social-media' },
            { label: 'Campus Visit', path: '/campus-visit' },
            { label: 'Virtual Tour', path: '/virtual-tour' }
          ]
        }
      ]
  }
];