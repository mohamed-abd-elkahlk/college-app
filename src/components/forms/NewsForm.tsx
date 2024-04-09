"use client";
import { useRouter } from "next/navigation";
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
import { newsValidation } from "@/lib/validation";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import FileUploader from "./FileUploder";
import { useEdgeStore } from "@/context/EdgeStoreProvider";
import { useToast } from "../ui/use-toast";
const NewsForm = ({ post, action }: { post?: any; action?: string }) => {
  const { edgestore } = useEdgeStore();
  // 1. Define your form.
  const form = useForm<z.infer<typeof newsValidation>>({
    resolver: zodResolver(newsValidation),
    defaultValues: {
      title: "",
      content: "",
      tags: "",
      facility: "",
      team: "",
      image: "",
      file: [],
    },
  });

  const { toast } = useToast();
  const path = useRouter();
  // 2. Define a submit handler.

  async function onSubmit(values: z.infer<typeof newsValidation>) {
    let uploadFile;
    try {
      uploadFile = await edgestore.publicImages.upload({
        file: values.file[0],
      });
      const req = await fetch("/api/new/news", {
        method: "POST",
        body: JSON.stringify({ ...values, image: uploadFile.url }),
      });
      const res = await req.json();
      console.log(res);

      if (res.ok) {
        toast({ title: "success you create a new news" });
        path.push(`/news/${res._id}`);
      }
    } catch (error) {
      console.log(error);

      // await edgestore.myPublicImages.delete({
      //   url: uploadFile?.url!,
      // });
    }
  }
  return (
    <div className="flex-center flex-col gap-6 max-w-[720px] py-12 flex-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-6 items-center justify-center flex-col md:flex-row">
            <FormField
              control={form.control}
              name="facility"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facility</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="facility"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="team"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="level"
                      maxLength={1}
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <FileUploader
                    fieldChange={field.onChange}
                    mediaUrl={post?.imageUrl}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="content"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Input
                    placeholder="put your tag here sprate by ',' like 'math,en' "
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{action}</Button>
        </form>
      </Form>
    </div>
  );
};

export default NewsForm;
