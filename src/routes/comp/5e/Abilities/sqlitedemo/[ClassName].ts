import { db } from "../../db";

export async function get({ params }) {
  const classes = db.prepare(`SELECT id, name FROM class`).all()
  const levels = db
    .prepare('SELECT prof, level FROM c_level WHERE class_id=?')
    .all(params.ClassName)

  return {
    body: {classes, levels}
  }
}