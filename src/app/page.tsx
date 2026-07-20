"use client";

import { useCallback, useEffect, useState } from "react";

type ImageItem = { id: number; src: string; alt: string };

export default function Home() {
  const [activeGallery, setActiveGallery] = useState<ImageItem[] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (images: ImageItem[], index: number) => {
    setActiveGallery(images);
    setActiveIndex(index);
  };

  const closeModal = () => setActiveGallery(null);

  const goNext = useCallback(() => {
    if (!activeGallery) return;
    setActiveIndex((i) => (i + 1) % activeGallery.length);
  }, [activeGallery]);

  const goPrev = useCallback(() => {
    if (!activeGallery) return;
    setActiveIndex(
      (i) => (i - 1 + activeGallery.length) % activeGallery.length,
    );
  }, [activeGallery]);

  useEffect(() => {
    if (!activeGallery) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeGallery, goNext, goPrev]);

  const openmileimages = [
    { id: 1, src: "/openmile1.webp", alt: "Openmile 1" },
    { id: 2, src: "/openmile2.webp", alt: "Openmile 2" },
  ];

  const uptempoimages = [
    { id: 1, src: "/uptempo1.png", alt: "Uptempo 1" },
    { id: 2, src: "/uptempo2.png", alt: "Uptempo 2" },
    { id: 3, src: "/uptempo3.png", alt: "Uptempo 3" },
    { id: 4, src: "/uptempo4.png", alt: "Uptempo 4" },
  ];

  const surffimages = [{ id: 1, src: "/surff1.png", alt: "Surff 1" }];

  const oxinioimages = [
    { id: 1, src: "/oxinion1.png", alt: "Oxinion 1" },
    { id: 2, src: "/oxinion2.png", alt: "Oxinion 2" },
  ];

  const financeimages = [
    { id: 1, src: "/finance1.png", alt: "Finance 1" },
    { id: 2, src: "/finance2.png", alt: "Finance 2" },
    { id: 3, src: "/finance3.png", alt: "Finance 3" },
    { id: 4, src: "/finance4.png", alt: "Finance 4" },
    { id: 5, src: "/finance5.png", alt: "Finance 5" },
  ];

  const ofbimages = [{ id: 1, src: "/ofb.png", alt: "Oxinion for Business" }];

  const jobangnakjiimages = [{ id: 1, src: "/shop.png", alt: "Shop 1" }];

  const supabasemarkdownimages = [
    { id: 1, src: "/supabase-markdown.png", alt: "Supabase Markdown 1" },
    { id: 2, src: "/supabase-markdown2.png", alt: "Supabase Markdown 2" },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-12 text-sm leading-relaxed text-gray-900">
        <section className="mb-8">
          <h1 className="mb-4 text-2xl font-semibold text-gray-900">
            Seongyeon (Brandon) Ha
          </h1>

          {/* Contacts */}
          <section className="mb-6">
            <div className="text-gray-600 space-y-1">
              <p>📧 idevbrandon@gmail.com</p>
              <p>☎ (647) 321-5258</p>
              <p>
                💼{" "}
                <a
                  href="https://www.linkedin.com/in/idevbrandon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
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
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Medium Blog
                </a>
              </p>
              <p>
                🐙{" "}
                <a
                  href="https://github.com/iDevBrandon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  GitHub
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
                      className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
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

                    {/* Image Gallery */}
                    <div className="mt-4">
                      <p className="mb-2 text-sm font-medium">
                        Project Gallery:
                      </p>
                      <div className="flex gap-2">
                        {openmileimages.map((image, idx) => (
                          <button
                            key={image.id}
                            onClick={() => openModal(openmileimages, idx)}
                            className="relative w-16 h-16 border border-gray-200 rounded overflow-hidden hover:border-gray-300 transition-colors"
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
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
                      className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
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

                    {/* Image Gallery */}
                    <div className="mt-4">
                      <p className="mb-2 text-sm font-medium">
                        Project Gallery:
                      </p>
                      <div className="flex gap-2">
                        {surffimages.map((image, idx) => (
                          <button
                            key={image.id}
                            onClick={() => openModal(surffimages, idx)}
                            className="relative w-16 h-16 border border-gray-200 rounded overflow-hidden hover:border-gray-300 transition-colors"
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
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
                    <a
                      href="https://www.forbes.com/digital-assets/nfts/suhosin-sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                    >
                      Software Developer @ Uptempo Global Inc
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
                      Developed DApp called &quot;Suhosin&quot; (archived)
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

                    {/* Image Gallery */}
                    <div className="mt-4">
                      <p className="mb-2 text-sm font-medium">
                        Project Gallery:
                      </p>
                      <div className="flex gap-2">
                        {uptempoimages.map((image, idx) => (
                          <button
                            key={image.id}
                            onClick={() => openModal(uptempoimages, idx)}
                            className="relative w-16 h-16 border border-gray-200 rounded overflow-hidden hover:border-gray-300 transition-colors"
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
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
                      className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
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
                      <strong>Technologies:</strong> Next.js 15, Supabase, Expo
                      React Native, MonoRepo, Zustand, MongoDB, Google Maps,
                      AR.js, Redux Toolkit, TypeScript, Prisma, TailwindCSS
                    </p>

                    {/* Image Gallery */}
                    <div className="mt-4">
                      <p className="mb-2 text-sm font-medium">
                        Project Gallery:
                      </p>
                      <div className="flex gap-2">
                        {oxinioimages.map((image, idx) => (
                          <button
                            key={image.id}
                            onClick={() => openModal(oxinioimages, idx)}
                            className="relative w-16 h-16 border border-gray-200 rounded overflow-hidden hover:border-gray-300 transition-colors"
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
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
                      className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
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
                      Systematic investment platform for data-driven portfolio
                      analysis and decision making
                    </p>

                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        Built <strong>Autopilot</strong>, a workflow engine that
                        orchestrates market data, stock fundamentals, and
                        portfolio analysis into systematic investment
                      </li>

                      <li>
                        Developed a Retrieval-Augmented Generation (RAG) system
                        using investment research documents to provide
                        contextual stock analysis and Q&amp;A
                      </li>

                      <li>
                        Implemented an <strong>Adapter Pattern</strong> to
                        abstract country-specific brokerage APIs (e.g., Alpaca,
                        Toss Securities), providing a consistent interface for
                        portfolio synchronization and order execution
                      </li>
                    </ul>

                    <p className="mt-2">
                      <strong>Technologies:</strong> Next.js 15, React,
                      TypeScript, Supabase, FastAPI, React Query, Tailwind CSS,
                      Cloudflare Workers, Cloudflare Vectorize, Vercel AI SDK
                    </p>

                    {/* Image Gallery */}
                    <div className="mt-4">
                      <p className="mb-2 text-sm font-medium">
                        Project Gallery:
                      </p>
                      <div className="flex gap-2">
                        {financeimages.map((image, idx) => (
                          <button
                            key={image.id}
                            onClick={() => openModal(financeimages, idx)}
                            className="relative w-16 h-16 border border-gray-200 rounded overflow-hidden hover:border-gray-300 transition-colors"
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
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
                      className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
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

                    {/* Image Gallery */}
                    <div className="mt-4">
                      <p className="mb-2 text-sm font-medium">
                        Project Gallery:
                      </p>
                      <div className="flex gap-2">
                        {ofbimages.map((image, idx) => (
                          <button
                            key={image.id}
                            onClick={() => openModal(ofbimages, idx)}
                            className="relative w-16 h-16 border border-gray-200 rounded overflow-hidden hover:border-gray-300 transition-colors"
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
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
                      className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
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
                    <p className="mb-2">
                      Korean octopus restaurant eCommerce website
                    </p>
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

                    {/* Image Gallery */}
                    <div className="mt-4">
                      <p className="mb-2 text-sm font-medium">
                        Project Gallery:
                      </p>
                      <div className="flex gap-2">
                        {jobangnakjiimages.map((image, idx) => (
                          <button
                            key={image.id}
                            onClick={() => openModal(jobangnakjiimages, idx)}
                            className="relative w-16 h-16 border border-gray-200 rounded overflow-hidden hover:border-gray-300 transition-colors"
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
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
                      href="https://www.npmjs.com/package/supabase-markdown"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                    >
                      📊 Supabase Markdown
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
                      Open-source npm package to generate Mermaid ERD diagrams
                      and markdown documentation from Supabase database.types.ts
                      files
                    </p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        Parses TypeScript types generated by the Supabase CLI to
                        automatically build ERD diagrams and schema docs
                      </li>
                      <li>
                        Supports multi-schema projects and enhanced foreign key
                        extraction via direct database connection or Supabase
                        API
                      </li>
                      <li>
                        Published and maintained on npm with 12,900+ weekly
                        downloads
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Technologies:</strong> TypeScript, Node.js,
                      Mermaid, Supabase
                    </p>

                    {/* Image Gallery */}
                    <div className="mt-4">
                      <p className="mb-2 text-sm font-medium">
                        Project Gallery:
                      </p>
                      <div className="flex gap-2">
                        {supabasemarkdownimages.map((image, idx) => (
                          <button
                            key={image.id}
                            onClick={() =>
                              openModal(supabasemarkdownimages, idx)
                            }
                            className="relative w-16 h-16 border border-gray-200 rounded overflow-hidden hover:border-gray-300 transition-colors"
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
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

      {/* Modal */}
      {activeGallery && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-full flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors z-10"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Prev arrow */}
            {activeGallery.length > 1 && (
              <button
                onClick={goPrev}
                className="absolute left-2 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors z-10"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}

            <img
              src={activeGallery[activeIndex].src}
              alt={activeGallery[activeIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Next arrow */}
            {activeGallery.length > 1 && (
              <button
                onClick={goNext}
                className="absolute right-2 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors z-10"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}

            {/* Counter */}
            {activeGallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                {activeIndex + 1} / {activeGallery.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
