import type { Actions } from "@sveltejs/kit";
import { fail, error, redirect } from "@sveltejs/kit"
import { db } from "$lib/server/db/db"
import { subdomainsTable } from "$lib/server/db/schema";

export const load = (event) => {
    if (!event.locals.user) {
        redirect(302, "/")
    }

    return {}
}

export const actions = {

    default: async ({ request, locals }) => {
        let formData = await request.formData()
        let subdomain = formData.get("subdomain")
        let category = formData.get("category")

        if(!locals.user) {
            redirect(302, "/")
        }

        if(typeof subdomain !== "string" || subdomain.length == 0) {
            return fail(400, {message: "Subdominio inválido"})
        }

        if (typeof category !== "string" || category.length == 0) {
            return fail(400, { message: "Categoria inválida" })
        }

        try {

            await db.insert(subdomainsTable).values({
                userId: locals.user.id,
                subdomain: subdomain,
            })

        }

        catch {
            return fail(400, {message: "No se pudo crear el sitio. Intenta nuevamente."})
        }

        redirect(302, "/magic-editor")
    }

} satisfies Actions