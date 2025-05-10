import { NextRequest, NextResponse } from "next/server";
import { deleteCupon } from "@/lib/actions/cupon.actions";

// DELETE method
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Invalid or missing ID parameter" }, { status: 400 });
  }

  try {
    const result = await deleteCupon(id);

    if (!result) {
      return NextResponse.json({ error: "Cupon not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Cupon deleted successfully" }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error deleting cupon:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
