import { relations } from "drizzle-orm"
import { pgTable, serial, varchar, text, integer, timestamp } from "drizzle-orm/pg-core"

export const usersTable = pgTable('users', {
    id: text('id').primaryKey(),
    email: text('email').unique(),
    userName: varchar('user_name', { length: 50 }),
    password: text('password'),
    urlProfilePicture: text('url_profile_picture'),
    createdAt: timestamp('created_at').defaultNow()
})

export const sessionsTable = pgTable('sessions', {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => usersTable.id),
    expiresAt: timestamp('expires_at', {
        withTimezone: true,
        mode: "date"
    }).notNull()
})

export const pagesTable = pgTable('pages', {
    id: serial('id').primaryKey(),
    pageName: text('page_name'),
    pageTitle: text('page_title'),
    websiteId: integer('website_id').references(() => websitesTable.id),
    html: text('html'),
})

export const websitesTable = pgTable('websites', {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull().references(() => usersTable.id)
})

export const domainsTable = pgTable('domains', {
    id: serial('id').primaryKey(),
    domainName: text('domain_name').notNull(),
    userId: text('user_id').notNull().references(() => usersTable.id)
})