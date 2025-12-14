"use client"

import * as React from "react"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { AddressForm, type AddressData } from "./address-form"

type FormState = {
  username: string
  name: string
  email: string
  mobile: string
  password: string
  confirmPassword: string
  address: AddressData
}

const initialAddress: AddressData = {
  street: "",
  governorate: ""
}

export default function Register() {
  const [form, setForm] = useState<FormState>({
    username: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    address: initialAddress,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function onAddressChange(address: AddressData) {
    setForm((prev) => ({ ...prev, address }))
  }

  async function onGoogleSignUp() {
    setError(null)
    // TODO: Implement Google OAuth sign-in
    // This would typically use NextAuth.js or a similar auth provider
    console.log("Google sign-up clicked")
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    // Basic validation
    if (!form.username || !form.name || !form.email || !form.mobile || !form.password || !form.address.governorate) {
      setError("Please fill all required fields, including your governorate.")
      return
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    // Basic email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.")
      return
    }

    // Basic mobile number validation (adjust regex based on your requirements)
    if (!/^\+?[\d\s-]{10,}$/.test(form.mobile)) {
      setError("Please enter a valid mobile number.")
      return
    }

    setLoading(true)

    try {
      // Attempt to register
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const text = await res.text().catch(() => null)
        throw new Error(text || `Registration failed (${res.status})`)
      }

      setSuccess("Registration successful! You can now sign in.")
      setForm({
        username: "",
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        address: initialAddress,
      })
    } catch (err) {
      setError((err as Error).message || "An unexpected error occurred.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>Enter your details to create a new account.</CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent>
          <div className="grid gap-6">
            {/* Google Sign-up Button */}
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={onGoogleSignUp}
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    value={form.username}
                    onChange={onChange}
                    placeholder="johndoe"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={form.mobile}
                    onChange={onChange}
                    placeholder="+1234567890"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    onChange={onChange}
                  />
                </div>
              </div>



              <div className="grid gap-1.5">
                <Label>Address</Label>
                <AddressForm
                  value={form.address}
                  onChange={onAddressChange}
                  className="mt-1.5"
                />
              </div>
              <Separator className="my-4" />
            </div>

            {error && (
              <div className="text-sm text-destructive">{error}</div>
            )}
            {success && (
              <div className="text-sm text-green-600">{success}</div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </CardFooter>

        <div className="w-full text-center mt-4">
          <span className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/login" className="text-primary underline hover:no-underline">
              Go to login
            </a>
          </span>
        </div>
      </form>
    </Card>
  )
}
