import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/avatar.jpg" alt="Brandon" />
                <AvatarFallback>BR</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Brandon</h1>
                <p className="text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-foreground hover:text-muted-foreground transition-colors">About</a>
              <a href="#projects" className="text-foreground hover:text-muted-foreground transition-colors">Projects</a>
              <a href="#skills" className="text-foreground hover:text-muted-foreground transition-colors">Skills</a>
              <a href="#contact" className="text-foreground hover:text-muted-foreground transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I&apos;m <span className="text-primary">Brandon</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A passionate full-stack developer who loves creating beautiful and functional web applications.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">About Me</h3>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Full Stack Developer</CardTitle>
                  <CardDescription>Building digital experiences with modern technologies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m a dedicated developer with a passion for creating innovative web solutions. 
                    With experience in both frontend and backend development, I enjoy working with 
                    modern technologies to build scalable and user-friendly applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Oxinion</CardTitle>
                  <CardDescription>Advanced trading and analytics platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive trading platform with real-time market data, advanced charting, and portfolio management capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">WebSocket</Badge>
                  </div>
                  <Button variant="outline" size="sm">View Project</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Oxinion Finance</CardTitle>
                  <CardDescription>Financial data and research platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Financial research platform providing market insights, company analysis, and investment tools for informed decision making.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">API Integration</Badge>
                  </div>
                  <Button variant="outline" size="sm">View Project</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>OMX</CardTitle>
                  <CardDescription>Options market exchange platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Options trading platform with advanced order management, risk analytics, and real-time market data for professional traders.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">Trading APIs</Badge>
                  </div>
                  <Button variant="outline" size="sm">View Project</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h3>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">JavaScript</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">TypeScript</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">React</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">Next.js</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">Node.js</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">Python</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">PostgreSQL</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg p-3">Git</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Get In Touch</h3>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-muted-foreground mb-8">
                I&apos;m always interested in new opportunities and interesting projects. 
                Feel free to reach out if you&apos;d like to work together!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild>
                  <a href="mailto:contact@idevbrandon.com">Email Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/idevbrandon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://docs.google.com/document/d/1-pB9W-ymRE7-5bB9gLD0gdCks9MBg_qq860wHlN9gYU/edit?tab=t.0#heading=h.2l6shjehg56f" target="_blank" rel="noopener noreferrer">View CV</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/iDevBrandon" target="_blank" rel="noopener noreferrer">GitHub</a>
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
