import Header from "@/components/shared/Header";
import ImageEnhance from "@/components/shared/ImageEnhance";
import StyleTransferForm from "@/components/shared/StyleTransferForm";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
// import { getUserById } from '@/lib/actions/user.actions';
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = await auth();
  const transformation = transformationTypes[type];

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  let form = (
    <TransformationForm
      action="Add"
      userId={user._id}
      type={transformation.type as TransformationTypeKey}
      creditBalance={user.creditBalance}
    />
  );

  if (type === "restyle") {
    form = (
      <StyleTransferForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    );
  }

  if (type === "enhance") {
    form = (
      <ImageEnhance
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    );
  }

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">{form}</section>
    </>
  );
};

export default AddTransformationTypePage;
