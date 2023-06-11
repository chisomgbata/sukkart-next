export function slugify(name: string) {
  return name
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s/g, "-")
    .toLowerCase();
}
