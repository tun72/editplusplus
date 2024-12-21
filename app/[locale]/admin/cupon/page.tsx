/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrashIcon } from "lucide-react";
import AddCupon from "./add-cupon";
import { useEffect, useState } from "react";
import { getCupons } from "@/lib/services/cupon.service";

import axios from "axios";

export default function Cupon() {
  const [cupons, setCupons] = useState<any>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCupon() {
      const cupons = await getCupons();
      setCupons(cupons);
    }

    fetchCupon();
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh((prev) => !prev); // Toggle refresh state
  };

  const handleDeleteCupon = async (id: string) => {
    try {
      // Send DELETE request to the API
      const response = await axios.delete(`/api/cupon/${id}`);

      // Check if the response is successful
      if (response.status === 200) {
        // Trigger the refresh function only if the deletion is successful
        handleRefresh();
      } else {
        // If status is not 200, handle any other case
        console.error(
          "Error deleting cupon:",
          response.data?.error || "Unknown error"
        );
      }
    } catch (error: any) {
      // Check if error is an Axios error or another type of error
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios error:",
          error.response?.data?.error || error.message
        );
      } else {
        console.error("Unexpected error:", error.message);
      }
    }
  };
  return (
    <>
      <div className="flex justify-between mb-4 items-center">
        <h2 className="px-2 font-bold text-2xl leading-tight">Cupon</h2>
        <AddCupon handleRefresh={handleRefresh} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Cupon Code</TableHead>
            <TableHead>Satus</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cupons.map(
            (cupon: {
              _id: string;
              code: string;
              status: string;
              amount: string;
            }) => (
              <TableRow key={cupon._id}>
                <TableCell className="font-medium">{cupon._id}</TableCell>
                <TableCell>{cupon.code}</TableCell>
                <TableCell>{cupon.status}</TableCell>
                <TableCell>{cupon.amount}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <Button
                      variant={"destructive"}
                      onClick={() => handleDeleteCupon(cupon._id)} // Call the renamed function
                    >
                      <TrashIcon />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </>
  );
}
