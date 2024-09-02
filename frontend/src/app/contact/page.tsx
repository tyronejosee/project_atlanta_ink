import { FC } from "react";
import Head from "next/head";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for more information." />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <Input label="Name" placeholder="Your Name" required />
          </div>
          <div>
            <Input label="Email" type="email" placeholder="Your Email" required />
          </div>
          <div>
            <Textarea label="Message" placeholder="Your Message" required />
          </div>
          <Button type="submit" color="primary">Send Message</Button>
        </form>
      </main>
    </>
  );
};
