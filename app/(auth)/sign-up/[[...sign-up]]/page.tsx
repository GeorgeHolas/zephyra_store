import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignUp 
      appearance={{
          elements: {
            formFieldInput__password: {
              autoComplete: "current-password"
            }
          }
        }}
      />
    </div>
  );
}