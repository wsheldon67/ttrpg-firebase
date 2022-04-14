import { db } from "../db";

/** @type {import('./[id]').RequestHandler} */
export async function get({params}) {
  const speeds:{name:string, speed:number}[]
    = db.prepare(`SELECT name, speed FROM race ORDER BY speed`).all()
  return {
    status: 200,
    body: {speeds}
  }
  // TOOD provide data for spell slots
}