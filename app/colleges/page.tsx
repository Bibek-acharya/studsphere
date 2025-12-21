

import HeroSection from '@/components/college/HeroSection'
import EventShowcase from '@/components/college/event-showcase'
import SuccessSection from '@/components/college/SuccessSection'

import { TestimonialsSection } from '@/components/testimonials-section'

import CourseSection from '@/components/college/coursesection'

import CollegeCard  from '@/components/college/CoursesSection'
import { ExamAnnouncements } from '@/components/college/exam-announcements'
import {LatestNews} from '@/components/college/latest-news'


const page = () => {
  return (
    <div>
     
      <HeroSection />
      
      
     
      <SuccessSection />
    
      <EventShowcase/>
      <CourseSection />
     
      
      <CollegeCard/>
      <ExamAnnouncements />
      <LatestNews />
     
      <TestimonialsSection />
    </div>
  )
}

export default page