export default function TermsOfEntryPage() {
  return (
    <div className="pt-32 pb-40 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-headline text-5xl md:text-6xl mb-4 tracking-tighter uppercase">
          Terms of <span className="text-primary">Entry</span>
        </h1>
        <p className="text-muted-foreground text-lg uppercase tracking-widest font-light">
          Rules of Engagement for All Participants
        </p>
      </div>
      <div className="glass-panel border-primary/20 p-8 md:p-12 rounded-none space-y-6 text-muted-foreground font-light leading-relaxed">
        <h2 className="font-headline text-2xl text-accent tracking-widest">1. CODE OF CONDUCT</h2>
        <p>All participants are expected to maintain a professional and respectful demeanor throughout the festival. Harassment, discrimination, or any form of disruptive behavior will not be tolerated and may result in immediate disqualification and removal from the premises.</p>

        <h2 className="font-headline text-2xl text-accent tracking-widest">2. INTELLECTUAL PROPERTY</h2>
        <p>You retain ownership of any intellectual property you create during the festival's competitions (e.g., hackathon projects). However, by participating, you grant TECH KURUKSHETRA a non-exclusive, royalty-free license to showcase your project for promotional purposes.</p>

        <h2 className="font-headline text-2xl text-accent tracking-widest">3. LIABILITY</h2>
        <p>TECH KURUKSHETRA is not responsible for any lost, stolen, or damaged personal belongings. Participants are responsible for their own equipment and well-being. By attending, you agree to release the organizers from any liability for personal injury or loss.</p>
        
        <h2 className="font-headline text-2xl text-accent tracking-widest">4. REGISTRATION AND PAYMENT</h2>
        <p>All registration fees are non-refundable. A valid registration is required for entry into any event. The organizers reserve the right to refuse entry to anyone who does not comply with the registration requirements.</p>

        <h2 className="font-headline text-2xl text-accent tracking-widest">5. PHOTOGRAPHY AND FILMING</h2>
        <p>By attending the festival, you consent to be photographed, filmed, or otherwise recorded. Your entry constitutes your consent to such recording and its use, in any and all media, for any purpose, by TECH KURUKSHETRA.</p>
      </div>
    </div>
  );
}
