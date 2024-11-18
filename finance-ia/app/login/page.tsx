import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) redirect("/");
  return (
    <div className="grid h-full grid-cols-2">
      {/*ESQUERDA*/}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8  ">
        <Image
          src="/logo2.png"
          width={173}
          height={39}
          alt="Premium AI"
          className="mb-8"
        />
        <h1 className="text-4xl font-bold mb-3">Bem Vindo!</h1>
        <p className="text-muted-foreground mb-8">
          Premium Ai é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e fornecer insights personalizados,
          facilitando o controle de seu orçamento.
        </p>

        <SignInButton>
          <Button variant="outline">
            <LogInIcon />
            Fazer login ou criar sua conta!
          </Button>
        </SignInButton>
      </div>

      {/*DIREITA*/}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça seu login!"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
