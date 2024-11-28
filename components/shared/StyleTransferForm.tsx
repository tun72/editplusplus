"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { creditFee, defaultValues, transformationTypes } from "@/constants";
import { CustomField } from "./CustomField";
import { useEffect, useState } from "react";

import MediaUploader from "./MediaUploader";

import { getCldImageUrl } from "next-cloudinary";

import { InsufficientCreditsModal } from "./InsufficientCreditsModal";
import axios from "axios";

export const formSchema = z.object({
  title: z.string(),
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string(),
  transformId: z.string(),
});

const StyleTransferForm = ({
  action,
  data = null,
  userId,
  type,
  creditBalance,
  config = null,
}: TransformationFormProps) => {
  const transformationType = transformationTypes[type];
  const [image, setImage] = useState(data);
  const [tranImage, setTranImage] = useState(data);

  const [newTransformation, setNewTransformation] =
    useState<Transformations | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);
  // const [transformationConfig, setTransformationConfig] = useState(config);
  // const [isPending, startTransition] = useTransition();
  // const router = useRouter();

  const initialValues =
    data && action === "Update"
      ? {
          title: data?.title,
          aspectRatio: data?.aspectRatio,
          color: data?.color,
          prompt: data?.prompt,
          publicId: data?.publicId,
        }
      : defaultValues;

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  // cloudinary.v2.config({
  //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //   api_key: process.env.CLOUDINARY_API_KEY,
  //   api_secret: process.env.CLOUDINARY_API_SECRET,
  // });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("submit");

    // console.log(image, tranImage);
    const url = getCldImageUrl({
      width: image?.width,
      height: image?.height,
      src: image?.publicId,
    });

    const response = await axios.post("/api/picpurify", {
      image_url: url, // Use `image_url` to match the server-side handler
    });

    console.log(response);

    setIsSubmitting(true);

    // console.log(data);

    // if (data || image) {
    //   const transformationUrl = getCldImageUrl({
    //     width: image?.width,
    //     height: image?.height,
    //     src: image?.publicId,
    //     ...transformationConfig,
    //   });

    //   const imageData = {
    //     title: values.title,
    //     publicId: image?.publicId,
    //     transformationType: type,
    //     width: image?.width,
    //     height: image?.height,
    //     config: transformationConfig,
    //     secureURL: image?.secureURL,
    //     transformationURL: transformationUrl,
    //     aspectRatio: values.aspectRatio,
    //     prompt: values.prompt,
    //     color: values.color,
    //   };

    //   console.log(imageData);

    //   // if (action === "Add") {
    //   //   try {
    //   //     const newImage = await addImage({
    //   //       image: imageData,
    //   //       userId,
    //   //       path: "/",
    //   //     });

    //   //     if (newImage) {
    //   //       form.reset();
    //   //       setImage(data);
    //   //       router.push(`/transformations/${newImage._id}`);
    //   //     }
    //   //   } catch (error) {
    //   //     console.log(error);
    //   //   }
    //   // }

    //   // if (action === "Update") {
    //   //   try {
    //   //     const updatedImage = await updateImage({
    //   //       image: {
    //   //         ...imageData,
    //   //         _id: data._id,
    //   //       },
    //   //       userId,
    //   //       path: `/transformations/${data._id}`,
    //   //     });

    //   //     if (updatedImage) {
    //   //       router.push(`/transformations/${updatedImage._id}`);
    //   //     }
    //   //   } catch (error) {
    //   //     console.log(error);
    //   //   }
    //   // }
    // }

    setIsSubmitting(false);
  }

  const onTransformHandler = async () => {
    setIsTransforming(true);

    console.log(image);
    console.log(tranImage);

    const url = getCldImageUrl({
      width: image?.width,
      height: image?.height,
      src: image?.publicId,
    });

    try {
      setIsTransforming(true);
      console.log("hit");

      const response = await axios.post("/api/transfer", {
        image: image?.secureURL, // Use `image_url` to match the server-side handler
        style: tranImage?.secureURL,
      });
      console.log(response);
      // setEnhanceImage({
      //   url: response.data.url,
      //   width: image.width,
      //   height: image.height,
      // });
    } catch (err: any) {
      console.log(err);

      // toast(err.message);
      // toast({
      //   title: "Error!",
      //   description: err.message,
      //   duration: 5000,
      //   className: "error-toast",
      // });
    } finally {
      setIsTransforming(false);
    }

    // setTransformationConfig(
    //   deepMergeObjects(newTransformation, transformationConfig)
    // );

    // setNewTransformation(null);

    // startTransition(async () => {
    //   await updateCredits(userId, creditFee);
    // });
  };

  useEffect(() => {
    if (image && tranImage && type === "restyle") {
      setNewTransformation(transformationType.config);
    }
  }, [image, transformationType.config, type, tranImage]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {creditBalance < Math.abs(creditFee) && <InsufficientCreditsModal />}
        <CustomField
          control={form.control}
          name="title"
          formLabel="Image Title"
          className="w-full"
          render={({ field }) => (
            <Input
              {...field}
              className="rounded-[16px] border-2 border-purple-200/20 shadow-sm shadow-purple-200/15 text-dark-600 disabled:opacity-100 p-16-semibold h-[50px] md:h-[54px] focus-visible:ring-offset-0 px-4 py-3 focus-visible:ring-transparent"
            />
          )}
        />

        <div className="grid h-fit min-h-[200px] grid-cols-1 gap-5 py-4 md:grid-cols-2">
          <div className="flex flex-1 flex-col gap-5">
            <CustomField
              control={form.control}
              name="publicId"
              className="flex size-full flex-col"
              render={({ field }) => (
                <MediaUploader
                  onValueChange={field.onChange}
                  setImage={setImage}
                  publicId={field.value}
                  image={image}
                  type={type}
                />
              )}
            />
            <CustomField
              control={form.control}
              name="transformId"
              className="flex size-full flex-col"
              render={({ field }) => (
                <MediaUploader
                  onValueChange={field.onChange}
                  setImage={setTranImage}
                  publicId={field.value}
                  image={tranImage}
                  type={type}
                  title={"Transform"}
                />
              )}
            />
          </div>

          {/* <image /> */}

          {/* <TransformedImage
            image={image}
            type={type}
            title={form.getValues().title}
            isTransforming={isTransforming}
            setIsTransforming={setIsTransforming}
            transformationConfig={transformationConfig}
          /> */}
        </div>

        <div className="flex gap-4 justify-end text-white text-[24px]">
          <Button
            type="button"
            className=" bg-purple-600 hover:bg-purple-500"
            // className="submit-button capitalize"
            disabled={isTransforming || newTransformation === null}
            onClick={onTransformHandler}
          >
            {isTransforming ? "Transforming..." : "Apply Transformation"}
          </Button>

          <Button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Save Image"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StyleTransferForm;
