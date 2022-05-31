# cpr-documentation-docusaurus

## Links to the deployed website:

- [production branch](https://production.d2hzran61xipnf.amplifyapp.com/)
- [development branch](https://development.d2hzran61xipnf.amplifyapp.com/)

## Tools used:

1.  [Node.js](https://nodejs.org/en/)
2.  [Docusaurus](https://docusaurus.io/) *by Facebook / Meta*
3.  [GitHub](https://github.com/)
4.  [AWS Amplify](https://aws.amazon.com/amplify/)

## Steps to run this on your computer locally:

1.  System dependencies, common to most web development
    1.  VS code, or similar editor
        - Extension: _Git Lens_
        - Extension: _Prettier_
        - Extension: _MDX_
    2.  Terminal configured to work with this GitHub repository
    3.  Node.js is installed
2.  Clone this repository
3.  Open the folder
4.  In a terminal, navigate to the root of the project folder and run `npm install`
5.  Start the local server by running `npm run start`
6.  A new tab should open in your prefered web browser once the site is running. 
    Your terminal session should show the port the webpage is running on. 
    The default address is http://localhost:3000/ but this may change if you are already using that port for another site.

## Workflow for making updates:

1.  Clone or fork this repository
2.  Create a branch from development. with a name indicating the purpose, such as *feature_xxxxxx*
3.  Make changes to the relevant files
4.  Test using your local server, using the steps mentioned [Steps to run this on your computer locally](##-steps-to-run-this-on-your-computer-locally)
5.  When ready, enter `ctrl-c` in your terminal to stop the server. Then run `npm run build` to test that the site builds corretly.
6.  Resolve any errors that the terminal reports, and rerun the command `npm run build`.
7.  When ready, publish your branch, and submit a Pull Request to merge your changes into the *development* branch. 
    Pull Requests to the *production* branch will not merged.
8.  The administrators of this documentation will review the website for any functional issues, 
    and will periodically merge the latest commits in the *development* branch into the *production* branch.

## How should I write pages?

1.  Refer to [Markdown's guide](https://www.markdownguide.org/basic-syntax/) for syntax
2.  Refer to [Docusaurus's guide](https://docusaurus.io/docs/next/markdown-features) for supported Markdown features
3.  For advanced users, refer to [Markdown MDX](https://mdxjs.com/) for adding React Components to a Markdown file
4.  for advanced users, you may create React pages using *.js* or *.ts* file types

## Where should I place files?

1.  Markdown page

        /docs

2.  Markdown component, like a section to be reused in multiple pages

        /components

3.  Images

        /static/img

## How does the deployed website get updated?

We have this site deployed on _AWS Amplify_.
Their server is monitoring the _production_ and _development_ branches of this repository.
When AWS sees a new commit on either branch, it will rebuild the site.
The image below shows the _development_ branch rebuilding after the GitHub branch was updated by a Pull Request.

<img src="/static/img/readme_images/readme_aws_1.png" width="800"/>

This example took 2 minutes and 14 seconds to deploy.
If your _feature_ branch change is large, we can deploy it as a temporary site on AWS to confirm that it builds before submitting a Pull Request into Development.
The downsides of deploying more branches are:

- Possible time lost, though this may save time by preventing build errors on the _production_ branch
- A small cost to AWS for using their Server.
  At the time of writing (May 2022), [AWS charges](https://aws.amazon.com/amplify/pricing/) $0.01 USD per build minutes
  