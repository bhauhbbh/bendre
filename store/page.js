// store/page.js
import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => ({
    pageData: {
      academics: {
        title: 'Academic Programs',
        content: `
          <h2>Excellence in Education</h2>
          <p>At Bendre PU College, we offer a wide range of academic programs designed to challenge and inspire our students. Our curriculum is carefully crafted to provide a strong foundation in core subjects while encouraging critical thinking and creativity.</p>
          <h3>Our Programs</h3>
          <ul>
            <li>Science Stream (PCMB, PCMC)</li>
            <li>Commerce Stream</li>
            <li>Arts Stream</li>
          </ul>
          <p>Each program is taught by experienced faculty members who are passionate about their subjects and dedicated to student success.</p>
        `,
        image: '/academics.jpg'
      },
      'student-life': {
        title: 'Student Life at Bendre PU College',
        content: `
          <h2>A Vibrant Campus Community</h2>
          <p>Life at Bendre PU College extends far beyond the classroom. We believe in nurturing well-rounded individuals by providing a rich tapestry of extracurricular activities and experiences.</p>
          <h3>Key Aspects of Student Life</h3>
          <ul>
            <li>Student Clubs and Organizations</li>
            <li>Sports and Fitness Facilities</li>
            <li>Cultural Events and Festivals</li>
            <li>Community Service Opportunities</li>
          </ul>
          <p>Our campus buzzes with energy as students engage in various activities, fostering friendships, leadership skills, and personal growth.</p>
        `,
        image: '/student-life.jpg'
      },
      admissions: {
        title: 'Admissions',
        content: `
          <h2>Join Our Community of Learners</h2>
          <p>We welcome ambitious and curious minds to join our esteemed institution. The admission process at Bendre PU College is designed to be transparent and merit-based.</p>
          <h3>Admission Process</h3>
          <ol>
            <li>Online Application Submission</li>
            <li>Entrance Examination</li>
            <li>Document Verification</li>
            <li>Personal Interview</li>
            <li>Merit List Publication</li>
          </ol>
          <p>We encourage prospective students to visit our campus and get a firsthand experience of our facilities and vibrant community.</p>
        `,
        image: '/admissions.jpg'
      },
      hostel: {
        title: 'Hostel Facilities',
        content: `
          <h2>A Home Away From Home</h2>
          <p>Bendre PU College offers comfortable and secure hostel facilities for both boys and girls. Our hostels are designed to provide a conducive environment for academic pursuits and personal growth.</p>
          <h3>Separate Hostels for Boys and Girls</h3>
          <p>We maintain separate hostel buildings for male and female students, ensuring privacy and comfort for all residents.</p>
          <h3>Boys' Hostel</h3>
          <ul>
            <li>Modern, well-ventilated rooms</li>
            <li>24/7 security and CCTV surveillance</li>
            <li>Common room with recreational facilities</li>
            <li>High-speed Wi-Fi connectivity</li>
          </ul>
          <h3>Girls' Hostel</h3>
          <ul>
            <li>Comfortable, furnished rooms</li>
            <li>Dedicated warden and female security staff</li>
            <li>Indoor gym and yoga room</li>
            <li>Study areas on each floor</li>
          </ul>
          <p>Both hostels provide nutritious meals, laundry services, and regular cultural activities to ensure a homely atmosphere for our students.</p>
        `,
        image: '/hostel.jpg'
      },
      library: {
        title: 'Library Resources',
        content: `
          <h2>Expand Your Knowledge</h2>
          <p>The Bendre PU College library is a treasure trove of knowledge, housing an extensive collection of books, journals, and digital resources. Our state-of-the-art facility is designed to support academic research and foster a love for reading.</p>
          <h3>Library Features</h3>
          <ul>
            <li>Vast collection of textbooks and reference materials</li>
            <li>Digital library with access to online journals and e-books</li>
            <li>Quiet study areas and group discussion rooms</li>
            <li>Regular book clubs and literary events</li>
            <li>Knowledgeable librarians to assist with research</li>
          </ul>
          <p>We continually update our collection to ensure our students have access to the latest information in their fields of study.</p>
        `,
        image: '/library.jpg'
      },
      'sports-facilities': {
        title: 'Sports Facilities',
        content: `
          <h2>Nurturing Athletic Excellence</h2>
          <p>At Bendre PU College, we believe in the importance of physical education alongside academic pursuits. Our world-class sports facilities cater to a wide range of athletic interests and skill levels.</p>
          <h3>Our Sports Infrastructure</h3>
          <ul>
            <li>Olympic-sized swimming pool</li>
            <li>Multi-purpose indoor stadium for basketball, volleyball, and badminton</li>
            <li>State-of-the-art fitness center with trained instructors</li>
            <li>Outdoor track and field facilities</li>
            <li>Cricket ground with practice nets</li>
            <li>Tennis and table tennis courts</li>
          </ul>
          <p>We encourage all students to participate in sports activities, fostering teamwork, discipline, and a healthy lifestyle. Regular inter-college tournaments and sports meets are organized to promote competitive spirit.</p>
        `,
        image: '/sports.jpg'
      },
      
    },
  }),
  actions: {
    async getPageData(slug) {
      // Simulate API call or database fetch
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.pageData[slug] || null)
        }, 100)
      })
    },
  },
})