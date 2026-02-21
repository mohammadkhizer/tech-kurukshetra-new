export default function PrivacyProtocolPage() {
  return (
    <div className="pt-32 pb-40 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-headline text-5xl md:text-6xl mb-4 tracking-tighter uppercase">
          Privacy <span className="text-primary">Protocol</span>
        </h1>
        <p className="text-muted-foreground text-lg uppercase tracking-widest font-light">
          Your Data Security is Our Priority
        </p>
      </div>
      <div className="glass-panel border-primary/20 p-8 md:p-12 rounded-none space-y-6 text-muted-foreground font-light leading-relaxed">
        <h2 className="font-headline text-2xl text-accent tracking-widest">1. DATA COLLECTION</h2>
        <p>We collect information you provide directly to us when you register for TECH KURUKSHETRA. This includes your name, email address, university, and event preferences. We use this information solely for the purpose of managing your participation in the festival.</p>

        <h2 className="font-headline text-2xl text-accent tracking-widest">2. DATA USAGE</h2>
        <p>Your data is used to communicate important festival updates, manage event registrations, and improve your overall experience. We do not sell or share your personal information with third parties for marketing purposes.</p>

        <h2 className="font-headline text-2xl text-accent tracking-widest">3. DATA SECURITY</h2>
        <p>We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. All data is stored on secure Firebase servers and is protected by Firestore Security Rules.</p>

        <h2 className="font-headline text-2xl text-accent tracking-widest">4. USER RIGHTS</h2>
        <p>You have the right to access, update, or delete your personal information at any time. For any data-related inquiries, please contact our support team through the official festival channels.</p>
        
        <h2 className="font-headline text-2xl text-accent tracking-widest">5. COOKIE POLICY</h2>
        <p>Our website uses essential cookies to manage user sessions and provide a seamless browsing experience. We do not use tracking cookies for advertising purposes.</p>
      </div>
    </div>
  );
}
