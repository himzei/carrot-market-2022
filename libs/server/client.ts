import { PrismaClient } from "@prisma/client";

export default new PrismaClient();

// client.user.create({
//   data: {
//     email: "hi",
//     name: "hi",
//   },
// });
