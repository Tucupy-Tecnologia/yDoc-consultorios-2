"use server";

import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function waitlist(email: string) {
	const now = new Date().toISOString()

	const res = await notion.pages.create({
		parent: { database_id: "d3c5d4bbe4b248b1830aaa7d2a9284b3" },
		properties: {
			"Email": {
				type: "title",
				title: [
					{
						type: "text",
						text: {
							content: email
						}
					}
				]
			},
			"Data de inscrição": {
				type: "date",
				date: { start: now }
			}
		}
	})

	console.log(res)
}
