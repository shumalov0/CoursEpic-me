
import React from 'react'
import HomeSection1 from './Ui/HomeSection1/HomeSection1'
import HomeSection2 from './Ui/HomeSection2/HomeSection2'
import HomeSection3 from './Ui/HomeSection3/HomeSection3'
import HomeSection4 from './Ui/HomeSection4/HomeSection4'
import HomeSection5 from './Ui/HomeSection5/HomeSection5'
import HomeSection6 from './Ui/HomeSection6/HomeSection6'
import HomeSection7 from './Ui/HomeSection7/HomeSection7'

 const course = [
  {
    id:1,
    category:'Development',
    courseName: 'Premiere Pro CC for Beginners: Video Editing in Premiere',
    courseStar: 4.5,
    coursereting: 200,
    student: 100,
    price: 50,
    mentorPicture: '',
    mentorName: 'shumalov Intiqam',
    level: 'beginner',
    whatyoulearn:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempora, perferendis quas eum vero quibusdam.',
    hour: '4hour',
    courseLanguage:'azerbaijan',
    

    


  
  }
]
const Home = () => {
  return (
    <>
      <HomeSection1/>
      <HomeSection2/>
      <HomeSection3/>
      <HomeSection4/>
      <HomeSection5/>
      <HomeSection6/>
      <HomeSection7/>
    </>
  )
}

export default Home

