import { ArrowRight, Facebook, Instagram, Linkedin, Music2 } from 'lucide-react';


export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-800 font-sans">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
                <img
                    src="/ainepal-logo.png"
                    alt="AI Nepal Logo"
                    className="mx-auto w-32 h-32 mb-6"
                />
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                    Unlocking the power of Artificial Intelligence for Nepal — Tools, Learning & Community for everyone 🇳🇵.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <ButtonLink
                        href="https://youtube.com/@ainepalofficial"
                        label="Watch on YouTube"
                        variant="primary"
                        icon={<ArrowRight className="w-4 h-4" />}
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

            {/* Featured Video */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
                <div className="rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto" style={{ height: '480px' }}>
                    <iframe
                        src="https://www.youtube.com/embed/IbmKG7VUwZo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            </section>


            {/* YouTube Shorts Section */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10 text-gray-800">
                    🎬 Latest AI Nepal Shorts
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Short 1 */}
                    <div className="w-full h-[420px] sm:h-[500px] rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.youtube.com/embed/SHORT_VIDEO_ID_1"
                            title="AI Nepal Short Video 1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>

                    {/* Short 2 */}
                    <div className="w-full h-[420px] sm:h-[500px] rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.youtube.com/embed/SHORT_VIDEO_ID_2"
                            title="AI Nepal Short Video 2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>

                    {/* Short 3 */}
                    <div className="w-full h-[420px] sm:h-[500px] rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.youtube.com/embed/SHORT_VIDEO_ID_3"
                            title="AI Nepal Short Video 3"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://youtube.com/@ainepalofficial/shorts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-full transition"
                    >
                        View More Shorts on YouTube
                    </a>
                </div>
            </section>





            {/* Footer */}
            <footer className="mt-24 border-t border-gray-200 bg-white py-12 text-gray-600">
                <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
                    <div className="flex justify-center gap-6 text-gray-500 text-sm sm:text-base flex-wrap">
                        <a
                            href="https://instagram.com/ainepal_official"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition flex items-center gap-1"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" /> Instagram
                        </a>
                        <a
                            href="https://facebook.com/ainepallearning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition flex items-center gap-1"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5" /> Facebook
                        </a>
                        <a
                            href="https://tiktok.com/@ainepalshorts"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black transition flex items-center gap-1"
                            aria-label="TikTok"
                        >
                            <Music2 className="w-5 h-5" /> TikTok
                        </a>
                        <a
                            href="https://linkedin.com/company/ainepal-learning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700 transition flex items-center gap-1"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" /> LinkedIn
                        </a>
                    </div>

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} <span className="font-semibold text-gray-800">AiNepal</span> — Made with <span aria-label="love" role="img">❤️</span> for Nepali learners.
                    </p>
                </div>
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
