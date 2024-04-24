"use client"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type Option = Record<"value" | "label", string>;

type MultiSelectProps = {
    options: Option[]
    selectedOptions?: string[];
    onSelect: (values: string[]) => void
    disabled?: boolean
    placeholder?: string,
    className?: string;
}

export function MultiSelect({ selectedOptions = [], onSelect, placeholder, className, options }: MultiSelectProps) {

    const text = selectedOptions.length > 0 ? `(+${selectedOptions?.length})` : ''
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                        "min-w-[170px] justify-between", className
                    )}
                >
                    {placeholder} {text}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[170px] p-0">
                <Command>
                    <CommandGroup className="max-h-[300px] overflow-auto">
                        {options.map((option: Option) => (
                            <CommandItem
                                value={option.label}
                                key={option.value}
                                onSelect={() => {
                                    let selectedOptionsCopy = [...selectedOptions];
                                    if (selectedOptionsCopy.includes(option.value)) {
                                        selectedOptionsCopy = selectedOptionsCopy.filter((item) => item !== option.value)
                                    }
                                    else selectedOptionsCopy.push(option.value)
                                    onSelect(selectedOptionsCopy)
                                }}
                                className="justify-between"
                            >

                                {option.label}
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        selectedOptions.includes(option.value)
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
