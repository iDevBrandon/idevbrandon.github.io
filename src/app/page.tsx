"use client";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 border border-primary rounded flex items-center justify-center">
                <span className="text-primary font-mono text-lg font-bold">B</span>
              </div>
              <div>
                <h1 className="text-lg font-bold">Brandon Ha</h1>
                <p className="text-muted-foreground text-sm">Frontend Developer</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className={`text-sm font-mono transition-colors hover:text-primary ${
                  activeSection === "about" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span className="text-primary">01.</span> About
              </a>
              <a
                href="#projects"
                className={`text-sm font-mono transition-colors hover:text-primary ${
                  activeSection === "projects" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span className="text-primary">02.</span> Projects
              </a>
              <a
                href="#skills"
                className={`text-sm font-mono transition-colors hover:text-primary ${
                  activeSection === "skills" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span className="text-primary">03.</span> Skills
              </a>
              <a
                href="#contact"
                className={`text-sm font-mono transition-colors hover:text-primary ${
                  activeSection === "contact" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span className="text-primary">04.</span> Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="text-primary font-mono text-base mb-5">Hi, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-5">
                Brandon Ha.
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-6">
                I build things for the web.
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
                I&apos;m a frontend developer specializing in building exceptional digital experiences. 
                Currently, I&apos;m focused on building innovative trading platforms at{" "}
                <span className="text-primary">OXINION</span>.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="#projects">Check out my work!</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-16">
                <span className="text-primary font-mono mr-4">01.</span>
                About Me
                <div className="ml-8 h-px bg-border flex-1 max-w-xs"></div>
              </h2>
              <div className="grid md:grid-cols-3 gap-12 items-start">
                <div className="md:col-span-2">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Hello! I&apos;m Brandon, and I enjoy creating things that live on the internet. 
                      My interest in web development started back when I decided to try building custom 
                      trading interfaces — turns out hacking together HTML & CSS taught me a lot about 
                      frontend development!
                    </p>
                    <p>
                      Fast-forward to today, and I&apos;ve had the privilege of working on innovative 
                      financial platforms and trading systems. My main focus these days is building 
                      accessible, inclusive products and digital experiences at{" "}
                      <span className="text-primary">OXINION</span> for a variety of clients.
                    </p>
                    <p>
                      Here are a few technologies I&apos;ve been working with recently:
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="flex items-center">
                        <span className="text-primary mr-2">▸</span>
                        <span className="font-mono text-sm">JavaScript (ES6+)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-primary mr-2">▸</span>
                        <span className="font-mono text-sm">TypeScript</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-primary mr-2">▸</span>
                        <span className="font-mono text-sm">React</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-primary mr-2">▸</span>
                        <span className="font-mono text-sm">Next.js</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-primary mr-2">▸</span>
                        <span className="font-mono text-sm">Node.js</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-primary mr-2">▸</span>
                        <span className="font-mono text-sm">PostgreSQL</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-primary/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                    <div className="relative bg-card border border-border rounded-lg p-4">
                      <Avatar className="w-full h-64 rounded-lg">
                        <AvatarImage src="/avatar.jpg" alt="Brandon Ha" className="object-cover" />
                        <AvatarFallback className="rounded-lg bg-muted text-2xl">BH</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-16">
                <span className="text-primary font-mono mr-4">02.</span>
                Some Things I&apos;ve Built
                <div className="ml-8 h-px bg-border flex-1 max-w-xs"></div>
              </h2>
              <div className="space-y-24">
                {/* Featured Project 1 */}
                <div className="grid md:grid-cols-12 gap-8 items-center group">
                  <div className="md:col-span-7 order-2 md:order-1">
                    <div className="relative bg-card border border-border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground font-mono">Oxinion Platform</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5 order-1 md:order-2 text-right">
                    <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      <a href="https://oxinion.com" target="_blank" rel="noopener noreferrer">
                        Oxinion Trading Platform
                      </a>
                    </h3>
                    <div className="bg-card border border-border rounded p-6 mb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        A comprehensive trading platform with real-time market data, advanced charting 
                        capabilities, and portfolio management tools. Built with modern web technologies 
                        to provide traders with professional-grade analytics and execution capabilities.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-end mb-4">
                      <span className="text-muted-foreground font-mono text-sm">React</span>
                      <span className="text-muted-foreground font-mono text-sm">TypeScript</span>
                      <span className="text-muted-foreground font-mono text-sm">Node.js</span>
                      <span className="text-muted-foreground font-mono text-sm">WebSocket</span>
                    </div>
                    <div className="flex gap-4 justify-end">
                      <a 
                        href="https://oxinion.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" />
                          <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Featured Project 2 */}
                <div className="grid md:grid-cols-12 gap-8 items-center group">
                  <div className="md:col-span-5 order-1">
                    <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      <a href="https://finance.oxinion.com" target="_blank" rel="noopener noreferrer">
                        Oxinion Finance
                      </a>
                    </h3>
                    <div className="bg-card border border-border rounded p-6 mb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        A financial research platform providing comprehensive market insights, 
                        company analysis, and investment tools. Features real-time data visualization, 
                        advanced filtering, and portfolio tracking capabilities for informed decision making.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-muted-foreground font-mono text-sm">Next.js</span>
                      <span className="text-muted-foreground font-mono text-sm">Tailwind CSS</span>
                      <span className="text-muted-foreground font-mono text-sm">PostgreSQL</span>
                      <span className="text-muted-foreground font-mono text-sm">API Integration</span>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href="https://finance.oxinion.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" />
                          <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="md:col-span-7 order-2">
                    <div className="relative bg-card border border-border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground font-mono">Finance Dashboard</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Project 3 */}
                <div className="grid md:grid-cols-12 gap-8 items-center group">
                  <div className="md:col-span-7 order-2 md:order-1">
                    <div className="relative bg-card border border-border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground font-mono">OMX Platform</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5 order-1 md:order-2 text-right">
                    <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      <a href="https://omx.oxinion.com" target="_blank" rel="noopener noreferrer">
                        OMX Options Exchange
                      </a>
                    </h3>
                    <div className="bg-card border border-border rounded p-6 mb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        A sophisticated options trading platform featuring advanced order management, 
                        comprehensive risk analytics, and real-time market data feeds. Designed for 
                        professional traders requiring institutional-grade tools and performance.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-end mb-4">
                      <span className="text-muted-foreground font-mono text-sm">React</span>
                      <span className="text-muted-foreground font-mono text-sm">Python</span>
                      <span className="text-muted-foreground font-mono text-sm">MongoDB</span>
                      <span className="text-muted-foreground font-mono text-sm">Trading APIs</span>
                    </div>
                    <div className="flex gap-4 justify-end">
                      <a 
                        href="https://omx.oxinion.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" />
                          <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">
              Skills & Technologies
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">
                    JavaScript
                  </Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">
                    TypeScript
                  </Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">
                    React
                  </Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">
                    Next.js
                  </Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">
                    Node.js
                  </Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">
                    Python
                  </Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">
                    PostgreSQL
                  </Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">
                    Git
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">
              Get In Touch
            </h3>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-muted-foreground mb-8">
                I&apos;m always interested in new opportunities and interesting
                projects. Feel free to reach out if you&apos;d like to work
                together!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild>
                  <a href="mailto:idevbrandon@gmail.com">Email Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/idevbrandon/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://docs.google.com/document/d/1-pB9W-ymRE7-5bB9gLD0gdCks9MBg_qq860wHlN9gYU/edit?tab=t.0#heading=h.2l6shjehg56f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CV
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/iDevBrandon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Brandon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
