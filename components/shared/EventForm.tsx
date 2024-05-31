"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Dropdown from "./Dropdown";
import { FileUploader } from "./FileUploader";
import { useUploadThing } from "@/lib/uploadthing";
import { RequestFormSchema } from "@/lib/validator";
import { eventDefaultValues } from "@/constants";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createDonationRequest } from "@/lib/actions/DonationRequest.actions";
type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
};

const EventForm = ({ userId, type }: EventFormProps) => {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const initialValues = eventDefaultValues;
  const form = useForm<z.infer<typeof RequestFormSchema>>({
    resolver: zodResolver(RequestFormSchema),
    defaultValues: initialValues,
  });
  const { startUpload } = useUploadThing("imageUploader");

  async function onSubmit(values: z.infer<typeof RequestFormSchema>) {
    // Handle form submission

    let uploadedImageUrl = values.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);
      if (!uploadedImages) {
        console.log("image not uploaded");
        return;
      }
      uploadedImageUrl = uploadedImages[0].url;

      console.log("the values taken : ", {
        values,
        imageUrl: uploadedImageUrl,
      });
    }
    try {
      const newDonationRequest = await createDonationRequest({
        RequestInfo: { ...values, imageUrl: uploadedImageUrl },
        userId,
        path: "/profile",
      });
      if (newDonationRequest) {
        form.reset();
        //router.push(`/feed/${newDonationRequest._id}`);
        router.push(`/`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        //onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Donation title"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row ">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    placeholder="description"
                    {...field}
                    className="textarea rounded-2xl "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <div className="flex-center w-full h-[54px] overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <Image
                      src="/assets/icons/location-grey.svg"
                      alt="calender"
                      width={24}
                      height={24}
                    />
                    <Input
                      placeholder="location"
                      className="input-field"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <div className="flex-center w-full h-[54px] overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calender"
                      width={24}
                      height={24}
                    />
                    <p className="ml-3 whitespace-nowrap text-grey-600">
                      Start Date :{" "}
                    </p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="MM/dd/yyyy h:mm aa"
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <div className="flex-center w-full h-[54px] overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calender"
                      width={24}
                      height={24}
                    />
                    <p className="ml-3 whitespace-nowrap text-grey-600">
                      End Date :{" "}
                    </p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="MM/dd/yyyy h:mm aa"
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/*TODO: Add Sadakah or Zakatoption*/}
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="amountNeeded"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <div className="flex-center w-full h-[54px] overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <Image
                      src="/assets/icons/dollar.svg"
                      alt="Amount Needed"
                      width={24}
                      height={24}
                    />
                    <Input
                      type="number"
                      placeholder="Amount Needed"
                      {...field}
                      className="p-regular-16 border-0 bg-gray-50 outline-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="button col-span-2 w-full "
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? "Submitting ... "
            : `${type} your request`}
        </Button>
        <button type="submit">submit</button>
      </form>
    </Form>
  );
};

export default EventForm;
