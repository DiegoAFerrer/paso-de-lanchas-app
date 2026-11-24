import { issueQrCredential } from "@/application/qr/issue-qr-credential";
import { createPrismaQrRepository } from "@/infrastructure/qr/prisma-qr-repository";
import { getQrStepSeconds } from "@/infrastructure/qr/qr-settings";
import { encryptSecret } from "@/infrastructure/qr/secret-cipher";
import { newSecret } from "@/infrastructure/qr/totp";
import { requireApiRole } from "@/lib/auth/require-role";
import { getQrSigningSecret } from "@/infrastructure/qr/qr-key";

export async function POST() {
  const auth = await requireApiRole("PASSENGER");
  if (!auth.ok) return auth.response;

  const result = await issueQrCredential(auth.user.id, {
    repository: createPrismaQrRepository(),
    newSecret,
    encryptSecret: (plain) => encryptSecret(plain, getQrSigningSecret()),
    stepSeconds: await getQrStepSeconds(),
  });

  // El secreto viaja una sola vez: que ningún caché lo guarde.
  return Response.json(result, { headers: { "Cache-Control": "no-store" } });
}
