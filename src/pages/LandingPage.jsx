import React, { lazy, Suspense } from 'react'
import Hero from '../sections/Hero/Hero'

const PainPoints = lazy(() => import('../sections/PainPoints/PainPoints')) 
const Results = lazy(() => import('../sections/Results/Results')) 
const Testimonials = lazy(() => import('../sections/Testimonials/Testimonials')) 
const CTA = lazy(() => import('../sections/CTA/CTA')) 
const FAQ = lazy(() => import('../sections/FAQ/FAQ')) 
const About = lazy(() => import('../sections/About/About')) 

const LandingPage = () => {
  return (
    <>
    <main>
        <Hero />
        <Suspense fallback={ <div style={{minHeight: '100vh'}}></div> }>
        <PainPoints />
        <Results />
        <Testimonials />
        <About />
        <CTA />
        <FAQ />
        </Suspense>
    </main>
    </>
  )
}

export default LandingPage