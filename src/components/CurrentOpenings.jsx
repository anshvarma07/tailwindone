import React from 'react';
import { Building2, Mail, Phone } from 'lucide-react';

const CurrentOpenings = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Current Openings
      </h2>
      
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
        <div className="mb-6">
          <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Business Development Intern
          </h3>
          
          <div className="text-left">
            <div className="mb-4">
              <p className="font-medium text-gray-700">Company: SS Advocates</p>
              <p className="font-medium text-gray-700">Location: Delhi, India</p>
              <p className="font-medium text-gray-700">Position Type: Full-Time, On-Site Internship</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Role Overview</h4>
              <p className="text-gray-600 mb-4">
                Are you ready to kickstart your career in business development? Join SS Advocates as a Business Development Intern! You'll gain hands-on experience in lead generation, market research, and customer service while working in a dynamic legal environment.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">What You'll Do:</h4>
              <ul className="list-none space-y-2 text-gray-600">
                <li>• Extract and manage data for lead generation</li>
                <li>• Conduct market research to identify new business opportunities</li>
                <li>• Support the team in customer service and client relationship management</li>
                <li>• Assist in various tasks to drive business growth</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">What We're Looking For:</h4>
              <ul className="list-none space-y-2 text-gray-600">
                <li>• Proficiency in MS Office Suite</li>
                <li>• Skills in data extraction, lead generation, and market research</li>
                <li>• Excellent communication and customer service skills</li>
                <li>• Strong attention to detail and organizational skills</li>
                <li>• Interest in the legal industry</li>
                <li>• Currently pursuing a degree in Business, Law, or a related field</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Why SS Advocates?</h4>
              <ul className="list-none space-y-2 text-gray-600">
                <li>• Real-world business development experience</li>
                <li>• Mentorship and training from industry experts</li>
                <li>• An opportunity to grow your network in the legal field</li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Apply Now!</h4>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>info@ssadvocates.co.in</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>+91 9266532527</span>
                </div>
                <a 
                  href="https://forms.gle/dCc4ZkizHfEAvmK49" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
                >
                  Apply Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentOpenings;