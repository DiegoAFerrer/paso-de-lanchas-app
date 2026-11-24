import type { QrCredentialRepository } from "@/application/qr/ports";
import { prisma } from "@/infrastructure/db/prisma";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function createPrismaQrRepository(): QrCredentialRepository {
  return {
    async replaceActive(userId, encryptedSecret) {
      return prisma.$transaction(async (tx) => {
        await tx.qrCredential.updateMany({
          where: { userId, revokedAt: null },
          data: { revokedAt: new Date() },
        });
        const created = await tx.qrCredential.create({
          data: { userId, totpSecretEnc: Buffer.from(encryptedSecret, "utf8") },
          select: { id: true },
        });
        return { id: created.id };
      });
    },

    async findActiveById(id) {
      // La columna es UUID: un texto cualquiera haría que Prisma lance un error
      // en lugar de devolver "no existe". Un QR con basura debe dar "inválido".
      if (!UUID.test(id)) return null;

      const row = await prisma.qrCredential.findFirst({
        where: { id, revokedAt: null },
        select: { id: true, userId: true, totpSecretEnc: true },
      });
      if (!row) return null;
      return {
        id: row.id,
        userId: row.userId,
        encryptedSecret: Buffer.from(row.totpSecretEnc).toString("utf8"),
      };
    },
  };
}
