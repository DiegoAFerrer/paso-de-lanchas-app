// este archivo es un ejemplo de el uso de los componentes de la UI.

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { FieldDemo } from "@/components/examples/field-demo";

export function ComponentsShowcase() {

  return (
    <>
    <Card className="mx-auto mt-6 max-w-2xl text-center">
        <CardHeader className="space-y-1">
          <CardTitle className="text-lg">Card de Ejemplo</CardTitle>
        </CardHeader>
        <p className="text-muted-foreground text-sm">
          Este componente Card es un ejemplo de como implementar componentes en la UI.
        </p>
        <CardDescription className="text-muted-foreground text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nemo magni voluptate
          rem amet ipsum blanditiis sed, excepturi dolorem fugit.
        </CardDescription>
      </Card>
      <div className="mx-auto mt-6 max-w-2xl text-center">
        <Button className="mx-auto mt-6" variant="secondary" size="lg">
          Botón de ejemplo
        </Button>
        <FieldDemo />
      </div>
      <Alert className="mx-auto mt-6 max-w-2xl text-center" variant="success">
        <p className="text-muted-foreground text-sm">
          Este componente Alert es un ejemplo de como implementar componentes en la UI.
        </p>
      </Alert>
    </>
  );
}