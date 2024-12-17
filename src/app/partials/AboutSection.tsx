import SectionHeading from "@/components/SectionHeading";

const AboutSection = () => {
    return (
        <section id="about-me" className="p-6">
            <div className="container mx-auto  pt-0 space-y-5">
                <SectionHeading text="About me" />

                <p className="text-center mx-auto max-w-3xl text-textColor-lightDimmed dark:text-textColor-darkDimmed">
                    My journey into programming began in 2019 during my studies in the UK, where I first encountered web development.
                    <br /><br />
                    Initially, I focused on web design, but my natural curiosity and passion for creation drove me to delve deeper into the broad field of software development.
                    <br /><br />
                    Since then, I have been consistently enhancing my skills, participating in numerous programming courses, and earning a degree in Applied Computer Science from the University of Economics in Krakow.
                    <br /><br />
                    Thanks to my innate ability to recognize patterns and my creativity, I learn quickly. I have a keen interest in psychology, philosophy, and literature related to personal development. In my spare time, I enjoy motorcycling and snowboarding.
                    <br /><br />
                    I am a dynamic individual who easily builds relationships and thrives in diverse environments.
                    <br /><br />
                    It`s also worth mentioning that before starting my career in IT, I was actively involved in composing music. While my current focus is on professional development, I do not rule out returning to music as a hobby in the future.
                </p>

            </div>
        </section>
    );
};

export default AboutSection;