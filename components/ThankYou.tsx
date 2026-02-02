import React, { useEffect, useState } from 'react';
import { Footer } from './Footer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export const ThankYou: React.FC = () => {
  const [meetingsUrl, setMeetingsUrl] = useState<string>('');

  useEffect(() => {
    // First try to get data from URL parameters (most reliable, works across subdomains)
    const urlParams = new URLSearchParams(window.location.search);
    let formData: FormData = {
      firstName: urlParams.get('firstName') || '',
      lastName: urlParams.get('lastName') || '',
      email: urlParams.get('email') || ''
    };

    // Fallback: try cookie if URL params are empty
    if (!formData.firstName && !formData.lastName && !formData.email) {
      const getCookie = (name: string): string | null => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : null;
      };

      const storedData = getCookie('hubspotFormData');
      if (storedData) {
        try {
          formData = JSON.parse(storedData);
          // Clear the cookie after reading
          document.cookie = `hubspotFormData=; domain=.digica.com; path=/; max-age=0`;
        } catch (e) {
          console.error('Failed to parse form data from cookie');
        }
      }
    }

    // Build the meetings URL with prefill parameters
    const baseUrl = 'https://meetings.hubspot.com/ben952/manufacturing-ai-strategy-session';
    const params = new URLSearchParams();
    params.append('embed', 'true');

    if (formData.firstName) params.append('firstName', formData.firstName);
    if (formData.lastName) params.append('lastName', formData.lastName);
    if (formData.email) params.append('email', formData.email);

    setMeetingsUrl(`${baseUrl}?${params.toString()}`);
  }, []);

  useEffect(() => {
    // Only load script after URL is set
    if (!meetingsUrl) return;

    // Check if script already exists to avoid duplicates
    if (document.querySelector('script[src*="MeetingsEmbedCode.js"]')) {
      return;
    }

    // Create and load the HubSpot Meetings Embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;

    script.onerror = () => {
      console.error('Failed to load HubSpot Meetings Embed script');
    };

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      const existingScript = document.querySelector('script[src*="MeetingsEmbedCode.js"]');
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, [meetingsUrl]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-digica-red selection:text-white">
      <main className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-digica-dark mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              We've received your submission.
            </p>
            <p className="text-lg text-gray-500">
              Schedule your Manufacturing AI Strategy Session below
            </p>
          </div>

          {/* HubSpot Meetings Embed Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            {meetingsUrl && (
              <div
                className="meetings-iframe-container"
                data-src={meetingsUrl}
              ></div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

