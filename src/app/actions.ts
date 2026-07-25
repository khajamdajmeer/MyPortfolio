"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { checkPassword, endSession, requireAdmin, startSession } from "@/lib/auth";
import { query } from "@/lib/db";

export type ActionState = { error?: string; ok?: string };

function str(form: FormData, key: string) {
  return String(form.get(key) ?? "").trim();
}

function num(form: FormData, key: string, fallback = 0) {
  const value = Number(form.get(key));
  return Number.isFinite(value) ? value : fallback;
}

function list(form: FormData, key: string) {
  return str(form, key)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

/** Textarea where each line is one entry. */
function lines(form: FormData, key: string) {
  return str(form, key)
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function refresh() {
  revalidatePath("/");
  revalidatePath("/admin");
}

/* ------------------------------- session -------------------------------- */

export async function login(
  _prev: ActionState,
  form: FormData,
): Promise<ActionState> {
  const password = String(form.get("password") ?? "");
  if (!password) return { error: "Enter your password." };
  if (!checkPassword(password)) return { error: "That password is not correct." };
  await startSession();
  redirect("/admin");
}

export async function logout() {
  await endSession();
  redirect("/");
}

/* -------------------------------- profile ------------------------------- */

export async function saveProfile(
  _prev: ActionState,
  form: FormData,
): Promise<ActionState> {
  try {
    await requireAdmin();
    await query(
      `insert into profile (id, name, headline, location, email, phone, bio, objective, github_url, linkedin_url, avatar_url, updated_at)
       values (1, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, now())
       on conflict (id) do update set
         name = excluded.name,
         headline = excluded.headline,
         location = excluded.location,
         email = excluded.email,
         phone = excluded.phone,
         bio = excluded.bio,
         objective = excluded.objective,
         github_url = excluded.github_url,
         linkedin_url = excluded.linkedin_url,
         avatar_url = excluded.avatar_url,
         updated_at = now()`,
      [
        str(form, "name"),
        str(form, "headline"),
        str(form, "location"),
        str(form, "email"),
        str(form, "phone"),
        str(form, "bio"),
        str(form, "objective"),
        str(form, "github_url"),
        str(form, "linkedin_url"),
        str(form, "avatar_url"),
      ],
    );
    refresh();
    return { ok: "Profile saved." };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Could not save profile." };
  }
}

/* ------------------------------- projects ------------------------------- */

export async function saveProject(
  _prev: ActionState,
  form: FormData,
): Promise<ActionState> {
  try {
    await requireAdmin();
    const title = str(form, "title");
    if (!title) return { error: "A project needs a title." };

    const values = [
      title,
      str(form, "subtitle"),
      str(form, "year"),
      str(form, "summary"),
      str(form, "description"),
      lines(form, "highlights"),
      list(form, "tech"),
      str(form, "live_url"),
      str(form, "repo_url"),
      str(form, "image_url"),
      form.get("featured") === "on",
      num(form, "sort_order"),
    ];

    const id = num(form, "id", 0);
    if (id > 0) {
      await query(
        `update projects set title=$1, subtitle=$2, year=$3, summary=$4, description=$5,
           highlights=$6, tech=$7, live_url=$8, repo_url=$9, image_url=$10,
           featured=$11, sort_order=$12
         where id=$13`,
        [...values, id],
      );
    } else {
      await query(
        `insert into projects (title, subtitle, year, summary, description, highlights, tech, live_url, repo_url, image_url, featured, sort_order)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
        values,
      );
    }
    refresh();
    return { ok: id > 0 ? "Project updated." : "Project added." };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Could not save project." };
  }
}

export async function deleteProject(form: FormData) {
  await requireAdmin();
  await query("delete from projects where id = $1", [num(form, "id")]);
  refresh();
}

/* ------------------------------ experience ------------------------------ */

export async function saveExperience(
  _prev: ActionState,
  form: FormData,
): Promise<ActionState> {
  try {
    await requireAdmin();
    const role = str(form, "role");
    const company = str(form, "company");
    if (!role || !company) return { error: "Role and company are both required." };

    const values = [
      role,
      company,
      str(form, "location"),
      str(form, "period"),
      str(form, "description"),
      num(form, "sort_order"),
    ];

    const id = num(form, "id", 0);
    if (id > 0) {
      await query(
        `update experience set role=$1, company=$2, location=$3, period=$4,
           description=$5, sort_order=$6 where id=$7`,
        [...values, id],
      );
    } else {
      await query(
        `insert into experience (role, company, location, period, description, sort_order)
         values ($1,$2,$3,$4,$5,$6)`,
        values,
      );
    }
    refresh();
    return { ok: id > 0 ? "Experience updated." : "Experience added." };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Could not save experience." };
  }
}

export async function deleteExperience(form: FormData) {
  await requireAdmin();
  await query("delete from experience where id = $1", [num(form, "id")]);
  refresh();
}

/* ------------------------------- education ------------------------------ */

export async function saveEducation(
  _prev: ActionState,
  form: FormData,
): Promise<ActionState> {
  try {
    await requireAdmin();
    const institution = str(form, "institution");
    if (!institution) return { error: "An institution name is required." };

    const values = [
      institution,
      str(form, "degree"),
      str(form, "location"),
      str(form, "period"),
      num(form, "sort_order"),
    ];

    const id = num(form, "id", 0);
    if (id > 0) {
      await query(
        `update education set institution=$1, degree=$2, location=$3, period=$4,
           sort_order=$5 where id=$6`,
        [...values, id],
      );
    } else {
      await query(
        `insert into education (institution, degree, location, period, sort_order)
         values ($1,$2,$3,$4,$5)`,
        values,
      );
    }
    refresh();
    return { ok: id > 0 ? "Education updated." : "Education added." };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Could not save education." };
  }
}

export async function deleteEducation(form: FormData) {
  await requireAdmin();
  await query("delete from education where id = $1", [num(form, "id")]);
  refresh();
}

/* --------------------------------- skills ------------------------------- */

export async function saveSkill(
  _prev: ActionState,
  form: FormData,
): Promise<ActionState> {
  try {
    await requireAdmin();
    const name = str(form, "name");
    if (!name) return { error: "A skill needs a name." };
    await query(
      "insert into skills (name, category, sort_order) values ($1,$2,$3)",
      [name, str(form, "category") || "General", num(form, "sort_order")],
    );
    refresh();
    return { ok: `Added ${name}.` };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Could not add skill." };
  }
}

export async function deleteSkill(form: FormData) {
  await requireAdmin();
  await query("delete from skills where id = $1", [num(form, "id")]);
  refresh();
}

/* --------------------------------- resume ------------------------------- */

const MAX_RESUME_BYTES = 8 * 1024 * 1024;

export async function saveResume(
  _prev: ActionState,
  form: FormData,
): Promise<ActionState> {
  try {
    await requireAdmin();
    const file = form.get("file");
    const externalUrl = str(form, "external_url");

    if (file instanceof File && file.size > 0) {
      if (file.size > MAX_RESUME_BYTES) {
        return { error: "That file is larger than 8 MB." };
      }
      const bytes = Buffer.from(await file.arrayBuffer());
      await query(
        `insert into resume (id, filename, content_type, data, external_url, updated_at)
         values (1, $1, $2, decode($3, 'hex'), $4, now())
         on conflict (id) do update set
           filename = excluded.filename,
           content_type = excluded.content_type,
           data = excluded.data,
           external_url = excluded.external_url,
           updated_at = now()`,
        [
          file.name || "resume.pdf",
          file.type || "application/pdf",
          bytes.toString("hex"),
          externalUrl,
        ],
      );
      refresh();
      return { ok: `Uploaded ${file.name}.` };
    }

    if (externalUrl) {
      await query(
        `insert into resume (id, external_url, updated_at) values (1, $1, now())
         on conflict (id) do update set external_url = excluded.external_url, updated_at = now()`,
        [externalUrl],
      );
      refresh();
      return { ok: "Resume link saved." };
    }

    return { error: "Choose a PDF to upload, or paste a link." };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Could not save resume." };
  }
}
