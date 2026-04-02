export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-12 text-sm leading-relaxed text-gray-900">
        <section className="mb-16">
          <h1 className="mb-8 text-2xl font-semibold text-gray-900">
            Seongyeon (Brandon) Ha
          </h1>

          {/* Contacts */}
          <section className="mb-12">
            <h3 className="text-lg font-medium mb-6">Contacts</h3>
            <div className="text-gray-600 space-y-1">
              <p>📧 idevbrandon@gmail.com</p>
              <p>☎ (647) 321-5258</p>
              <p>
                💼{" "}
                <a
                  href="https://www.linkedin.com/in/idevbrandon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                📝{" "}
                <a
                  href="https://medium.com/@idevbrandon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Medium Blog
                </a>
              </p>
            </div>
          </section>

          {/* Skills Summary */}
          <section className="mb-12">
            <h3 className="text-lg font-medium mb-6">
              Skills & Experiences Summary
            </h3>
            <div className="text-gray-600">
              <p>
                Next.js (React), Expo (React Native), Redux Toolkit, React
                Query, Express.js, MongoDB, Supabase
              </p>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-12">
            <h3 className="text-lg font-medium mb-6">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {/* Openmile */}
              <div className="flex gap-6">
                <div className="shrink-0 w-20">
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    2024 — 2026
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.openmile.partner&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                    >
                      Web Developer @ Platform development Team at Openmile
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-gray-400"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <p className="mb-2">
                      Vehicle management SaaS platform for commercial fleet
                      maintenance
                    </p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        Led frontend development for the &quot;OneConnect&quot;
                        maintenance platform app for auto repair shops using
                        Expo React Native, managing EAS build pipelines for App
                        Store and Google Play releases
                      </li>
                      <li>
                        Architected and maintained a Turborepo-based monorepo
                        supporting multiple Next.js 15 applications (One Care,
                        One Connect, Admin) with a shared UI component library
                        and centralized API response configurations
                      </li>
                      <li>
                        Introduced Orval-based API client and React Query hook
                        generation, improving type safety, reducing boilerplate,
                        and significantly boosting frontend team productivity
                      </li>
                      <li>
                        Contributed to the processing of over 8000+ accident
                        reports, improving workflow automation for the call
                        center
                      </li>
                      <li>
                        Built vehicle monitor dashboard with map-based
                        visualizations and color-coded speed insights from
                        vehicle ODM
                      </li>
                      <li>
                        Migrated CI/CD pipelines from GitHub/Vercel to GitLab,
                        introducing Argo CD for k8s(Kubernetes) deployments, and
                        containerized web applications with Docker on Amazon EKS
                        for scalable production workloads
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Surff Company */}
              <div className="flex gap-6">
                <div className="shrink-0 w-20">
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    2023
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <a
                      href="https://surff.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                    >
                      Frontend Web Developer @ Surff Company
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-gray-400"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <p className="mb-2">
                      In-house venture of Hyundai Motor Group - export/import
                      cargo(vessel) marketplace
                    </p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        Modernized Frontend Architecture: Migrated legacy jQuery
                        codebase to a modular React framework
                      </li>
                      <li>
                        Apply React Query to reduce load times and debounce for
                        high-frequency searched destination data
                      </li>
                      <li>
                        Developed a cargo pricing tool with API integration for
                        accurate and responsive calculations
                      </li>
                      <li>
                        Developed an interactive dashboard for managing and
                        visualizing import/export volume data
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Uptempo Global */}
              <div className="flex gap-6">
                <div className="shrink-0 w-20">
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    2022
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="text-gray-900">
                      Software Developer @ Uptempo Global Inc
                    </span>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <p className="mb-2">
                      Developed DApp called &quot;Suhosin&quot;
                    </p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        Developed DApp Suhosin NFTs with Caver.js and IPFS and
                        traded up to 5000 on OpenSea
                      </li>
                      <li>
                        Optimized state management with Redux and improved
                        performance using Lazy Loading and Caching
                      </li>
                      <li>
                        Experienced in AWS S3/CloudFront with CI/CD integration
                        for scalable hosting and global delivery
                      </li>
                      <li>
                        Integrated Klaytn CDN for secure NFT loading,
                        authentication validation, and mock data for API
                        downtime
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Community STEM Instructor */}
              <div className="flex gap-6">
                <div className="shrink-0 w-20">
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    2016
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="text-gray-900">
                      Community STEM Instructor (Volunteer), Birmingham
                      Community Center, UK
                    </span>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        Led weekly Saturday sessions teaching robotics and
                        coding to 3 children
                      </li>
                      <li>
                        Guided students through hands-on Arduino projects,
                        including LED controllers, motion sensors
                      </li>
                      <li>
                        Designed interactive lessons that simplified complex
                        concepts and encouraged experimentation
                      </li>
                      <li>
                        Fostered a supportive and engaging learning environment,
                        helping children build confidence in STEM skills
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-12">
            <h3 className="text-lg font-medium mb-6">Projects</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-20">
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    Present
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <a
                      href="https://oxinion.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                    >
                      🗺 Oxinion
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-gray-400"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <p className="mb-2">
                      Location-based social media and geo-first marketing SaaS
                    </p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        Built a location-based service using GeoJSON and Google
                        Maps for geospatial content discovery
                      </li>
                      <li>
                        Developed immersive AR experiences with AR.js and
                        implemented seamless SSO authentication across platforms
                      </li>
                      <li>
                        Set up CI/CD pipelines with GitHub Actions for automated
                        data workflows
                      </li>
                      <li>
                        Streamlined state management with Redux Toolkit and
                        later transitioned to Zustand
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Technologies:</strong> Next.js 15, Supabase,
                      MonoRepo, Zustand, MongoDB, Google Maps, AR.js, Redux
                      Toolkit, TypeScript, Prisma, TailwindCSS
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-20">
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    Present
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <a
                      href="https://finance.oxinion.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                    >
                      💰 Oxinion Finance
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-gray-400"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <p className="mb-2">
                      Financial data tools and investment tracking platform
                    </p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        Automated financial index collection and storage using
                        Supabase and cron jobs
                      </li>
                      <li>
                        Enhanced user experience through goal-based financial
                        planning tools and interactive dashboards
                      </li>
                      <li>
                        Built real-time market data visualization and portfolio
                        tracking features
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Technologies:</strong> Next.js 15, Supabase,
                      FastAPI, TypeScript, TailwindCSS
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-20">
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    Present
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <a
                      href="https://business.oxinion.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                    >
                      🏢 Oxinion for Business
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-gray-400"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <p className="mb-2">
                      Business management and analytics platform
                    </p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        Developed business intelligence dashboards for
                        data-driven decision making
                      </li>
                      <li>
                        Implemented customer relationship management and project
                        tracking tools
                      </li>
                      <li>
                        Created automated reporting and performance analytics
                        features
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Technologies:</strong> Next.js 15, Supabase,
                      TypeScript, TailwindCSS
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-20">
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    Present
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <a
                      href="https://omx.oxinion.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                    >
                      🔧 OMX (Oxinion Marketing eXchange)
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-gray-400"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <p className="mb-2">
                      Vehicle maintenance platform app for auto repair shops
                    </p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        Led frontend development using Expo React Native for
                        cross-platform mobile deployment
                      </li>
                      <li>
                        Managed EAS build pipelines for App Store and Google
                        Play releases
                      </li>
                      <li>
                        Built vehicle monitor dashboard with map-based
                        visualizations and real-time data
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Technologies:</strong> Expo React Native,
                      TypeScript, EAS Build
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-20">
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    Present
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <a
                      href="https://jobangnakji.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                    >
                      🐙 Jobangnakji.com
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-gray-400"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <p className="mb-2">Korean octopus restaurant eCommerce website</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        Developed location-based octopus restaurant
                        recommendations and reviews
                      </li>
                      <li>
                        Built community features for sharing restaurant
                        experiences and octopus dish recommendations
                      </li>
                      <li>
                        Implemented menu integration and restaurant hours data
                        for optimal dining experiences
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Technologies:</strong> Next.js, Supabase,
                      TypeScript, TailwindCSS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h3 className="text-lg font-medium mb-6">Education</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-20">
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    2015 — 2018
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="text-gray-900">
                      Computing for Business BSc at Aston University
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm mb-2">
                    Birmingham, UK
                  </div>
                  <div className="text-gray-600">
                    <p>Study Field: Computer Science & Business</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
