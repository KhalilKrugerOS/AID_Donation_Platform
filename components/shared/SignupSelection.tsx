"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getUserById } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { EditProfileSchema } from "@/lib/validator"; // Adjust the import to match your schema location

const SignupSelection = ({ userId }: { userId: string }) => {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState<any>(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const userData = await getUserById(userId);
            setUserInfo(userData);
        };

        fetchUserInfo();
    }, [userId]);

    const form = useForm<z.infer<typeof EditProfileSchema>>({
        resolver: zodResolver(EditProfileSchema),
        defaultValues: {
            phoneNumber: userInfo?.phoneNumber || "",
            bio: userInfo?.bio || "",
            location: userInfo?.location || "",
            category: userInfo?.category || "", // Changed to reflect single selection
            socialMediaLink: userInfo?.socialMediaLink || "",

        },
    });

    const onSubmit = async (data: z.infer<typeof EditProfileSchema>) => {
        // Handle form submission
        console.log(data);
        // Add your submission logic here, e.g., updating the user info in the database
    };

    if (!userInfo) {
        return <div>Loading...</div>;
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
                                Informations Personnelles
                            </h3>
                        </div>
                        <div className="p-7">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                                    <FormField
                                        control={form.control}
                                        name="phoneNumber"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Numéro de Téléphone</FormLabel>
                                                <FormControl>
                                                    <Input {...field} className="w-full rounded border border-stroke bg-gray-100 px-4 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="location"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Emplacement</FormLabel>
                                                <FormControl>
                                                    <Input {...field} className="w-full rounded border border-stroke bg-gray-100 px-4 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="bio"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>BIO</FormLabel>
                                                <FormControl>
                                                    <Textarea {...field} className="w-full rounded border border-stroke bg-gray-100 px-4 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="category"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Categories</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        value={field.value}
                                                        className="flex flex-col space-y-1"
                                                    >
                                                        {categories.map((category) => (
                                                            <FormItem key={category.id} className="flex items-center space-x-3">
                                                                <FormControl>
                                                                    <RadioGroupItem value={category.id} />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    {category.label}
                                                                </FormLabel>
                                                            </FormItem>
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" size="lg" className="button col-span-2 w-full" disabled={form.formState.isSubmitting}>
                                        {form.formState.isSubmitting ? "Submitting ... " : "Save"}
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

export default SignupSelection;
