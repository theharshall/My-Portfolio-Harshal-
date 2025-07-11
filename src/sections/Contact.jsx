import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
    const text = `Got a question, how or project idea?
  We’d love to hear from you and discuss further!`;

    const items = [
        "just imagine, I code",
        "just imagine, I code",
        "just imagine, I code",
        "just imagine, I code",
        "just imagine, I code",
    ];

    // ⬇️ GSAP intro animation
    useGSAP(() => {
        gsap.from(".social-link", {
            y: 100,
            opacity: 0,
            delay: 0.5,
            duration: 1,
            stagger: 0.3,
            ease: "back.out",
            scrollTrigger: {
                trigger: ".social-link",
            },
        });
    }, []);

    return (
        /* raise z-index so nothing covers the links */
        <section
            id="contact"
            className="relative z-60 flex flex-col justify-between min-h-screen bg-black"
        >
            {/* top half */}
            <div>
                <AnimatedHeaderSection
                    subTitle={"You Dream It, I Code It"}
                    title={"Contact"}
                    text={text}
                    textColor={"text-white"}
                    withScrollTrigger={true}
                />

                <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
                    <div className="flex flex-col w-full gap-10">
                        {/* email */}
                        <div className="social-link">
                            <h2>E‑mail</h2>
                            <div className="w-full h-px my-2 bg-white/30" />
                            <a
                                href="mailto:harshalpersonal23@gmail.com"
                                className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl hover:text-white/80 transition-colors duration-200"
                            >
                                harshalpersonal23@gmail.com
                            </a>
                        </div>

                        {/* phone */}
                        <div className="social-link">
                            <h2>Phone</h2>
                            <div className="w-full h-px my-2 bg-white/30" />
                            <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                                +91 9096892317
                            </p>
                        </div>

                        {/* socials */}
                        <div className="social-link">
                            <h2>Social Media</h2>
                            <div className="w-full h-px my-2 bg-white/30" />
                            <div className="flex flex-wrap gap-2">
                                {socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs leading-loose uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                                    >
                                        {`{ ${social.name} }`}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom marquee */}
            <Marquee items={items} className="text-white bg-transparent" />
        </section>
    );
};

export default Contact;
