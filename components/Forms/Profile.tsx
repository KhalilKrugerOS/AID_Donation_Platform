"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useState } from "react";
import { EditProfileSchema } from "@/lib/validator";
import { usePathname, useRouter } from "next/navigation";
import { updateUserEdit } from "@/lib/actions/user.actions";

interface Props {
  userId: string;
  user: string;
}

const Profile = ({ userId, user }: Props) => {
  const parsedUser = JSON.parse(user);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // Define form.
  const form = useForm<z.infer<typeof EditProfileSchema>>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      socialMediaLink: parsedUser.socialMediaLink || "",
      location: parsedUser.location || "",
      bio: parsedUser.bio || "",
      category: parsedUser.category || "",
    },
  });

  // Submit Form Handler.
  async function onSubmitwas(values: z.infer<typeof EditProfileSchema>) {
    //setIsSubmitting(true);
    console.log("Submitting form with values:");
    console.log(values);

    try {
      await updateUserEdit({
        userId,
        updateData: {
          socialMediaLink: values.socialMediaLink,
          location: values.location,
          bio: values.bio,
          category: values.category,
        },
        path: pathname,
      });
      console.log("User updated successfully");
      router.back();
    } catch (error) {
      console.error("❌ Error updating user:", error);
      alert("An error occurred while updating the profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const categories = [
    { id: "organisation", label: "Organisation" },
    { id: "donnateur", label: "Donnateur" },
  ];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="grid grid-cols-5 gap-8 mt-36">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Profile Information
              </h3>
            </div>
            <div className="p-7">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmitwas)}
                  className="flex flex-col gap-5"
                >
                  {/* Social Media Link */}
                  <FormField
                    control={form.control}
                    name="socialMediaLink"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Social Media Link</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your social media link"
                            {...field}
                            className="w-full rounded border border-stroke bg-gray-100 px-4 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Location */}
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your location"
                            {...field}
                            className="w-full rounded border border-stroke bg-gray-100 px-4 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Bio */}
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your bio"
                            {...field}
                            className="w-full rounded border border-stroke bg-gray-100 px-4 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Categories */}
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <div className="flex flex-col space-y-2">
                            {categories.map((category) => (
                              <label
                                key={category.id}
                                className="inline-flex items-center"
                              >
                                <input
                                  type="radio"
                                  {...field}
                                  checked={field.value === category.id}
                                  onChange={() => field.onChange(category.id)}
                                  className="form-radio h-5 w-5 text-primary-600"
                                />
                                <span className="ml-2">{category.label}</span>
                              </label>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="button col-span-2 w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
