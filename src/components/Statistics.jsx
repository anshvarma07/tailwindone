import React from 'react';
import { Users, Briefcase, Award, TrendingUp } from 'lucide-react';

const Statistics = () => {
    const stats = [
        {
            number: "100+",
            label: "Clients Served",
            icon: Users
        },
        {
            number: "500+",
            label: "Cases Handled",
            icon: Briefcase
        },
        {
            number: "15+",
            label: "Years of Experience",
            icon: Award
        },
        {
            number: "98%",
            label: "Success Rate",
            icon: TrendingUp
        }
    ];

    return (
        <div className='bg-gradient-to-b from-[#235951] to-[#3F6D66] py-12 md:py-16'>
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                <h2 className='text-center text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 mb-8 md:mb-12 drop-shadow-lg'>
                    Our Achievements
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div 
                                key={index}
                                className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-xl p-4 md:p-6 text-center shadow-2xl hover:scale-105 transition-transform duration-300 border border-white/20"
                            >
                                <div className="flex justify-center mb-2 md:mb-3">
                                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-[#FBC9BB]" />
                                </div>
                                <div className="text-3xl md:text-5xl font-extrabold text-[#FBC9BB] mb-2 md:mb-3 drop-shadow-lg">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-white font-semibold">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Statistics;
