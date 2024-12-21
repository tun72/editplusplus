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

import { z } from "zod";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { generateCupon } from "@/lib/services/cupon.service";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Define a Client Component
export default function AddCupon({
  handleRefresh,
}: {
  handleRefresh: () => void;
}) {
  const [open, setOpen] = useState(false);
  const formSchema = z.object({
    code: z.string().min(2).max(50),
    amount: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
      amount: "",
    },
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    await generateCupon({ code: value.code, amount: value.amount });

    setOpen((prev) => !prev);

    handleRefresh();
    
  }
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button className="w-fit">Add Cupon</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Your Cupon</DialogTitle>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cupon</FormLabel>

                    <div className="flex flex-1 space-x-2">
                      <FormControl>
                        <Input placeholder="cupon" {...field} />
                      </FormControl>
                      {/* <Button
                        type="button"
                        variant={"ghost"}
                        className="ml-auto w-fit block border-2 border-gray-300"
                      >
                        Random Cupon
                      </Button> */}
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
              <div className="space-x-4 flex items-center justify-end">
                {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                <DialogClose>Cancel</DialogClose>
                <Button className="ml-auto">Submit</Button>
              </div>
            </form>
          </Form>
        </DialogHeader>
        {/* <AlertDialogFooter>

        </AlertDialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
