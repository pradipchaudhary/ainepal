import { ArrowRight } from 'lucide-react';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-800">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-32 text-center relative">
                <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-sm">
                    🤖 AI Nepal
                </h1>
                <p className="text-2xl text-gray-600 max-w-2xl mx-auto mb-10">
                    Unlocking the power of Artificial Intelligence for Nepal — Tools, Learning & Community for everyone 🇳🇵.
                </p>
                <div className="flex justify-center gap-5">
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

            {/* Features */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
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
            <footer className="text-center py-10 text-gray-500 text-sm">
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
        <div className="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition hover:scale-105 border border-gray-200">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-lg">{description}</p>
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
        'px-8 py-4 font-semibold rounded-full shadow-lg flex items-center gap-2 transition hover:scale-105';
    const variants = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        secondary: 'bg-white hover:bg-gray-100 text-gray-800',
    };
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${variants[variant]}`}>
            {label} {icon}
        </a>
    );
}
