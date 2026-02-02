import React, { useEffect } from 'react';

export const CTA: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          portalId: "3066619",
          formId: "9d155bcb-5412-473e-9b71-190a6c836718",
          region: "na1",
          target: '#hubspot-form-container',
          onFormSubmit: () => {
            // Capture form data using DOM queries (HubSpot embed v2 doesn't use jQuery)
            const container = document.getElementById('hubspot-form-container');
            const firstName = (container?.querySelector('input[name="firstname"]') as HTMLInputElement)?.value || '';
            const lastName = (container?.querySelector('input[name="lastname"]') as HTMLInputElement)?.value || '';
            const email = (container?.querySelector('input[name="email"]') as HTMLInputElement)?.value || '';

            console.log('HubSpot form submitted:', { firstName, lastName, email });

            const formData = { firstName, lastName, email };
            // Store in cookie with domain=.digica.com for cross-subdomain access
            const cookieValue = encodeURIComponent(JSON.stringify(formData));
            document.cookie = `hubspotFormData=${cookieValue}; domain=.digica.com; path=/; max-age=300; SameSite=Lax`;

            console.log('Cookie set:', document.cookie);
          }
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Clean up script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-digica-dark text-white relative overflow-hidden">
      {/* Abstract BG */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop guessing. Start seeing.</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Get a free assessment of where your hidden losses are — and how much they're costing you.
        </p>

        {/* HubSpot Form Container - Wrapped in white for visibility */}
        <div className="max-w-xl mx-auto bg-white rounded-md p-6 md:p-8 shadow-2xl text-left text-gray-900">
          <div id="hubspot-form-container"></div>
        </div>
      </div>
    </section>
  );
};