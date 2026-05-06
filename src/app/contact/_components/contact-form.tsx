"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
};

const CONTACT_EMAIL = "mohamed.abdelhakem3200@gmail.com";

export default function ContactForm() {
  const [submitMessage, setSubmitMessage] = useState("");

  const form = useForm<ContactFormValues>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = ({
    first_name,
    last_name,
    email,
    message,
  }: ContactFormValues) => {
    const subject = encodeURIComponent(
      `Contact request from ${first_name} ${last_name}`.trim(),
    );
    const body = encodeURIComponent(
      `Name: ${first_name} ${last_name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitMessage(
      "Your email draft is ready. Please send it from your mail app.",
    );
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-3"
        autoComplete="on"
      >
        {/* First Name */}
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem className="col-span-1 relative">
              <FormLabel htmlFor="first_name">
                What’s your first name?
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    id="first_name"
                    placeholder="Type your first name here..."
                    autoComplete="given-name"
                    className="pl-10"
                  />
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Last Name */}
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem className="col-span-1 relative">
              <FormLabel htmlFor="last_name">And your last name?</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    id="last_name"
                    placeholder="Type your last name here..."
                    autoComplete="family-name"
                    className="pl-10"
                  />
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-full relative">
              <FormLabel htmlFor="email">Where can we reach you?</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    id="email"
                    placeholder="Your email address"
                    type="email"
                    autoComplete="email"
                    className="pl-10"
                  />
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-full relative">
              <FormLabel htmlFor="message">
                Have a question? Don’t be shy!
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Textarea
                    {...field}
                    id="message"
                    placeholder="Don't hesitate to ask anything..."
                    rows={5}
                    autoComplete="off"
                    className="pl-10"
                  />
                  <MessageCircle
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="col-span-full flex justify-center mt-4">
          <Button
            type="submit"
            className="transition-transform flex items-center gap-2"
            disabled={form.formState.isSubmitting}
          >
            <Mail size={20} /> Send It! Let’s Make Magic
          </Button>
        </div>

        {submitMessage && (
          <p
            className="col-span-full text-center text-sm text-accent"
            aria-live="polite"
          >
            {submitMessage}
          </p>
        )}
      </form>
    </Form>
  );
}
