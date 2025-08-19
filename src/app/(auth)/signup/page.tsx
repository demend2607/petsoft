import AuthForm from "@/entities/auth/ui/AuthForm";
import AuthP from "@/entities/auth/ui/AuthP";

export default async function Page() {
  return (
    <main>
      <h1 className="h1 text-center mb-3">Sign Up</h1>
      <AuthForm />
      <AuthP />
    </main>
  );
}
