<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Prerender only the explicitly listed public homepage with TanStack Start and deploy `.output/public` to GitHub Pages; static hosting must not depend on a Worker process or capture private routes.
- Keep photo sources in CDN asset pointers and mirror the referenced portrait into the static artifact at its exact URL path before deploying; GitHub Pages cannot serve Lovable's asset proxy itself.
