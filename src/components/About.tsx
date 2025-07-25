export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-muted">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
            Experienced Mobile Developer with over a year in mobile app development, specializing in Flutter
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600 dark:text-muted-foreground mb-6">
              I'm a Junior Full Stack Mobile Developer with a passion for creating innovative mobile solutions. 
              With over a year of experience in mobile app development, I specialize in Flutter and have contributed 
              to projects like AdopteMe, Kwik-Kik, and Axia Trade.
            </p>
            <p className="text-gray-600 dark:text-muted-foreground mb-6">
              I hold a German disability ID (GdB 50) and value inclusive environments where I can grow and contribute 
              effectively. Currently looking for a junior level position as a Flutter app developer, 
              I bring a unique international perspective to mobile development.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border">
                <div className="text-2xl font-bold text-green-600 dark:text-green-500">1+</div>
                <div className="text-sm text-gray-600 dark:text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border">
                <div className="text-2xl font-bold text-green-600 dark:text-green-500">3+</div>
                <div className="text-sm text-gray-600 dark:text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-card rounded-lg p-8 border border-gray-200 dark:border-border">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-600 dark:bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm mb-1">M.Sc. Applied Computer Science</p>
                  <p className="text-gray-500 dark:text-muted-foreground text-xs">Hochschule Schmalkalden, Germany (2024 - Present)</p>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm mb-1">National Engineering Degree - Software Engineering</p>
                  <p className="text-gray-500 dark:text-muted-foreground text-xs">TEK-UP University, Tunisia (2021 - Present)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-600 dark:bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Professional Experience</h4>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm mb-1">Flutter Developer Intern - Welyne</p>
                  <p className="text-gray-500 dark:text-muted-foreground text-xs">Tunis, Tunisia (07/2023 - 08/2023)</p>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm mb-1">Full Stack Mobile Developer Intern - Axia Solutions</p>
                  <p className="text-gray-500 dark:text-muted-foreground text-xs">Sousse, Tunisia (06/2022 - 07/2022)</p>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm mb-1">Full Stack Developer Intern - ISITCOM</p>
                  <p className="text-gray-500 dark:text-muted-foreground text-xs">Sousse, Tunisia (04/2021 - 09/2021)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-600 dark:bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Key Skills</h4>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm">Flutter, Dart, Firebase, REST APIs, Mobile App Development</p>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm">Clean Architecture, MVVM, Agile/Scrum, Git Workflow</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-600 dark:bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Languages</h4>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm">Arabic (Native), English (Fluent), French (Intermediate), German (Basic)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 