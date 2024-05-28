import { relations } from "drizzle-orm"
import { pgTable, serial, varchar, text, integer, timestamp, jsonb } from "drizzle-orm/pg-core"

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

export const websitesTable = pgTable('websites', {
    id: serial('id').primaryKey(),
    subdomain: text('subdomain').notNull().unique(),
    category: text('category').notNull(),
    userId: text('user_id').notNull().references(() => usersTable.id),
    createdAt: timestamp('created_at').defaultNow(),
})

export const pagesTable = pgTable('pages', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    title: text('title').notNull(),
    slug: text('slug').notNull(),
    renderedHTML: text('rendered_html'),
    jsonHTML: jsonb('json_html'),
    headerHTML: text('header_html'),
    websiteId: integer('website_id').notNull().references(() => websitesTable.id),
    createdAt: timestamp('created_at').defaultNow(),
})

export const domainsTable = pgTable('domains', {
    id: serial('id').primaryKey(),
    domainName: text('domain_name').notNull().unique(),
    websiteId: integer('website_id').notNull().references(() => websitesTable.id),
    userId: text('user_id').notNull().notNull().references(() => usersTable.id),
    createdAt: timestamp('created_at').defaultNow(),
})

export const themesTable = pgTable('themes', {
    id: serial('id').primaryKey(),
    colorsPalette: jsonb('colors_palette').notNull(),
    elementsColor: jsonb('elements_color').notNull(),
    font: jsonb('font').notNull(),
    corners: text('corners').notNull(),
    websiteId: integer('website_id').notNull().references(() => websitesTable.id)
})