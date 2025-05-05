import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Pill, Users, Award, Sparkles, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white rounded-xl p-8 md:p-12 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About MedAI Pharmacy</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Pioneering the future of pharmaceutical care with AI-powered solutions and personalized service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, MedAI Pharmacy was born from a simple yet powerful idea: what if we could combine the
              precision of artificial intelligence with the personal touch of traditional pharmacy care?
            </p>
            <p className="text-gray-600 mb-4">
              Our founder, Dr. Amira Hassan, a pharmacist with over 15 years of experience, recognized that while
              technology was transforming many industries, pharmaceutical care remained largely unchanged. She
              envisioned a pharmacy that would leverage cutting-edge AI to provide more accurate, personalized, and
              accessible healthcare.
            </p>
            <p className="text-gray-600">
              Today, MedAI Pharmacy serves thousands of customers across Egypt, offering not just medications but
              comprehensive health solutions powered by our proprietary AI system that helps predict potential drug
              interactions, recommend optimal dosing schedules, and provide personalized health advice.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-0 h-[400px] relative w-full overflow-hidden">
            <Image
              src="https://t4.ftcdn.net/jpg/06/34/54/05/360_F_634540579_ZTHpwJJ4NZHTlizf1vukBqeHDla1laVK.jpg"
              alt="MedAI Pharmacy Founder"
              fill
              className="object-cover rounded-xl"
              />
            </div>

        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
              <Sparkles className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We continuously explore new technologies and approaches to improve pharmaceutical care and patient
              outcomes.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Compassion</h3>
            <p className="text-gray-600">
              We approach every customer interaction with empathy, understanding that behind every prescription is a
              person with unique needs.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
              <Award className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
            <p className="text-gray-600">
              We hold ourselves to the highest standards in every aspect of our service, from medication accuracy to
              customer support.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
              <Clock className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Accessibility</h3>
            <p className="text-gray-600">
              We believe quality healthcare should be available to everyone, which is why we offer 24/7 virtual support
              and affordable delivery options.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
              <Shield className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Trust</h3>
            <p className="text-gray-600">
              We maintain the highest standards of privacy and security, ensuring your health information is always
              protected.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
              <Pill className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
            <p className="text-gray-600">
              We empower our customers with knowledge about their medications and health conditions to promote better
              health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <Image
                src="https://img.freepik.com/free-photo/young-hispanic-woman-pharmacist-smiling-confident-standing-with-arms-crossed-gesture-pharmacy_839833-7087.jpg"
                alt="Dr. Amira Hassan"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Dr. Amira Hassan</h3>
              <p className="text-emerald-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Pharmacist with 15+ years of experience and a vision for AI-enhanced healthcare.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <Image
                src="https://img.freepik.com/free-photo/pharmacist-work_23-2150600097.jpg?semt=ais_hybrid&w=740"
                alt="Dr. Karim Mahmoud"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Dr. Karim Mahmoud</h3>
              <p className="text-emerald-600 mb-2">Chief Pharmacist</p>
              <p className="text-gray-600 text-sm">
                Specialist in clinical pharmacy with expertise in medication therapy management.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <Image
                src="https://www.reuters.com/resizer/v2/AU2H7NDPPFGPHOAEWW3UAB3OPM.JPG?auth=a31aa22f2284bcdb8c21a7c00bb3bfcc75ef05d5ec62e9f70a3e07a72a5db038&width=1354&quality=80"
                alt="Sara Ahmed"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Sara Ahmed</h3>
              <p className="text-emerald-600 mb-2">AI Research Lead</p>
              <p className="text-gray-600 text-sm">
                Computer scientist specializing in healthcare AI and predictive analytics.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <Image
                src="https://img.freepik.com/free-photo/medium-shot-smiley-man-work_23-2149622834.jpg"
                alt="Mohamed Farid"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Mohamed Farid</h3>
              <p className="text-emerald-600 mb-2">Operations Director</p>
              <p className="text-gray-600 text-sm">
                Logistics expert ensuring timely medication delivery and inventory management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">MedAI By The Numbers</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">15k+</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">99%</p>
            <p className="text-gray-600">Prescription Accuracy</p>
          </div>

          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">24/7</p>
            <p className="text-gray-600">AI Support</p>
          </div>

          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">30+</p>
            <p className="text-gray-600">Qualified Staff</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the MedAI Family</h2>
        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
          Experience the future of pharmaceutical care with MedAI Pharmacy. We're not just a pharmacy; we're your health
          partner.
        </p>
        <Button className="bg-white text-emerald-600 hover:bg-gray-100">Shop Now</Button>
      </section>
    </main>
  )
}
