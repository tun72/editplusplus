import Header from "@/components/shared/Header";
import ImageEnhance from "@/components/shared/ImageEnhance";
import StyleTransferForm from "@/components/shared/StyleTransferForm";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
// import { getUserById } from '@/lib/actions/user.actions';
import { currentUser } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const user = await currentUser();
  const transformation = transformationTypes[type];

  if (!user) redirect("/sign-in");

  // const user = await getUserById(userId);

  let form = (
    <TransformationForm
      action="Add"
      userId={"67348dabb046a35acf7171ac"}
      type={transformation.type as TransformationTypeKey}
      creditBalance={100}
    />
  );

  if (type === "restyle") {
    form = (
      <StyleTransferForm
        action="Add"
        userId={"67348dabb046a35acf7171ac"}
        type={transformation.type as TransformationTypeKey}
        creditBalance={100}
      />
    );
  }

  if (type === "enhance") {
    form = (
      <ImageEnhance
        action="Add"
        userId={"67348dabb046a35acf7171ac"}
        type={transformation.type as TransformationTypeKey}
        creditBalance={100}
      />
    );
  }

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">{form}</section>
      {/*  */}
    </>
  );
};

export default AddTransformationTypePage;
