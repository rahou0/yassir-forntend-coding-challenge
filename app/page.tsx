"use client"
import * as React from "react"
import { PageShell } from "@/components/shell";
import { PageHeader } from "@/components/header";
import TableLayout from "@/components/layouts/table-layout";
import { columns } from "./_components/columns";
import { DataTable } from "@/components/data-table";
import Filters from "./_components/filters";
import { filterAndSortData } from "@/lib/filter-utils";
import useReservationFilter from "./_components/use-reservation-filter";
import { useGetReservationListQuery } from "@/services/api/api.service";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();
  const { data, isLoading, isFetching, isError } = useGetReservationListQuery({});
  const [filter] = useReservationFilter();

  React.useEffect(() => {
    if(isError){
      toast({
        variant:'destructive',
        title: "Failed to Load Data",
        description: "Failed to Fetch reservation List from Github",
    });
    }
  }, [isError])
  
  return (
    <PageShell>
      <PageHeader heading="Reservations List" text="">
      </PageHeader>
      <Filters isLoading={isLoading || isFetching} />
      <TableLayout isLoading={isLoading || isFetching} isNullOrError={!data || isError}>
        {data && <div className="relative overflow-x-auto">
          <DataTable
            columns={columns}
            data={filterAndSortData(filter, data)}
            totalItems={20}
            pageCount={1}
            pageIndex={0}
            pageSize={20}
            emptyPlaceHolderText="no Reservation availlable"
          />
        </div>}
      </TableLayout>
    </PageShell>
  );
}
