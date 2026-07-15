import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    id: 1,
    brandLogo: "https://images.seeklogo.com/logo-png/62/1/google-new-logo-png_seeklogo-622426.png",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Mountain View, California, USA",
  },
  {
    id: 2,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVooNbmrQduvFXQhUp5e9GUajxnf-ZuEhnIJ0kRLXW8ZZQwnsCTpAUmg&s=10",
    company: "Microsoft",
    datePosted: "5 days ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Seattle, Washington, USA",
  },
  {
    id: 3,
    brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    company: "Apple",
    datePosted: "1 week ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Cupertino, California, USA",
  },
  {
    id: 4,
    brandLogo: "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Austin, Texas, USA",
  },
  {
    id: 5,
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    company: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Menlo Park, California, USA",
  },
  {
    id: 6,
    brandLogo: "https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png",
    company: "Netflix",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Los Gatos, California, USA",
  },
  {
    id: 7,
    brandLogo: "https://download.logo.wine/logo/Nvidia/Nvidia-Logo.wine.png",
    company: "NVIDIA",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Santa Clara, California, USA",
  },
  {
    id: 8,
    brandLogo: "https://static.cdnlogo.com/logos/a/90/adobe.png",
    company: "Adobe",
    datePosted: "4 weeks ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "San Jose, California, USA",
  },
  {
    id: 9,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg1w18KI-tGnCvJpBVHSNOQruCAzCgP3bkcB361xeTA&s=10",
    company: "Oracle",
    datePosted: "3 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Austin, Texas, USA",
  },
  {
    id: 10,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/OpenAI_logo_2025_%28symbol%29.svg/960px-OpenAI_logo_2025_%28symbol%29.svg.png",
    company: "OpenAI",
    datePosted: "5 hours ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "San Francisco, California, USA",
  },
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx) {

        return <div key={idx}>
          <Card company={elem.company} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} logo={elem.brandLogo} location={elem.location} datePosted={elem.datePosted}/>
        </div>
        
      })}
    </div>
  )
}

export default App
