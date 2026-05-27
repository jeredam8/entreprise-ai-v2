import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json();
  const dir = path.join(process.cwd(), ".local-submissions");
  await fs.mkdir(dir, { recursive: true });
  await fs.appendFile(
    path.join(dir, "project-submissions.jsonl"),
    `${JSON.stringify({ submittedAt: new Date().toISOString(), ...body })}\n`,
    "utf8"
  );
  return NextResponse.json({ ok: true, localOnly: true });
}
