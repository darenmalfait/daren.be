<div align="center">
<h1>Daren.be</h1>

<p>Darens personal website</p>
</div>

---

This repository contains the code for my personal website. The website is built using NextJS with tailwindcss and tinacms as a CMS.


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Environment Variables](#environment-variables)
- [Install](#install)
- [Favicon](#favicon)
- [Commit Messages](#commit-messages)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Environment Variables
The following environment variables are required to run the website:

* `NEXT_PUBLIC_TINA_CLIENT_ID`: This is retrieved from your project at app.tina.io.
* `TINA_TOKEN`: This is retrieved from your project at app.tina.io.
* `NEXT_PUBLIC_TINA_BRANCH`: This is set by default CI with Netlify/Vercel/Github, but can be overridden.
* `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Found in cloudinary.
* `NEXT_PUBLIC_CLOUDINARY_API_KEY`: Found in cloudinary.
* `CLOUDINARY_API_SECRET`: Found in cloudinary.
* `NEXT_PUBLIC_RECAPTCHA_SITEKEY`: Recaptcha public key.
* `RECAPTCHA_SECRETKEY`: Recaptcha secret key.
* `SENDGRID_API_KEY`: Found in sendgrid.
* `NEXT_PUBLIC_ALGOLIA_APP_ID`: Found in Algolia app settings.
* `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY`: Found in Algolia app settings.
* `ALGOLIA_ADMIN_KEY`: Found in Algolia app settings.
* `NEXT_PUBLIC_ALGOLIA_INDEX_NAME`: Found in Algolia app settings.

## Install
The package manager used in this project is pnpm. To install the required packages, run the following command:

```bash
pnpm i
```

To run the project locally, use the following command:

```bash
pnpm dev
```

## Favicon
The website's favicon was generated with [https://realfavicongenerator.net/](https://realfavicongenerator.net/).

## Commit Messages
The commit messages for this project follow the semantic format. For more information on how to write the perfect commit message, please refer to this [blog post](https://www.daren.be/blog/2022/02/writing-the-perfect-git-commit-message).

## License
This website is licensed under the MIT license. Please see the LICENSE file for more information.
