import React from 'react';
import { 
  Building2, 
  Users, 
  Scale, 
  Award,
  GraduationCap,
  Clock,
  Coffee,
  Heart
} from 'lucide-react';

const CareersPage = () => {
  const benefits = [
    {
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      title: "Professional Growth",
      description: "Work on challenging cases with experienced mentors"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: "Continuous Learning",
      description: "Regular workshops and legal education opportunities"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Collaborative Environment",
      description: "Work alongside industry-leading legal professionals"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: <Coffee className="w-6 h-6 text-blue-600" />,
      title: "Great Culture",
      description: "Inclusive workplace with team building activities"
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      title: "Comprehensive Benefits",
      description: "Health insurance, paid leave, and wellness programs"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#235951] text-white">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[gold]">
            Join SS Advocates
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Shape the future of legal excellence with one of India's leading law firms
          </p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Join SS Advocates?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to nurturing talent and providing opportunities for growth in an environment that values excellence, integrity, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Openings Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Current Openings
        </h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-2xl mx-auto">
          <div className="mb-6">
            <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              No Current Openings
            </h3>
            <p className="text-gray-600 mb-6">
              While we don't have any positions available right now, we're always interested in connecting with talented legal professionals. Send us your resume at info@ssadvocates.co.in for future opportunities.
            </p>
          </div>
          
          {/* <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            Submit Your Resume
          </button> */}
        </div>
      </div>

      

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Questions About Working With Us?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Contact our HR team at info@ssadvocates.co.in
        </p>
        <Award className="w-12 h-12 text-blue-600 mx-auto" />
      </div>
    </div>
  );
};

export default CareersPage;