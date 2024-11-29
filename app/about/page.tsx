import StarBackground from "@/components/star-background";
import { FaMapMarkerAlt, FaClock, FaBirthdayCake, FaCode } from "react-icons/fa";

export default function AboutPage() {
    return (
        <div className="min-h-screen text-white p-6 flex items-center justify-center">
            <StarBackground />
            <div className="dotted-background" />
            <div className="max-w-4xl mx-auto space-y-8 text-center">
                <h1 className="text-4xl font-mono">Who am I?</h1>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-mono">About Me</h2>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                Hello! I&apos;m a ?? year old developer from ?? trying to become a Full Stack Developer.
                            </p>
                            <p>
                                I specialize in Kotlin, Java and Python, and I&apos;m always eager to learn new technologies.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 text-left">
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-2xl" />
                            <span>Location: America</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaClock className="text-2xl" />
                            <span>Timezone: PST</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaBirthdayCake className="text-2xl" />
                            <span>Age: 17</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaCode className="text-2xl" />
                            <span>Backend Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}