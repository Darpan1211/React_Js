import Resume from './resume/Resume';
function app(){
  let obj = {
    name: 'The Compass',
    title:'Enroll as a student, Exit As a Professional',
    url: 'compass.png',
    phone:'9099994612',
    email:'info@thecompass.co.in',
    linkedin: 'https://www.linkedin.com/in/darpan-patel-india',
    skill:['Full Stack Development','Data Science','UI/UX','Python'],
    education:['Not Required'],
    bio:'The Compass aims to create skilled professionals to work on futuristic projects in well-established national and international level companies.The students who pass out of The Compass, are assured with great placements. we have a clientele that understands the need for trained professionals. The Training will be on current & future market trends.'

  }
  return (
  <Resume {...obj} {obj.map(skill=>)}></Resume>
  )
}

export default app;