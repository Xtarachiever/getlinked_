import Alerts from '@/components/alerts/Alerts'
import MainSection from '@/components/main-section/MainSection'
import Section from '@/components/sections/Section';
import React from 'react'

const Main = () => {
  return (
    <div className='text-white min-h-[100vh] relative'>
        <MainSection />
        <Section />
    </div>
  )
}

export default Main