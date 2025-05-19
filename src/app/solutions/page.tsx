import Image from 'next/image';
import Link from 'next/link';
import { 
  FaChartLine, 
  FaShieldAlt, 
  FaUsers, 
  FaRegLightbulb, 
  FaArrowRight, 
  FaCheckCircle,
  FaBuilding,
  FaUserTie,
  FaHome,
  FaGraduationCap,
  FaChartPie,
  FaRegClock
} from 'react-icons/fa';

// Solution type definition
type Solution = {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
  features: string[];
  image: string;
};

// Solutions data
const solutionsData: Solution[] = [
  {
    id: 1,
    title: "Corporate Financial Solutions",
    description: "Comprehensive financial services designed specifically for businesses of all sizes, from startups to established corporations.",
    icon: "building",
    link: "/solutions/corporate",
    features: [
      "Cash flow management and optimization",
      "Corporate investment strategies",
      "Employee benefits and retirement plans",
      "Risk management and business insurance",
      "Merger and acquisition advisory"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 2,
    title: "Personal Wealth Management",
    description: "Tailored wealth management strategies to help individuals and families build, preserve, and transfer wealth across generations.",
    icon: "user",
    link: "/solutions/personal",
    features: [
      "Comprehensive financial planning",
      "Investment portfolio management",
      "Retirement planning and strategies",
      "Tax optimization strategies",
      "Estate planning and wealth transfer"
    ],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 3,
    title: "Real Estate Investment",
    description: "Strategic real estate investment solutions for both individual investors and institutional clients seeking property-based returns.",
    icon: "home",
    link: "/solutions/realestate",
    features: [
      "Residential and commercial property investments",
      "Real Estate Investment Trusts (REITs)",
      "Property portfolio diversification",
      "Real estate financing options",
      "Property management services"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1673&q=80"
  },
  {
    id: 4,
    title: "Education Planning",
    description: "Forward-thinking education funding strategies to help families prepare for future educational expenses and opportunities.",
    icon: "education",
    link: "/solutions/education",
    features: [
      "College savings plans (529 plans)",
      "Education investment accounts",
      "Financial aid planning and strategies",
      "Student loan management",
      "Graduate and professional education funding"
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 5,
    title: "Retirement Solutions",
    description: "Comprehensive retirement planning and investment strategies to ensure financial security and lifestyle maintenance in retirement.",
    icon: "chart",
    link: "/solutions/retirement",
    features: [
      "Retirement income planning",
      "401(k) and IRA management",
      "Pension optimization strategies",
      "Social Security maximization",
      "Healthcare cost planning in retirement"
    ],
    image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 6,
    title: "Legacy Planning",
    description: "Strategic legacy and estate planning solutions to protect and efficiently transfer wealth to future generations or charitable causes.",
    icon: "clock",
    link: "/solutions/legacy",
    features: [
      "Estate planning and wealth transfer",
      "Trust services and management",
      "Charitable giving strategies",
      "Family governance and education",
      "Business succession planning"
    ],
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  }
];

// Case study type
type CaseStudy = {
  id: number;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
};

// Case studies data
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Optimizing Retirement Strategy for Tech Executive",
    client: "Senior Technology Executive",
    challenge: "A senior technology executive with significant equity compensation needed to optimize retirement planning while managing concentrated stock positions and minimizing tax impact.",
    solution: "We developed a comprehensive strategy including systematic diversification of stock positions, tax-loss harvesting, charitable giving strategies, and establishment of a donor-advised fund.",
    result: "The client successfully diversified their portfolio, reduced tax liability by 22%, and established a sustainable retirement income stream while creating a meaningful philanthropic legacy.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"
  },
  {
    id: 2,
    title: "Business Succession Planning for Family Enterprise",
    client: "Multi-Generation Family Business",
    challenge: "A family-owned manufacturing business with $50M in annual revenue needed to transition leadership to the next generation while ensuring financial security for retiring founders and maintaining business continuity.",
    solution: "We created a comprehensive succession plan including business valuation, ownership transfer strategies, executive compensation plans for key non-family employees, and retirement income planning for the founders.",
    result: "Successful leadership transition to the third generation, 35% reduction in estate tax liability, and establishment of a governance structure that has supported 18% business growth since implementation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  {
    id: 3,
    title: "Education Funding Strategy for Growing Family",
    client: "Professional Couple with Three Children",
    challenge: "A dual-career professional couple needed to fund education for three children while balancing retirement savings and managing current lifestyle expenses.",
    solution: "We implemented a strategic combination of 529 plans, Roth IRAs, and a systematic investment approach, along with cash flow optimization strategies to maximize education funding without compromising retirement goals.",
    result: "The family is on track to fully fund undergraduate education for all three children while maintaining their retirement savings trajectory and current lifestyle.",
    image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
  }
];

export default function SolutionsPage() {
  // Helper function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'building':
        return <FaBuilding className="h-8 w-8 text-primary-600" />;
      case 'user':
        return <FaUserTie className="h-8 w-8 text-primary-600" />;
      case 'home':
        return <FaHome className="h-8 w-8 text-primary-600" />;
      case 'education':
        return <FaGraduationCap className="h-8 w-8 text-primary-600" />;
      case 'chart':
        return <FaChartPie className="h-8 w-8 text-primary-600" />;
      case 'clock':
        return <FaRegClock className="h-8 w-8 text-primary-600" />;
      default:
        return <FaRegLightbulb className="h-8 w-8 text-primary-600" />;
    }
  };

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
              Financial Solutions for Every Stage of Life
            </h1>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
              Discover our comprehensive suite of financial solutions designed to help individuals, families, and businesses achieve their unique financial goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/consultation" className="btn-accent py-3 px-6 text-center">
                Schedule a Consultation
              </Link>
              <Link href="/products" className="bg-transparent hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-md border border-white transition-colors duration-200 text-center">
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-lg text-secondary-600">
              We offer a wide range of financial solutions tailored to meet your specific needs and goals, whether you&apos;re an individual, family, or business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((solution) => (
              <div key={solution.id} className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    {renderIcon(solution.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">{solution.title}</h3>
                  <p className="text-secondary-600 mb-4">{solution.description}</p>
                  <div className="mb-6">
                    <h4 className="text-md font-medium text-secondary-900 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-secondary-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={solution.link} className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                    Learn More <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Our Approach"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Our Approach to Financial Solutions
              </h2>
              <div className="space-y-6 text-secondary-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                    <span className="font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Understand Your Goals</h3>
                    <p>We begin by deeply understanding your unique financial situation, goals, and aspirations through comprehensive discovery and analysis.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                    <span className="font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Develop Custom Solutions</h3>
                    <p>Our team of experts designs personalized financial solutions that align with your specific needs, risk tolerance, and timeline.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                    <span className="font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Implement & Monitor</h3>
                    <p>We implement your financial strategy with precision and continuously monitor performance, making adjustments as needed to keep you on track.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                    <span className="font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Review & Adapt</h3>
                    <p>We conduct regular reviews of your financial plan, adapting strategies as your life evolves and financial markets change.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/consultation" className="btn-primary py-3 px-6 text-center inline-block">
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-secondary-600">
              See how our financial solutions have helped real clients achieve their goals and overcome challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">{study.title}</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={study.image}
                        alt={study.client}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-primary-600 font-medium">{study.client}</span>
                  </div>
                  <div className="space-y-4 mb-4">
                    <div>
                      <h4 className="text-md font-semibold text-secondary-900 mb-1">Challenge:</h4>
                      <p className="text-sm text-secondary-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-secondary-900 mb-1">Solution:</h4>
                      <p className="text-sm text-secondary-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-secondary-900 mb-1">Result:</h4>
                      <p className="text-sm text-secondary-600">{study.result}</p>
                    </div>
                  </div>
                  <Link href="/case-studies" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                    Read Full Case Study <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Why Choose Our Financial Solutions
            </h2>
            <p className="text-lg text-secondary-600">
              We combine expertise, personalization, and innovation to deliver financial solutions that truly make a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Expert Advisors</h3>
              <p className="text-secondary-600">
                Our team consists of certified financial professionals with decades of combined experience across various financial disciplines.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Client-Centered</h3>
              <p className="text-secondary-600">
                We put your needs first, designing solutions that align with your unique financial situation, goals, and risk tolerance.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Fiduciary Standard</h3>
              <p className="text-secondary-600">
                We operate under a fiduciary standard, always putting your best interests first in every recommendation and decision.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Proven Results</h3>
              <p className="text-secondary-600">
                Our track record speaks for itself, with a history of helping clients achieve and exceed their financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Find Your Perfect Financial Solution?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Our team of experts is ready to help you navigate your financial journey with personalized solutions designed for your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors duration-200 shadow-sm text-center">
                Contact Us Today
              </Link>
              <Link href="/consultation" className="bg-transparent hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-md border border-white transition-colors duration-200 text-center">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}