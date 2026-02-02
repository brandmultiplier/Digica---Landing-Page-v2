import React, { useEffect } from 'react';

export const CTA: React.FC = () => {
  useEffect(() => {
    // Listen for HubSpot form submission via postMessage
    const handleMessage = (event: MessageEvent) => {
      if (!event.data || event.data.type !== 'hsFormCallback') return;
      if (event.data.eventName !== 'onFormSubmit') return;

      const fields = event.data.data;
      const vals: Record<string, string> = {};
      fields.forEach((f: { name: string; value: string }) => {
        vals[f.name] = f.value;
      });

      const firstname = encodeURIComponent(vals.firstname || '');
      const lastname = encodeURIComponent(vals.lastname || '');
      const email = encodeURIComponent(vals.email || '');

      // Redirect to thank you page with form data as URL params
      window.location.href =
        'https://manufacturing.digica.com/thank-you' +
        '?firstName=' + firstname +
        '&lastName=' + lastname +
        '&email=' + email;
    };

    window.addEventListener('message', handleMessage);

    // Load HubSpot form script
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
          target: '#hubspot-form-container'
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      window.removeEventListener('message', handleMessage);
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