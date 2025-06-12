import { ArrowRight } from 'lucide-react';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-800 font-sans">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
               <img
                    src="/ainepal-logo.jpg"
                    alt="AI Nepal Logo"
                    className="mx-auto w-32 h-32 mb-6"
                />
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                    Unlocking the power of Artificial Intelligence for Nepal — Tools, Learning & Community for everyone 🇳🇵.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <ButtonLink
                        href="https://github.com/pradipchaudhary/ainepal"
                        label="Get Started"
                        variant="primary"
                        icon={<ArrowRight size={18} />}
                    />
                    <ButtonLink
                        href="https://youtube.com/@ainepalofficial"
                        label="Watch on YouTube"
                        variant="secondary"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-3 gap-8">
                <FeatureCard
                    title="AI Tools for Nepal"
                    description="Open-source OCR, speech recognition, and chatbots designed for Nepali language and culture."
                />
                <FeatureCard
                    title="Learn AI in Nepali"
                    description="Access beginner-friendly tutorials and AI courses explained in Nepali."
                />
                <FeatureCard
                    title="Community Driven"
                    description="Join a growing community of AI developers, creators, and learners from Nepal."
                />
            </section>

            {/* Footer */}
            <footer className="text-center py-8 text-gray-500 text-sm border-t border-gray-200">
                © 2025 AI Nepal. Crafted with ❤️ in Nepal.
            </footer>
        </main>
    );
}

interface FeatureCardProps {
    title: string;
    description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
    return (
        <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border border-gray-200 text-left">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{description}</p>
        </div>
    );
}

interface ButtonLinkProps {
    href: string;
    label: string;
    variant: 'primary' | 'secondary';
    icon?: React.ReactNode;
}

function ButtonLink({ href, label, variant, icon }: ButtonLinkProps) {
    const base =
        'inline-flex items-center justify-center gap-2 px-5 py-2.5 text-base font-medium rounded-full transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-300',
    };
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${base} ${variants[variant]}`}
        >
            {label} {icon}
        </a>
    );
}
