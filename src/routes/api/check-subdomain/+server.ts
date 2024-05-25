import { json, error } from '@sveltejs/kit'
import { db } from "$lib/server/db/db"
import { subdomainsTable } from '$lib/server/db/schema.js'
import { eq } from 'drizzle-orm'

export async function POST({ request, locals }) {

    if (!locals.user) {
       error(400, "No tienes acceso a esta ruta")
    }

    const { subdomain } = await request.json()

    const results = await db.select()
                            .from(subdomainsTable)
                            .where(eq(subdomainsTable.subdomain, subdomain))

    if(results.length > 0) {
        return json({ available: false })
    }

    return json({ available: true})

}