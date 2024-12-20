// "use server"
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { TrashIcon } from "lucide-react";
// import AddCupon from "./add-cupon";

import AddCupon from "./add-cupon";

// const cupons = [
//   {
//     id: "2329302139",
//     code: "3fgea",
//     amount: "$150.00",
//     status: "not use",
//   },
//   {
//     id: "231242144",
//     code: "5tgfh",
//     amount: "$100.00",
//     status: "not use",
//   },
// ];

export default function Cupon() {
  return (
    <>
      <h2 className="px-2 font-bold text-2xl leading-tight">Cupon</h2>

      <AddCupon />
      {/* <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Cupon Code</TableHead>
            <TableHead>Satus</TableHead>
            <TableHead>Amount</TableHead>

            <TableHead>Add/Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cupons.map((cupon) => (
            <TableRow key={cupon.id}>
              <TableCell className="font-medium">{cupon.id}</TableCell>
              <TableCell>{cupon.code}</TableCell>
              <TableCell>{cupon.status}</TableCell>
              <TableCell>{cupon.amount}</TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Button>Edit</Button>
                  <Button className="" variant={"destructive"}>
                    <TrashIcon />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Amount</TableCell>
            <TableCell>$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table> */}
    </>
  );
}
