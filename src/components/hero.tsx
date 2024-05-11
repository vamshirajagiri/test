import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Skills</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-40">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Learn by Doing: Real-World Projects for Skill Development
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Unlock your potential through hands-on learning. Dive into real-world projects and gain the skills
                  employers are seeking.
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Join the Community
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  alt="Hero"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-t-xl object-cover"
                  height="450"
                  src="/cube.png"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Real-World Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hands-On Learning Across Industries</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Work on Actual real projects,not dummy tutorials !!!!!
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">System Design</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Master system design by tackling real-world projects and building scalable solutions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Product Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Learn product management by developing and launching a product from scratch.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Software Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Develop software skills by working on real-world projects and collaborating with a community.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Marketing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Develop marketing skills by creating campaigns and promoting your own project..
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Social Media Strategy</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Craft a social media strategy by promoting your own project and engaging with your audience.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Business Consulting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Gain business consulting skills by advising and mentoring entrepreneurs and startups.
.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Community Involvement
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Empowered by a Supportive Community</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join a vibrant community of learners, mentors, and industry experts. Collaborate, share knowledge, and
                  support each other on your skill development journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/avatars/01.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Jessica Doe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Learner, Marketing Campaign</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "The community support and mentorship I received during my marketing campaign project were invaluable.
                  I gained practical skills and confidence that I can apply in my career."
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/avatars/02.png" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Michael Roth</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mentor, Data Analysis</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "Mentoring the data analysis project was an incredibly rewarding experience. Seeing the learners
                  develop their skills and apply them to real-world challenges was truly inspiring."
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/avatars/03.png" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Sarah Atkins</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Industry Expert, Web Development</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "The web development project was an excellent opportunity for the learners to apply their skills to a
                  real-world scenario. I was impressed by their problem-solving abilities and collaborative approach."
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Skills Developed
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock Your Potential</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Gain a diverse set of skills that are highly valued by employers, including problem-solving, critical
                  thinking, collaboration, and more.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Problem-Solving</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Develop the ability to identify and tackle complex challenges through a structured, analytical
                  approach.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Critical Thinking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn to evaluate information, question assumptions, and make informed decisions to drive meaningful
                  impact.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Collaboration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enhance your teamwork and communication skills by working closely with diverse groups to achieve
                  shared goals.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Adaptability</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Develop the ability to navigate and thrive in dynamic environments, embracing change and new
                  challenges.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Project Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn to plan, execute, and deliver projects effectively, leveraging best practices and tools.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Communication</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enhance your ability to convey ideas, present solutions, and influence stakeholders through compelling
                  communication.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join the Skill-Building Revolution
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Unlock your potential and gain the skills that employers are seeking. Explore our program and join our
                vibrant community today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row" />
          </div>
        </section>
      </main>
    </div>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}