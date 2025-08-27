import AuthForm from "@/features/auth/ui/AuthForm";
import AuthP from "@/features/auth/ui/AuthP";

export default async function Page() {
  return (
    <main>
      <h1 className="h1 text-center mb-3">Log In</h1>
      <AuthForm type="logIn" />
      <AuthP />
    </main>
  );
}
