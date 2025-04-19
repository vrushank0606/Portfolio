// Google Analytics 4 Measurement ID
export const GA_MEASUREMENT_ID = 'G-6G6V2FXNS9';

// List of company domains you've applied to
const COMPANY_DOMAINS = [
  'google.com',
  'microsoft.com',
  'amazon.com',
  'meta.com',
  // Add more company domains here
];

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
    window.gtag = gtag;

    // Check if visitor is from a company domain
    const referrer = document.referrer;
    if (referrer) {
      const referrerDomain = new URL(referrer).hostname;
      const isCompanyVisitor = COMPANY_DOMAINS.some(domain => 
        referrerDomain.includes(domain)
      );
      
      if (isCompanyVisitor) {
        trackCompanyVisit(referrerDomain);
      }
    }
  }
};

// Track company visits
export const trackCompanyVisit = (companyDomain) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'company_visit', {
      company_domain: companyDomain,
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  }
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}; 