"use client";

import Button from "@/components/Button";
import TextInput from "@/components/Form/TextInput";
import TextArea from "@/components/Form/TextArea";
import SectionHeading from "@/components/SectionHeading";
import { FormEvent } from "react";

const ContactSection = () => {
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(event);

    };

    return (
        <section id="contact">
            <div className="container mx-auto flex flex-col justify-center items-center p-4 space-y-5">
                <SectionHeading text="Contact Me" />
                <h3 className="text-2xl text-primary-default font-bold">bsolga.dev@gmail.com</h3>
                <p className="text-center text-textColor-lightDimmed dark:text-textColor-darkDimmed">
                    Feel free to contact me with any inquiries or questions!
                </p>
                <div className="md:w-1/2">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="flex justify-between gap-10">
                            <TextInput id="name" label="Name" placeholder="Provide your name" />
                            <TextInput id="email" label="Email" placeholder="Provide your email" />
                        </div>
                        <TextArea id="message" label="Message" placeholder="Provide message" />
                        <Button text="Send" />
                    </form>
                </div>
            </div>
        </section >
    );
};

export default ContactSection;