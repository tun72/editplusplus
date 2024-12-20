import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrashIcon } from "lucide-react";

const users = [
  {
    id: "2329302139",
    name: "Tun Tun Myint",
    email: "tunt72553@gmail.com",
    credits: 10,
    status: "Free User",
  },
  {
    id: "2329302139",
    name: "Tun Tun Myint",
    email: "tunt72553@gmail.com",
    credits: 10,
    status: "Free User",
  },
  {
    id: "2329302139",
    name: "Tun Tun Myint",
    email: "tunt72553@gmail.com",
    credits: 10,
    status: "Free User",
  },
];

export default function Cupon() {
  return (
    <>
      <h2 className="px-2 font-bold text-2xl leading-tight">User</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Credits</TableHead>

            <TableHead>Status</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.credits}</TableCell>
              <TableCell>{user.status}</TableCell>

              <TableCell>
                <Button className="" variant={"destructive"}>
                  <TrashIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total User</TableCell>
            <TableCell>3</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
