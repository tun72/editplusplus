"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

// Define a Client Component
export default function AddCupon() {
  const formSchema = z.object({
    cupon: z.string().min(2).max(50),
    amount: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cupon: "",
      amount: "",
    },
  });

  function onSubmit() {}
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add Cupon</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create Your Cupon</AlertDialogTitle>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="cupon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cupon</FormLabel>

                    <div className="flex flex-1 space-x-2">
                      <FormControl>
                        <Input placeholder="cupon" {...field} />
                      </FormControl>
                      <Button
                        type="button"
                        variant={"ghost"}
                        className="ml-auto w-fit block border-2 border-gray-300"
                      >
                        Random Cupon
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="cupon price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <div className="space-x-4 flex items-end justify-end">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button className="ml-auto">Submit</Button>
              </div>
            </form>
          </Form>
        </AlertDialogHeader>
        {/* <AlertDialogFooter>

        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}
