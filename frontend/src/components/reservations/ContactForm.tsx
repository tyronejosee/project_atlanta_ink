import { Button, Input, Textarea } from "@nextui-org/react";

export const ContactForm = () => {
  return (
    <section className="w-full p-4">
      <h1 className="text-3xl font-bold mb-4">Send your message</h1>
      <form className="space-y-4">
        <div>
          <Input
            label="Name"
            radius="none"
            required
            isClearable
          />
        </div>
        <div>
          <Input
            label="Email"
            type="email"
            radius="none"
            required
            isClearable
          />
        </div>
        <div>
          <Input
            label="Phone"
            type="phone"
            radius="none"
            required
            isClearable
          />
        </div>
        <div>
          <Textarea
            label="Message"
            radius="none"
            required
          />
        </div>
        <Button
          type="submit"
          color="primary"
          radius="none"
          className="font-medium"
        >
          Send Message
        </Button>
      </form>
    </section>
  )
}
