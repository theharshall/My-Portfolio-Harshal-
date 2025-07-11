import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
    const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
    const aboutText = `Passionate about creating seamless digital experiences 🌐 I use the MERN stack to bring ideas to life—end to end.Fast frontends ⚛️, efficient servers 🌿, and smooth performance.Whether it's a product or a personal project, quality comes first.Outside of coding, I enjoy learning and building in public.`;
    const imgRef = useRef(null);
    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current },
        });
    });
    return (
        <section id="about" className="min-h-screen bg-black rounded-b-4xl">
            <AnimatedHeaderSection
                subTitle={"Cod with purpose, Built to scale"}
                title={"About"}
                text={text}
                textColor={"text-white"}
                withScrollTrigger={true}
            />
            <a
                href="/myresume.pdf"

                download
                className="absolute  bottom-4 right-5 z-10 bg-gradient-to-r from-black via-white to-black text-black px-10 py-3 rounded-full flex items-center  gap-2 text-sm md:text-base font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Download Resume
            </a>


            <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img
                    ref={imgRef}
                    src="images/man.jpg"
                    alt="man"
                    className="w-md rounded-3xl"
                />
                
                <AnimatedTextLines text={aboutText} className={"w-full"} />
                 
                


                
            </div>
        </section>
    );
};

export default About;