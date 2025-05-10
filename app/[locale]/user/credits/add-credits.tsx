"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

import { addCupon } from "@/lib/services/cupon.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function AddCredit() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const formSchema = z.object({
    code: z.string().min(2).max(50),
  });

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    console.log(value);

    const isSuccess = await addCupon(value.code);
    if (isSuccess) {
      setOpen(false);
      router.push("/en/user/profile");
    } else {
      console.log(isSuccess);

      form.setError("code", {
        type: "manual",
        message: "Invalid code.",
      });
    }
  }

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button className="w-fit">Add Credit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Your Cupon Code</DialogTitle>

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

export default AddCredit;
