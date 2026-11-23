//este archivo es un ejemplo de cómo usar el componente Field

"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldDemo() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // evita que la página se recargue

    if (!email.includes("@")) {
      setError("Escribe un correo válido.");
      return;
    }
    setError(null);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <Field data-invalid={error ? true : undefined}>
        <FieldLabel htmlFor="demo-email">Correo electrónico</FieldLabel>
        <Input
          id="demo-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={error ? true : undefined}
        />
        <FieldDescription>Usa el correo con el que te registraste.</FieldDescription>
        {error && <FieldError>{error}</FieldError>}
      </Field>

      <Button type="submit" className="w-full">
        Continuar
      </Button>
    </form>
  );
}