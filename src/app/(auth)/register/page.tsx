import Register from "@/components/auth/register/register"

export const metadata = {
  title: "Register",
}

export default function RegisterPage() {
  return (
    <div className=" flex items-center justify-center p-6">
      <Register />
    </div>
  )
}
