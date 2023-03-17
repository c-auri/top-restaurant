# Tea House

This project is intended as a lesson in ES6 modules and Webpack. The assignment was to create a basic website by using a minimal HTML file that gets filled using JavaScript modules.

## Lesson Objectives
- [x] Set up webpack
- [ ] Create a homepage, menu and contact page using modules
- [ ] Use tabbed browsing in the navigation
- [ ] Use modules for header and footer
- [ ] Import images and styles with webpack

## Additional Personal Challenges
- [x] Use ESLint in combination with webpack
- [x] Do not use a HTML file (use HtmlWebpackPlugin instead)
- [x] Deploy to GitHub Pages without ever pushing `dist/` to the `main` branch

## Notes and Lessons Learned
- The deployment strategy provided in the lesson pushes `dist/` to `main` when first deploying the site. I was unhappy with that and wanted to find a solution that allows for `dist/` to stay ignored on `main`. This [comment](https://gist.github.com/cobyism/4730490) in the gist looked promising, but did not work for me right out of the gate. The major problem I faced was that executing that script created a git worktree that isn't being removed properly when calling the script a second time. To remedy this, I added a line that calles `git worktree prune` after deleting the `dist/` directory. This cleans the worktree and allows for a new push to `gh-pages`.

## Room for Improvement
- For the deployment script to work, `gh-pages` must already be present on the remote. Creating the branch and pushing it deploys the files that are currently committed, which is undesirable. A solution might be to start the project with a completely empty initial commit and push `gh-pages` right away. However, it would be better to find a solution that does not require such foresight.