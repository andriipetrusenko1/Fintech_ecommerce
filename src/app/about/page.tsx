import Image from 'next/image';
import Link from 'next/link';
import { FaChartLine, FaShieldAlt, FaUsers, FaGlobe, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// Team member type
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
};

// Company values type
type CompanyValue = {
  id: number;
  title: string;
  description: string;
  iconName: 'chart' | 'shield' | 'users' | 'globe';
};

// Team members data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
    bio: 'Sarah has over 20 years of experience in the financial industry. She previously served as CFO at a Fortune 500 company before founding FinTech Commerce.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'sarah@fintechcommerce.com',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    bio: 'Michael brings 15 years of financial expertise, having worked at top investment banks. He oversees all financial operations and strategic planning.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'michael@fintechcommerce.com',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Chief Investment Officer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80',
    bio: 'Emily has a proven track record of managing high-performing investment portfolios. She leads our investment strategy and product development.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'emily@fintechcommerce.com',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    bio: 'David is a technology visionary with expertise in fintech solutions. He oversees our platform development and technological innovation.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'david@fintechcommerce.com',
  },
  {
    id: 5,
    name: 'Jessica Kim',
    role: 'Head of Client Relations',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
    bio: 'Jessica ensures our clients receive exceptional service. She leads our client relations team with a focus on personalized financial guidance.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'jessica@fintechcommerce.com',
  },
  {
    id: 6,
    name: 'Robert Wilson',
    role: 'Head of Risk Management',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    bio: 'Robert specializes in financial risk assessment and mitigation. He ensures our products maintain the perfect balance of risk and reward.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'robert@fintechcommerce.com',
  },
];

// Company values data
const companyValues: CompanyValue[] = [
  {
    id: 1,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from the products we offer to the service we provide our clients.',
    iconName: 'chart'
  },
  {
    id: 2,
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty, always putting our clients\' interests first.',
    iconName: 'shield'
  },
  {
    id: 3,
    title: 'Client Focus',
    description: 'Our clients are at the center of everything we do. We\'re committed to understanding and meeting their unique needs.',
    iconName: 'users'
  },
  {
    id: 4,
    title: 'Innovation',
    description: 'We continuously innovate to provide cutting-edge financial solutions that help our clients achieve their goals.',
    iconName: 'globe'
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 bottom-0 h-full w-full text-white opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              About FinTech Commerce
            </h1>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
              We&apos;re on a mission to transform the financial landscape by providing premium products and services that empower individuals and businesses to achieve their financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="FinTech Commerce Headquarters"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-secondary-600">
                <p>
                  Founded in 2010, FinTech Commerce began with a simple vision: to make premium financial products accessible to everyone. What started as a small team of financial experts has grown into a leading provider of innovative financial solutions.
                </p>
                <p>
                  Over the years, we've helped thousands of clients achieve their financial goals through our carefully curated selection of investment products, insurance solutions, retirement plans, and wealth management services.
                </p>
                <p>
                  Our approach combines traditional financial wisdom with cutting-edge technology, allowing us to offer personalized solutions that adapt to the changing needs of our clients and the evolving financial landscape.
                </p>
                <p>
                  Today, FinTech Commerce stands as a testament to our commitment to excellence, integrity, and client satisfaction. We continue to innovate and expand our offerings, always with the goal of empowering our clients to secure their financial future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Our Mission & Vision
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">Our Mission</h3>
              <p className="text-secondary-600 mb-6">
                To provide accessible, premium financial solutions that empower individuals and businesses to achieve financial security and growth. We are committed to delivering exceptional value through innovative products, personalized service, and expert guidance.
              </p>
              <div className="border-t border-primary-200 pt-6">
                <p className="text-primary-700 font-medium">
                  "We believe everyone deserves access to financial products that can transform their future."
                </p>
              </div>
            </div>
            
            <div className="bg-secondary-50 rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">Our Vision</h3>
              <p className="text-secondary-600 mb-6">
                To be the most trusted provider of financial solutions globally, recognized for our commitment to excellence, innovation, and client success. We envision a world where financial prosperity is within reach for all, supported by our comprehensive suite of products and services.
              </p>
              <div className="border-t border-secondary-200 pt-6">
                <p className="text-secondary-700 font-medium">
                  "We&apos;re building a future where financial success is accessible to everyone."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-secondary-600">
              These principles guide everything we do, from product development to client interactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value) => (
              <div key={value.id} className="bg-white rounded-xl p-8 shadow-soft text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.iconName === 'chart' && <FaChartLine className="h-8 w-8 text-primary-600" />}
                  {value.iconName === 'shield' && <FaShieldAlt className="h-8 w-8 text-primary-600" />}
                  {value.iconName === 'users' && <FaUsers className="h-8 w-8 text-primary-600" />}
                  {value.iconName === 'globe' && <FaGlobe className="h-8 w-8 text-primary-600" />}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-secondary-600">
              Our experienced team of financial experts is dedicated to helping you achieve your financial goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-secondary-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                        <FaLinkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                        <FaTwitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                        <FaEnvelope className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-primary-100">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15,000+</div>
              <div className="text-primary-100">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">$2B+</div>
              <div className="text-primary-100">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-secondary-600 mb-6 italic">
                "FinTech Commerce has transformed how I approach my investments. Their personalized service and expert guidance have helped me achieve financial goals I never thought possible."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                    alt="Client"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">John Smith</p>
                  <p className="text-sm text-secondary-500">CEO, Tech Innovations</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-secondary-600 mb-6 italic">
                "The retirement planning package from FinTech Commerce has given me peace of mind about my future. Their team took the time to understand my needs and created a perfect plan."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"
                    alt="Client"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">Sarah Johnson</p>
                  <p className="text-sm text-secondary-500">Marketing Director</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-secondary-600 mb-6 italic">
                "As a small business owner, I needed financial solutions that could grow with my company. FinTech Commerce delivered exactly that, with products that have scaled perfectly with my business."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                    alt="Client"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">Michael Chen</p>
                  <p className="text-sm text-secondary-500">Founder, Artisan Crafts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of satisfied clients who have transformed their financial outlook with our premium products and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors duration-200 shadow-sm text-center">
                Contact Us Today
              </Link>
              <Link href="/products" className="bg-transparent hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-md border border-white transition-colors duration-200 text-center">
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}