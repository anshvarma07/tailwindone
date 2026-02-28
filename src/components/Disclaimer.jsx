import React, { useState, useEffect } from 'react';

const Disclaimer = () => {
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const [agreed, setAgreed] = useState(false);

    useEffect(() => {
        // Check if user has agreed in this session
        const hasAgreedThisSession = sessionStorage.getItem('disclaimerAgreedThisSession');
        if (!hasAgreedThisSession) {
            setShowDisclaimer(true);
            // Prevent body scroll when disclaimer is shown
            document.body.style.overflow = 'hidden';
        } else {
            setAgreed(true);
        }

        // Cleanup function to restore scroll
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleAgree = () => {
        // Store agreement in sessionStorage (only for current session)
        sessionStorage.setItem('disclaimerAgreedThisSession', 'true');
        setShowDisclaimer(false);
        setAgreed(true);
        document.body.style.overflow = 'unset';
    };

    const handleDecline = () => {
        // Redirect or show message when user declines
        window.location.href = 'https://www.google.com';
    };

    if (!showDisclaimer && agreed) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="p-8 md:p-12">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#235951]">
                            DISCLAIMER
                        </h1>
                    </div>

                    <div className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 space-y-4">
                        <p>
                            As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. By clicking on the <strong>"I AGREE"</strong> button below, you acknowledge the following:
                        </p>

                        <ul className="list-disc list-inside space-y-3 ml-4">
                            <li>
                                There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;
                            </li>
                            <li>
                                The user wishes to gain more information about us for his/her own information and use;
                            </li>
                            <li>
                                The information about us is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site would not create any lawyer-client relationship.
                            </li>
                        </ul>

                        <p>
                            The information provided under this website is solely available at your request for informational purposes only, should not be interpreted as soliciting or advertisement. We are not liable for any consequence of any action taken by the user relying on material / information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <button
                            onClick={handleAgree}
                            className="bg-[#235951] hover:bg-[#1d4b45] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg w-full sm:w-auto min-w-[150px]"
                        >
                            I AGREE
                        </button>
                        <button
                            onClick={handleDecline}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg w-full sm:w-auto min-w-[150px]"
                        >
                            NO THANKS
                        </button>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-xs text-gray-500">
                            ssadvocates.co.in
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
