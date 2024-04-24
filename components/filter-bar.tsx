"use client"
import * as React from "react";
import { areAllPropertiesEmpty, cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

interface FilterBarProps {
    isLoading: boolean;
    reset: (e: any) => void;
    refetch?: () => void;
    properties?: any;
    filters?: React.JSX.Element;
    children?: React.ReactNode;
    isLarge?: boolean;
}



function FilterBar(props: FilterBarProps) {
    const childrenArray = React.Children.toArray(props.children);

    return (
        <div className="flex flex-col gap-2">

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center py-1 justify-between">
                <div className="hidden lg:flex lg:flex-row  items-center gap-2">
                    {props.children}
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 w-full gap-4 lg:hidden">
                    {childrenArray?.map((child, index) => <div className="w-full flex items-center" key={`filter-item-${index}`}>{child}</div>)}
                </div>
            </div>


            {!areAllPropertiesEmpty(props.properties) && <div className="flex gap-2 justify-between rounded-md border px-4 py-3" style={{ background: 'rgba(0, 0, 0, 0.02)' }}>
                <div className="d-flex items-center gap-3">
                    <div className="select-filters-tags pt-1 gap-3">
                        {props.filters}
                    </div>
                </div>
                <div className="flex gap-2 pt-1">
                    <button
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            {
                                "cursor-not-allowed opacity-60": false,
                            },
                        )}
                        onClick={props.reset}
                        disabled={props.isLoading}
                    >
                        <Icons.close className="me-2 h-4 w-4" />
                        Reset
                    </button>
                </div>
            </div>}

        </div>)
}

export default FilterBar