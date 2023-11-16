<script lang="ts">
  import "./global.scss"
  import Navbar from "$lib/components/Navbar.svelte"
  import Modal from "$lib/components/Modal.svelte"

  const links: Link[] = [
    {
      name: "About Me",
      route: "/about",
      value: [
        { value: "/about#personal-statement", name: "Statement" },
        { value: "/about#future-plans", name: "Plans" },
        { value: "/about#hobbies", name: "Hobbies" },
      ],
    },
    {
      name: "Credentials",
      route: "/qualifications",
      value: [
        { value: "/qualifications#resume", name: "Resume" },
        { value: "/qualifications#achievements", name: "Achievements" },
        { value: "/qualifications#job-shadowing", name: "Job Shadowing" },
        { value: "/qualifications#community-service", name: "Volunteering" },
        { value: "/qualifications#transcripts", name: "Transcripts" },
      ]
    }
  ]

  type Link = {
    name: string
    route?: string
    value:
      | string
      | {
          name: string
          value: string
        }[]
  }
</script>

<Modal />
<Navbar {links} />
<slot />

<svelte:head>
  <link rel="stylesheet" href="https://www.nerdfonts.com/assets/css/webfont.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap"
    rel="stylesheet"
  />
</svelte:head>
