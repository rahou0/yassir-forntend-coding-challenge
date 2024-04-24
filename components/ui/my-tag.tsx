import React from 'react'
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface MyTagProps {
    children?: React.ReactNode;
    closable?: boolean;
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;

}
function MyTag({ onClose, closable, children }: MyTagProps) {
    return (
        <span
            className={'transition-all border inline-flex items-center text-sm pl-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80'}
        >
            {children}
            {closable && <Button
                type="button"
                variant="ghost"
                onClick={onClose}
                className={cn("py-1 px-3 h-full hover:bg-transparent")}
            >
                <X size={14} />
            </Button>}

        </span>)
}

export default MyTag