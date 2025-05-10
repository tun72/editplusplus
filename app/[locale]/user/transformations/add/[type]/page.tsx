import Header from "@/components/shared/Header";
import ImageEnhance from "@/components/shared/ImageEnhance";
import StyleTransferForm from "@/components/shared/StyleTransferForm";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserByEmail } from "@/lib/actions/user.actions";
import { auth } from "@/lib/auth/auth";
// import { getUserById } from '@/lib/actions/user.actions';

import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const transformation = transformationTypes[type];

  const user_session = await auth();
  if (!user_session?.user?.email) redirect("/sign-in");

  const user = await getUserByEmail(user_session.user?.email);

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
