"use client";

import { useActionState, useState } from "react";
import {
  login,
  saveEducation,
  saveExperience,
  saveProfile,
  saveProject,
  saveResume,
  saveSkill,
  type ActionState,
} from "@/app/actions";
import type { Education, Experience, Profile, Project } from "@/lib/types";
import { Checkbox, Feedback, Field, Panel, SubmitButton, TextArea } from "./ui";

const EMPTY: ActionState = {};

/* --------------------------------- login --------------------------------- */

export function LoginForm() {
  const [state, action] = useActionState(login, EMPTY);
  return (
    <form action={action} className="space-y-4">
      <Field label="Admin password" name="password" type="password" required />
      <Feedback state={state} />
      <SubmitButton>Sign in</SubmitButton>
    </form>
  );
}

/* -------------------------------- profile -------------------------------- */

export function ProfileForm({ profile }: { profile: Profile }) {
  const [state, action] = useActionState(saveProfile, EMPTY);
  return (
    <Panel
      title="Your info"
      description="Name, headline and everything in the hero and contact sections."
    >
      <form action={action} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" name="name" defaultValue={profile.name} required />
          <Field label="Headline" name="headline" defaultValue={profile.headline} />
          <Field label="Location" name="location" defaultValue={profile.location} />
          <Field label="Email" name="email" type="email" defaultValue={profile.email} />
          <Field label="Phone" name="phone" defaultValue={profile.phone} />
          <Field
            label="Avatar URL"
            name="avatar_url"
            defaultValue={profile.avatar_url}
            hint="A path like /profile.jpg, or a full URL."
          />
          <Field label="GitHub URL" name="github_url" defaultValue={profile.github_url} />
          <Field label="LinkedIn URL" name="linkedin_url" defaultValue={profile.linkedin_url} />
        </div>
        <TextArea label="Short bio (hero)" name="bio" defaultValue={profile.bio} rows={3} />
        <TextArea
          label="Objective (about section)"
          name="objective"
          defaultValue={profile.objective}
          rows={4}
        />
        <Feedback state={state} />
        <SubmitButton>Save info</SubmitButton>
      </form>
    </Panel>
  );
}

/* -------------------------------- projects ------------------------------- */

export function ProjectForm({ project }: { project?: Project }) {
  const [state, action] = useActionState(saveProject, EMPTY);
  const [open, setOpen] = useState(!project);
  const editing = Boolean(project);

  if (editing && !open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs font-medium text-accent transition-opacity hover:opacity-70"
      >
        Edit
      </button>
    );
  }

  return (
    <form action={action} className="space-y-4">
      {project ? <input type="hidden" name="id" value={project.id} /> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Title" name="title" defaultValue={project?.title} required />
        <Field
          label="Tech"
          name="tech"
          defaultValue={project?.tech?.join(", ")}
          placeholder="React, Node.js, MongoDB"
          hint="Comma separated."
        />
        <Field label="Live URL" name="live_url" defaultValue={project?.live_url} />
        <Field label="Repo URL" name="repo_url" defaultValue={project?.repo_url} />
        <Field
          label="Image URL"
          name="image_url"
          defaultValue={project?.image_url}
          hint="Optional. /projects/name.jpg"
        />
        <Field
          label="Sort order"
          name="sort_order"
          type="number"
          defaultValue={project?.sort_order ?? 0}
        />
      </div>
      <TextArea
        label="Summary (card)"
        name="summary"
        defaultValue={project?.summary}
        rows={2}
      />
      <TextArea
        label="Description (long)"
        name="description"
        defaultValue={project?.description}
        rows={4}
      />
      <Checkbox label="Feature this project" name="featured" defaultChecked={project?.featured} />
      <Feedback state={state} />
      <div className="flex gap-3">
        <SubmitButton>{editing ? "Update project" : "Add project"}</SubmitButton>
        {editing ? (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-line px-4 py-2 text-sm text-muted transition-colors hover:text-bright"
          >
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
}

/* ------------------------------- experience ------------------------------ */

export function ExperienceForm({ item }: { item?: Experience }) {
  const [state, action] = useActionState(saveExperience, EMPTY);
  const [open, setOpen] = useState(!item);
  const editing = Boolean(item);

  if (editing && !open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs font-medium text-accent transition-opacity hover:opacity-70"
      >
        Edit
      </button>
    );
  }

  return (
    <form action={action} className="space-y-4">
      {item ? <input type="hidden" name="id" value={item.id} /> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Role" name="role" defaultValue={item?.role} required />
        <Field label="Company" name="company" defaultValue={item?.company} required />
        <Field label="Location" name="location" defaultValue={item?.location} />
        <Field
          label="Period"
          name="period"
          defaultValue={item?.period}
          placeholder="Mar 2022 — Jul 2022"
        />
        <Field
          label="Sort order"
          name="sort_order"
          type="number"
          defaultValue={item?.sort_order ?? 0}
        />
      </div>
      <TextArea label="Description" name="description" defaultValue={item?.description} />
      <Feedback state={state} />
      <div className="flex gap-3">
        <SubmitButton>{editing ? "Update" : "Add experience"}</SubmitButton>
        {editing ? (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-line px-4 py-2 text-sm text-muted transition-colors hover:text-bright"
          >
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
}

/* -------------------------------- education ------------------------------ */

export function EducationForm({ item }: { item?: Education }) {
  const [state, action] = useActionState(saveEducation, EMPTY);
  const [open, setOpen] = useState(!item);
  const editing = Boolean(item);

  if (editing && !open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs font-medium text-accent transition-opacity hover:opacity-70"
      >
        Edit
      </button>
    );
  }

  return (
    <form action={action} className="space-y-4">
      {item ? <input type="hidden" name="id" value={item.id} /> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Institution"
          name="institution"
          defaultValue={item?.institution}
          required
        />
        <Field label="Degree" name="degree" defaultValue={item?.degree} />
        <Field label="Location" name="location" defaultValue={item?.location} />
        <Field label="Period" name="period" defaultValue={item?.period} />
        <Field
          label="Sort order"
          name="sort_order"
          type="number"
          defaultValue={item?.sort_order ?? 0}
        />
      </div>
      <Feedback state={state} />
      <div className="flex gap-3">
        <SubmitButton>{editing ? "Update" : "Add education"}</SubmitButton>
        {editing ? (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-line px-4 py-2 text-sm text-muted transition-colors hover:text-bright"
          >
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
}

/* --------------------------------- skills -------------------------------- */

export function SkillForm() {
  const [state, action] = useActionState(saveSkill, EMPTY);
  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Skill" name="name" required placeholder="TypeScript" />
        <Field label="Category" name="category" placeholder="Frontend" />
        <Field label="Sort order" name="sort_order" type="number" defaultValue={0} />
      </div>
      <Feedback state={state} />
      <SubmitButton>Add skill</SubmitButton>
    </form>
  );
}

/* --------------------------------- resume -------------------------------- */

export function ResumeForm({ externalUrl }: { externalUrl: string }) {
  const [state, action] = useActionState(saveResume, EMPTY);
  return (
    <form action={action} className="space-y-4">
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
          Upload a PDF
        </span>
        <input
          type="file"
          name="file"
          accept="application/pdf"
          className="w-full rounded-lg border border-line bg-ink px-3 py-2 text-sm text-body file:mr-3 file:rounded-md file:border-0 file:bg-raised file:px-3 file:py-1.5 file:text-sm file:text-bright"
        />
        <span className="mt-1 block text-xs text-muted">
          Stored in the database and served at /resume. Max 8 MB.
        </span>
      </label>
      <Field
        label="Or link to a resume"
        name="external_url"
        defaultValue={externalUrl}
        placeholder="https://drive.google.com/..."
        hint="Used only when no PDF has been uploaded."
      />
      <Feedback state={state} />
      <SubmitButton>Save resume</SubmitButton>
    </form>
  );
}
