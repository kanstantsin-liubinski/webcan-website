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
          <img className="nav-logo" src="/logo.png" alt="WEB CAN Logo" />
          <div className="nav-links">
            <a href="#niches">Направления</a>
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
                <div className="stat-value">15+</div>
                <div className="stat-label">Реализовано проектов</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">90%</div>
                <div className="stat-label">Клиентов остаются с нами</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">5</div>
                <div className="stat-label">Лет профессионального опыта</div>
              </div>
            </div>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' })}>
                Получить консультацию
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('niches').scrollIntoView({ behavior: 'smooth' })}>
                Наши направления ↓
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

      {/* Niches */}
      <section id="niches" className="niches">
        <div className="container">
          <div className="section-label">Направления</div>
          <h2>Сайты для авто-бизнеса</h2>
          <p className="section-subtitle">Знаем специфику каждой ниши — делаем сайты, которые приводят клиентов</p>
        </div>

        <div className="niches-grid">
          {[
            { title: 'Автомойки', desc: 'Онлайн-запись и акции', img: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80' },
            { title: 'Детейлинг', desc: 'Портфолио работ и услуги', img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80' },
            { title: 'Автосервис', desc: 'Доверие с первого клика', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80' },
            { title: 'Пригон авто', desc: 'Каталог и калькулятор', img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80' },
            { title: 'Шиномонтаж', desc: 'Сезонная запись и бонусы', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80' },
            { title: 'Автозапчасти', desc: 'Каталог и подбор по авто', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80' },
            { title: 'Тонировка', desc: 'Портфолио и прайс', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80' },
            { title: 'Автопрокат', desc: 'Бронирование и автопарк', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80' },
          ].map((niche) => (
            <div className="niche-card" key={niche.title}>
              <div className="niche-bg" style={{ backgroundImage: `url(${niche.img})` }}></div>
              <div className="niche-overlay"></div>
              <div className="niche-content">
                <h3>{niche.title}</h3>
                <p>{niche.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-label">Отзывы</div>
          <h2>Что говорят клиенты</h2>
          <p className="section-subtitle">Реальные истории успеха реальных компаний</p>
        </div>

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
            <h4>Направления</h4>
            <ul>
              <li><a href="#niches">Автомойки</a></li>
              <li><a href="#niches">Детейлинг</a></li>
              <li><a href="#niches">Автосервис</a></li>
              <li><a href="#niches">Пригон авто</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Компания</h4>
            <ul>
              <li><a href="#niches">Направления</a></li>
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
