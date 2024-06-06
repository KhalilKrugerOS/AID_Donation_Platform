// "use client"

// import * as z from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { Button } from '@/components/ui/button';
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useState, useEffect } from 'react';
// import { EditProfileSchema } from '@/lib/validator';
// import { updateUser, getUserById } from '@/lib/actions/user.actions';
// import { useRouter } from 'next/navigation';

// const EditProfileForm = ({ userId }: { userId: string }) => {
//     const router = useRouter();
//     const [userInfo, setUserInfo] = useState<any>(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const form = useForm<z.infer<typeof EditProfileSchema>>({
//         resolver: zodResolver(EditProfileSchema),
//         defaultValues: {
//             phoneNumber: "",
//             bio: "",
//             location: "",
//         },
//     });

//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             try {
//                 const userData = await getUserById(userId);
//                 setUserInfo(userData);
//             } catch (error) {
//                 console.error("Error fetching user:", error);
//             }
//         };

//         fetchUserInfo();
//     }, [userId]);

//     useEffect(() => {
//         if (userInfo) {
//             form.reset(userInfo);
//         }
//     }, [userInfo, form]);

//     async function onSubmit(data: z.infer<typeof EditProfileSchema>) {
//         console.log("Data:");

//         setIsSubmitting(true);
//         console.log(data);


//         try {
//             const updatedData = {
//                 ...data,
//                 firstName: userInfo.firstName,
//                 lastName: userInfo.lastName,
//                 username: userInfo.username,
//                 photo: userInfo.photo,
//                 phoneNumber: userInfo.phoneNumber,
//                 location: userInfo.location,
//                 bio: userInfo.bio
//             };

//             console.log("Updated data:");
//             console.log(updatedData);

//             const updateduser = await updateUser(userId, updatedData);

//             console.log("User updated successfully");
//             form.reset();
//             console.log(updatedData);
//             router.push("/profile");
//         } catch (error) {
//             console.error("Error updating user:", error);
//         } finally {
//             setIsSubmitting(false);
//         }
//     }

//     useEffect(() => {
//         console.log("User info:", userInfo); // Log user info when it's fetched
//         if (userInfo) {
//             form.reset(userInfo);
//         }
//     }, [userInfo, form]);


//     if (!userInfo) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Form {...form}>
//             <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="mx-auto max-w-2xl grid grid-cols-5 gap-8 mt-36"
//             >
//                 <div className="col-span-5 xl:col-span-3">
//                     <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//                         <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
//                             <h3 className="font-medium text-black dark:text-white">
//                                 Informations Personnelles
//                             </h3>
//                         </div>
//                         <div className="p-7">
//                             <div className="flex flex-col gap-5">
//                                 <FormField
//                                     control={form.control}
//                                     name="phoneNumber"
//                                     render={({ field }) => (
//                                         <FormItem className="w-full">
//                                             <FormLabel>Numéro de Téléphone</FormLabel>
//                                             <FormControl>
//                                                 <Input {...field} className="w-full" />
//                                             </FormControl>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />

//                                 <FormField
//                                     control={form.control}
//                                     name="location"
//                                     render={({ field }) => (
//                                         <FormItem className="w-full">
//                                             <FormLabel>Emplacement</FormLabel>
//                                             <FormControl>
//                                                 <Input {...field} className="w-full" />
//                                             </FormControl>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />

//                                 <FormField
//                                     control={form.control}
//                                     name="bio"
//                                     render={({ field }) => (
//                                         <FormItem className="w-full">
//                                             <FormLabel>BIO</FormLabel>
//                                             <FormControl>
//                                                 <Textarea {...field} className="w-full" />
//                                             </FormControl>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />

//                                 <Button
//                                     type="submit"
//                                     size="lg"
//                                     className="button col-span-2 w-full"
//                                     disabled={isSubmitting}
//                                 >
//                                     {isSubmitting ? "Submitting ..." : "Save"}
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </Form>
//     );
// };

// export default EditProfileForm;
