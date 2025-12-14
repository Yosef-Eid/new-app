"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { EGYPT_GOVERNORATES } from "@/lib/constants/egypt-governorates"

export type AddressData = {
  street: string
  governorate: string
}

interface AddressFormProps {
  value: AddressData
  onChange: (address: AddressData) => void
  className?: string
}

export function AddressForm({ value, onChange, className }: AddressFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value: fieldValue } = e.target
    onChange({ ...value, [name]: fieldValue })
  }

  return (
    <div className={className}>
      <div className="grid gap-4">
        <div className="grid gap-1.5">
        
          <select
            id="governorate"
            name="governorate"
            value={value.governorate}
            onChange={handleChange}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:bg-black dark:text-white rounded-2xl"
          >
            <option value="" className="dark:text-white">Select a governorate</option>
            {EGYPT_GOVERNORATES.map((gov) => (
              <option key={gov} value={gov}>
                {gov}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}