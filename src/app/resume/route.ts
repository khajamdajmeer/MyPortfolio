import { NextResponse } from "next/server";
import { isDbConfigured, query } from "@/lib/db";

export const dynamic = "force-dynamic";

/** Streams the resume stored in Postgres, falling back to the bundled PDF. */
export async function GET(request: Request) {
  const bundled = () =>
    NextResponse.redirect(new URL("/AjmeerKhajaResume.pdf", request.url));

  if (!isDbConfigured()) return bundled();

  try {
    const rows = await query<{
      filename: string;
      content_type: string;
      data: string | null;
      external_url: string | null;
    }>(
      "select filename, content_type, encode(data, 'base64') as data, external_url from resume where id = 1",
    );

    const row = rows[0];
    if (row?.data) {
      const buffer = Buffer.from(row.data, "base64");
      return new NextResponse(new Uint8Array(buffer), {
        headers: {
          "Content-Type": row.content_type || "application/pdf",
          "Content-Disposition": `inline; filename="${row.filename || "resume.pdf"}"`,
          "Cache-Control": "public, max-age=0, must-revalidate",
        },
      });
    }

    if (row?.external_url) {
      return NextResponse.redirect(new URL(row.external_url, request.url));
    }
  } catch (err) {
    console.error("Could not read resume from database:", err);
  }

  return bundled();
}
