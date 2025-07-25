export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Dart', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML5/CSS3', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'Python', level: 60 },
        { name: 'Swift', level: 50 },
        { name: 'Kotlin', level: 50 },
        { name: 'PHP', level: 50 },
        { name: 'C#', level: 50 },
      ]
    },
    {
      category: 'Frameworks & Platforms',
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'NestJS', level: 75 },
        { name: 'Express.js', level: 75 },
        { name: 'Spring Boot', level: 60 },
        { name: 'React', level: 60 },
        { name: 'Angular', level: 60 },
        { name: 'Ionic', level: 60 },
        { name: 'Android', level: 60 },
        { name: 'iOS', level: 60 },
        { name: 'Symfony', level: 60 },
      ]
    },
    {
      category: 'Databases & Cloud',
      skills: [
        { name: 'Firebase', level: 90 },
        { name: 'Firestore', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 75 },
        { name: 'SQLite', level: 70 },
        { name: 'AWS', level: 70 },
        { name: 'Hive', level: 65 },
        { name: 'Spring Data JPA', level: 65 },
        { name: 'Hibernate', level: 65 },
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Android Studio', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'Figma', level: 80 },
        { name: 'Xcode', level: 75 },
        { name: 'IntelliJ IDEA', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Jira', level: 70 },
        { name: 'GitHub Actions', level: 65 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-background">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
            Experienced Mobile Developer with over a year in mobile app development, specializing in Flutter and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-gray-50 dark:bg-card rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-foreground">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Development Practices & Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Clean Architecture',
              'MVVM/MVC',
              'SOLID Principles',
              'Agile/Scrum',
              'Test-Driven Development',
              'Problem Solving',
              'Team Collaboration',
              'Communication',
              'Time Management',
              'Adaptability',
              'Attention to Detail',
              'Git Workflow'
            ].map((skill) => (
              <div key={skill} className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
                <span className="text-green-800 dark:text-green-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { language: 'Arabic', level: 'Native' },
              { language: 'English', level: 'Fluent' },
              { language: 'French', level: 'Intermediate' },
              { language: 'German', level: 'Basic (Improving)' }
            ].map((lang) => (
              <div key={lang.language} className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 text-center">
                <div className="text-emerald-800 dark:text-emerald-300 font-medium">{lang.language}</div>
                <div className="text-emerald-600 dark:text-emerald-400 text-sm">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Achievements Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6">Experience & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg p-6">
              <div className="text-3xl mb-2">📱</div>
              <h4 className="font-semibold mb-2">Mobile Apps Developed</h4>
              <p className="text-gray-600 dark:text-muted-foreground text-sm">AdopteMe, Kwik-Kik, Axia Trade</p>
            </div>
            <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg p-6">
              <div className="text-3xl mb-2">🎓</div>
              <h4 className="font-semibold mb-2">Education</h4>
              <p className="text-gray-600 dark:text-muted-foreground text-sm">M.Sc. Applied Computer Science</p>
            </div>
            <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg p-6">
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="font-semibold mb-2">International Experience</h4>
              <p className="text-gray-600 dark:text-muted-foreground text-sm">Exchange Student in Germany</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 