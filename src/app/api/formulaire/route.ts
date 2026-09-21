import { handleForm } from "@/lib/formulaire";
export const runtime = "nodejs";
export const maxDuration = 60;
export async function POST(req: Request) {
  return handleForm(req);
}
