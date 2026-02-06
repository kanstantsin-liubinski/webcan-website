import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleContact = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">🚀 WEB CAN</div>
          <div className="nav-links">
            <a href="#services">Услуги</a>
            <a href="#process">Процесс</a>
            <a href="#projects">Проекты</a>
            <a href="#contacts">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Создаём
              <br/>
              <span className="gradient">WEB решения</span>,
              <br />
              которые работают
            </h1>
            <p className="hero-subtitle">
              WEB CAN — веб-агентство полного цикла. Дизайн, разработка, запуск и поддержка ваших проектов с нулевым риском.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">150+</div>
                <div className="stat-label">Реализовано проектов</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">98%</div>
                <div className="stat-label">Клиентов остаются с нами</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">7</div>
                <div className="stat-label">Лет профессионального опыта</div>
              </div>
            </div>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' })}>
                Получить консультацию
              </button>
              <button className="btn btn-secondary">
                Посмотреть портфолио ↓
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-editor editor-1">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-body">
                <div className="code-line"><span className="keyword">const</span> solution = <span className="string">"success"</span>;</div>
                <div className="code-line"><span className="keyword">return</span> &lt;Component /&gt;;</div>
              </div>
            </div>

            <div className="code-editor editor-2">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-body">
                <div className="code-line"><span className="keyword">async</span> function deploy() &#123;</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;<span className="keyword">await</span> build();</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="string">"live"</span>;</div>
                <div className="code-line">&#125;</div>
              </div>
            </div>

            <div className="code-editor editor-3">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-body">
                <div className="code-line">&lt;<span className="keyword">App</span>&gt;</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;&lt;<span className="keyword">Header</span> /&gt;</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;&lt;<span className="keyword">Content</span> /&gt;</div>
              </div>
            </div>

            <div className="code-editor editor-4">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-body">
                <div className="code-line"><span className="keyword">npm</span> run deploy</div>
                <div className="code-line"><span className="string">✓ Build success</span></div>
                <div className="code-line"><span className="string">✓ Live now</span></div>
              </div>
            </div>

            <div className="code-editor editor-5">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-body">
                <div className="code-line"><span className="keyword">const</span>&nbsp;webCan&nbsp;=&nbsp;&#123;</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;quality:&nbsp;<span className="string">"premium"</span>,</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;speed:&nbsp;<span className="string">"lightning"</span></div>
                <div className="code-line">&#125;</div>
              </div>
            </div>

            <div className="code-editor editor-6">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-body">
                <div className="code-line"><span className="keyword">const</span>&nbsp;result&nbsp;=&nbsp;&#123;</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;api:&nbsp;<span className="string">"ready"</span></div>
                <div className="code-line">&#125;</div>
              </div>
            </div>

            <div className="code-editor editor-7">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-body">
                <div className="code-line"><span className="keyword">export</span>&nbsp;default App</div>
                <div className="code-line"><span className="string">✓&nbsp;Connected</span></div>
                <div className="code-line"><span className="string">✓&nbsp;Ready</span></div>
              </div>
            </div>

            <div className="code-editor editor-8">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-body">
                <div className="code-line"><span className="keyword">const</span>&nbsp;performance&nbsp;=&nbsp;&#123;</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;score:&nbsp;<span className="string">"100%"</span></div>
                <div className="code-line">&#125;</div>
              </div>
            </div>

            <div className="code-editor editor-9">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-body">
                <div className="code-line"><span className="keyword">import</span>&nbsp;&#123;&nbsp;create&nbsp;&#125;</div>
                <div className="code-line">create(<span className="string">"success"</span>);</div>
              </div>
            </div>

            <div className="code-editor editor-10">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-body">
                <div className="code-line"><span className="keyword">class</span>&nbsp;Handler&nbsp;&#123;</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;init();&nbsp;</div>
                <div className="code-line">&#125;</div>
              </div>
            </div>

            <div className="code-editor editor-11">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-body">
                <div className="code-line"><span className="keyword">const</span>&nbsp;api&nbsp;=&nbsp;create();</div>
                <div className="code-line">api.connect();</div>
                <div className="code-line">api.ready();</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="section-label">Наши услуги</div>
        <h2>Полный цикл веб-разработки</h2>
        <p className="section-subtitle">От идеи до запуска — мы ведём вас на каждом этапе</p>

        <div className="services-grid">
          <div className="service-box gradient-purple">
            <div className="service-icon">🎨</div>
            <h3>UI/UX Дизайн</h3>
            <p>Создаём интерфейсы, которые не просто красивы — они работают. Каждый пиксель продуман для максимального удобства пользователя.</p>
            <ul className="service-features">
              <li>Figma макеты</li>
              <li>Прототипирование</li>
              <li>Дизайн-система</li>
              <li>User research</li>
            </ul>
          </div>

          <div className="service-box gradient-pink">
            <div className="service-icon">⚛️</div>
            <h3>Frontend</h3>
            <p>Быстрые, отзывчивые приложения на современных фреймворках. React, Vue, TypeScript — мы работаем с лучшими инструментами.</p>
            <ul className="service-features">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Responsive Design</li>
              <li>Web Animation</li>
            </ul>
          </div>

          <div className="service-box gradient-blue">
            <div className="service-icon">🔧</div>
            <h3>Backend</h3>
            <p>Надёжная серверная часть на Node.js, Python, Go. Масштабируемая архитектура, защита данных, оптимальная производительность.</p>
            <ul className="service-features">
              <li>Node.js / Express</li>
              <li>PostgreSQL / MongoDB</li>
              <li>REST API / GraphQL</li>
              <li>Микросервисы</li>
            </ul>
          </div>

          <div className="service-box gradient-orange">
            <div className="service-icon">📱</div>
            <h3>Мобильные приложения</h3>
            <p>Кроссплатформенные приложения для iOS и Android. React Native для быстрого развёртывания, нативный код для максимальной производительности.</p>
            <ul className="service-features">
              <li>React Native</li>
              <li>Native iOS/Android</li>
              <li>App Store / Play Market</li>
              <li>Push-уведомления</li>
            </ul>
          </div>

          <div className="service-box gradient-green">
            <div className="service-icon">🚀</div>
            <h3>Деплой & DevOps</h3>
            <p>Безопасный запуск в production. Docker, Kubernetes, CI/CD пайплайны. AWS, Google Cloud, собственные серверы — где угодно.</p>
            <ul className="service-features">
              <li>Docker & Kubernetes</li>
              <li>CI/CD автоматизация</li>
              <li>Cloud сервисы</li>
              <li>Мониторинг & Логирование</li>
            </ul>
          </div>

          <div className="service-box gradient-purple-alt">
            <div className="service-icon">🔍</div>
            <h3>SEO & Аналитика</h3>
            <p>Ваш сайт будет виден в Google. Полная оптимизация, структурированные данные, аналитика, отслеживание конверсий.</p>
            <ul className="service-features">
              <li>SEO оптимизация</li>
              <li>Google Analytics</li>
              <li>Метрики производительности</li>
              <li>A/B тестирование</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="process">
        <div className="section-label">Наш процесс</div>
        <h2>Как мы работаем</h2>
        <p className="section-subtitle">Проверенная методология для гарантированного успеха</p>

        <div className="process-timeline">
          <div className="timeline-item">
            <div className="timeline-number">01</div>
            <div className="timeline-content">
              <h3>Аналитика & Планирование</h3>
              <p>Изучаем бизнес, конкурентов, целевую аудиторию. Ставим чёткие метрики успеха и сроки.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">02</div>
            <div className="timeline-content">
              <h3>Дизайн</h3>
              <p>Создаём макеты, прототипы, тестируем с пользователями. Согласуем каждый элемент.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">03</div>
            <div className="timeline-content">
              <h3>Разработка</h3>
              <p>Пишем чистый код, следуем best practices. Регулярный код ревью и тестирование.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">04</div>
            <div className="timeline-content">
              <h3>QA & Тестирование</h3>
              <p>Полное функциональное тестирование, проверка на всех браузерах и устройствах.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">05</div>
            <div className="timeline-content">
              <h3>Деплой</h3>
              <p>Запуск на боевой сервер, настройка CDN, SSL. Мониторинг и резервные копии.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">06</div>
            <div className="timeline-content">
              <h3>Поддержка</h3>
              <p>24/7 техподдержка, обновления, исправление багов, развитие функционала.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <div className="section-label">Портфолио</div>
        <h2>Наши лучшие работы</h2>
        <p className="section-subtitle">Проекты, которыми мы гордимся</p>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}></div>
            <div className="project-info">
              <h3>E-Commerce Platform</h3>
              <p>Полнофункциональный интернет-магазин с интеграцией платёжек, рекомендациями ML и админ-панелью.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}></div>
            <div className="project-info">
              <h3>SaaS Dashboard</h3>
              <p>Облачное приложение для управления проектами с real-time коллаборацией и расширенной аналитикой.</p>
              <div className="project-tech">
                <span>Next.js</span>
                <span>Firebase</span>
                <span>Tailwind</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}></div>
            <div className="project-info">
              <h3>Корпоративный портал</h3>
              <p>Сайт крупной компании с CMS, персонализацией контента, интеграцией CRM и SEO оптимизацией.</p>
              <div className="project-tech">
                <span>Vue.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}></div>
            <div className="project-info">
              <h3>Мобильное приложение</h3>
              <p>React Native приложение для доставки с геолокацией, рейтингом и встроенным мессенджером.</p>
              <div className="project-tech">
                <span>React Native</span>
                <span>Google Maps</span>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack">
        <div className="section-label">Технологии</div>
        <h2>Современный стек</h2>
        <p className="section-subtitle">Мы используем лучшие инструменты индустрии</p>

        <div className="tech-grid">
          <div className="tech-group">
            <h4>Frontend</h4>
            <div className="tech-badges">
              <span className="badge">React</span>
              <span className="badge">Next.js</span>
              <span className="badge">Vue.js</span>
              <span className="badge">TypeScript</span>
              <span className="badge">Tailwind CSS</span>
              <span className="badge">Vite</span>
            </div>
          </div>

          <div className="tech-group">
            <h4>Backend</h4>
            <div className="tech-badges">
              <span className="badge">Node.js</span>
              <span className="badge">Express</span>
              <span className="badge">Python</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">MongoDB</span>
              <span className="badge">Redis</span>
            </div>
          </div>

          <div className="tech-group">
            <h4>DevOps</h4>
            <div className="tech-badges">
              <span className="badge">Docker</span>
              <span className="badge">Kubernetes</span>
              <span className="badge">AWS</span>
              <span className="badge">GitHub Actions</span>
              <span className="badge">Linux</span>
              <span className="badge">Nginx</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-label">Отзывы</div>
        <h2>Что говорят клиенты</h2>
        <p className="section-subtitle">Реальные истории успеха реальных компаний</p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Команда WEB CAN превосходит ожидания. Профессионально, вовремя, качественно. Рекомендуем!"</p>
            <div className="author">
              <div className="avatar">👨‍💼</div>
              <div>
                <div className="name">Александр Петров</div>
                <div className="company">CEO, TechStart</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Разработали приложение за 2 месяца. Всё работает идеально, производительность отличная. Спасибо!"</p>
            <div className="author">
              <div className="avatar">👩‍💼</div>
              <div>
                <div className="name">Мария Сидорова</div>
                <div className="company">Founder, EcoShop</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Лучшая инвестиция в нашу компанию. Сайт генерирует в 3 раза больше клиентов."</p>
            <div className="author">
              <div className="avatar">👨‍🎨</div>
              <div>
                <div className="name">Иван Морозов</div>
                <div className="company">Marketing Director, RetailCo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacts" className="cta">
        <div className="cta-bg">
          <div className="blob blob-cta-1"></div>
          <div className="blob blob-cta-2"></div>
        </div>
        
        <div className="cta-content">
          <h2>Готовы начать проект?</h2>
          <p>Оставьте email и мы свяжемся с вами в течение 2 часов</p>

          {submitted ? (
            <div className="success-message">
              ✓ Спасибо! Мы вскоре вам напишем
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleContact}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Отправить
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <h4>WEB CAN</h4>
            <p>Веб-агентство полного цикла. Создаём цифровые решения, которые работают.</p>
          </div>
          <div className="footer-col">
            <h4>Услуги</h4>
            <ul>
              <li><a href="#services">Дизайн</a></li>
              <li><a href="#services">Разработка</a></li>
              <li><a href="#services">DevOps</a></li>
              <li><a href="#services">Поддержка</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Компания</h4>
            <ul>
              <li><a href="#projects">Портфолио</a></li>
              <li><a href="#contacts">Контакты</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Блог</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Соцсети</h4>
            <div className="social-links">
              <a href="#">GitHub</a>
              <a href="#">Telegram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 WEB CAN. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
