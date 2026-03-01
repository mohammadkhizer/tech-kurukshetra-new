
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-48 pb-20 px-6 flex flex-col items-center justify-center text-center">
      <div className="glass-panel p-10 md:p-16 max-w-2xl w-full border-destructive/20 relative overflow-hidden bg-black/40">
        <div className="text-center mb-8">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6" />
            <p className="text-sm text-destructive uppercase tracking-[0.3em] font-headline mb-2">ERROR 404</p>
            <h1 className="font-headline text-4xl md:text-5xl tracking-tighter text-white uppercase">
              TRANSMISSION LOST
            </h1>
        </div>
        
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
          The page you are looking for does not exist or has been moved to a different sector.
        </p>
        
        <Button asChild size="lg" className="bg-primary hover:bg-primary/80 px-12 py-8 font-headline tracking-widest text-lg rounded-none w-full md:w-auto accent-glow">
          <Link href="/">RETURN TO COMMAND HUB</Link>
        </Button>
      </div>
    </div>
  );
}
