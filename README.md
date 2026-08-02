# terencela

Targeted application dossier pages for Zurich AI roles. Built with Next.js, Tailwind CSS, and Motion.

## Routes

- `/` - Internal application hub (noindex)
- `/openai` - OpenAI Forward Deployed Engineer dossier
- `/anthropic` - Anthropic Applied AI Architect dossier
- `/google` - Google AI Sales Lead dossier
- `/salesforce` - Salesforce Forward Deployed Engineer dossier

## Subdomains

Each dossier is served on its own subdomain:
- `openai.terencela.com`
- `anthropic.terencela.com`
- `google.terencela.com`
- `salesforce.terencela.com`

## Development

```bash
npm run dev
```

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Motion (Framer Motion)
- Vercel
