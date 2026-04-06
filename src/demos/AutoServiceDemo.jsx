import { useState } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'
import './autoservice.css'

const servicesTabs = {
  diag: { title: 'Диагностика', items: ['Компьютерная диагностика — 45 BYN', 'Диагностика ходовой — 30 BYN', 'Проверка перед покупкой — 100 BYN', 'Считывание ошибок — 15 BYN'] },
  engine: { title: 'Двигатель', items: ['Замена масла — от 60 BYN', 'Замена ремня ГРМ — от 240 BYN', 'Ремонт турбины — от 450 BYN', 'Замена прокладки ГБЦ — от 350 BYN'] },
  suspension: { title: 'Ходовая', items: ['Замена амортизаторов — от 90 BYN', 'Замена сайлентблоков — от 75 BYN', 'Развал-схождение — 60 BYN', 'Замена ступичного подшипника — от 120 BYN'] },
  brakes: { title: 'Тормоза', items: ['Замена колодок — от 60 BYN', 'Замена дисков — от 120 BYN', 'Прокачка тормозов — 45 BYN', 'Замена суппорта — от 150 BYN'] },
}

const reviews = [
  { stars: 5, text: 'Приехал на диагностику — нашли проблему за 20 минут. Ремонт сделали в тот же день. Честные цены, рекомендую!', author: 'Алексей М.', car: 'Toyota Camry 2019' },
  { stars: 5, text: 'Менял ремень ГРМ. Всё сделали качественно, дали гарантию на год. Видеоотчёт прислали в WhatsApp — очень удобно.', author: 'Дмитрий К.', car: 'Volkswagen Tiguan 2020' },
  { stars: 5, text: 'Обслуживаю машину только здесь уже 3 года. Мастера знают своё дело, запчасти всегда оригинальные.', author: 'Сергей В.', car: 'BMW X3 2018' },
  { stars: 4, text: 'Делали развал-схождение и замену колодок. Всё чётко по срокам. Единственное — пришлось подождать запчасти 1 день.', author: 'Ирина Л.', car: 'Kia Sportage 2021' },
]

const advantages = [
  { icon: '📹', title: 'Видеоотчёт', desc: 'Снимаем процесс ремонта на видео и отправляем вам' },
  { icon: '💰', title: 'Прозрачные цены', desc: 'Фиксированная стоимость. Никаких скрытых доплат' },
  { icon: '🛡️', title: 'Гарантия 1 год', desc: 'Даём гарантию на все выполненные работы' },
  { icon: '🚗', title: 'Подменное авто', desc: 'Предоставляем подменный автомобиль на время ремонта' },
  { icon: '⚙️', title: 'Оригинальные запчасти', desc: 'Работаем только с проверенными поставщиками' },
  { icon: '⏱️', title: 'Точные сроки', desc: 'Называем сроки и соблюдаем их. Без задержек' },
]

export default function AutoServiceDemo() {
  const [activeTab, setActiveTab] = useState('diag')

  return (
    <div className="as">
      <Link to="/" className="demo-back">← WEB CAN</Link>
      <div className="demo-banner">✨ Это демо-сайт — пример работы WEB CAN для автосервисов<Link to="/#niches">Заказать такой же</Link></div>

      <nav className="as-nav">
        <div className="as-nav-inner">
          <div className="as-nav-brand">🔧 АвтоМастер PRO</div>
          <div className="as-nav-links">
            <a href="#services">Услуги</a>
            <a href="#advantages">Преимущества</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="as-hero">
        <div className="as-hero-content">
          <h1>Ремонт авто<br/>без сюрпризов</h1>
          <p>Профессиональный автосервис с гарантией. Диагностика, ремонт двигателя, ходовой и тормозной системы. Честные цены и точные сроки.</p>
          <div className="as-hero-btns">
            <a href="#contact" className="as-btn as-btn-primary">Записаться на ремонт</a>
            <a href="#services" className="as-btn as-btn-outline">Смотреть цены</a>
          </div>
        </div>
      </section>

      <div className="as-stats">
        <div className="as-stat"><div className="as-stat-val">8 лет</div><div className="as-stat-lbl">На рынке</div></div>
        <div className="as-stat"><div className="as-stat-val">15K+</div><div className="as-stat-lbl">Авто обслужено</div></div>
        <div className="as-stat"><div className="as-stat-val">12</div><div className="as-stat-lbl">Мастеров</div></div>
        <div className="as-stat"><div className="as-stat-val">1 год</div><div className="as-stat-lbl">Гарантия</div></div>
      </div>

      <div className="as-hazard"></div>

      <section id="services" className="as-section">
        <div className="as-section-label">Наши услуги</div>
        <h2>Услуги и цены</h2>
        <p>Выберите категорию, чтобы посмотреть стоимость работ</p>

        <div className="as-tabs-nav">
          {Object.keys(servicesTabs).map(key => (
            <button
              key={key}
              className={`as-tab-btn${activeTab === key ? ' active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {servicesTabs[key].title}
            </button>
          ))}
        </div>

        <div className="as-tab-content">
          <div className="as-tab-title">{servicesTabs[activeTab].title}</div>
          <ul className="as-service-list">
            {servicesTabs[activeTab].items.map((item, i) => {
              const parts = item.split(' — ')
              return (
                <li key={i} className="as-service-item">
                  <span className="as-service-name">{parts[0]}</span>
                  <span className="as-service-price">{parts[1]}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section id="advantages" className="as-section">
        <div className="as-section-label">Почему мы</div>
        <h2>Наши преимущества</h2>
        <p>Работаем на совесть и дорожим каждым клиентом</p>

        <div className="as-advantages">
          {advantages.map((a, i) => (
            <div key={i} className="as-advantage">
              <div className="as-advantage-icon">{a.icon}</div>
              <div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="as-hazard"></div>

      <section id="reviews" className="as-section">
        <div className="as-section-label">Отзывы клиентов</div>
        <h2>Что говорят о нас</h2>
        <p>Реальные отзывы наших клиентов</p>

        <div className="as-reviews">
          {reviews.map((r, i) => (
            <div key={i} className="as-review">
              <div className="as-review-stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
              <div className="as-review-text">«{r.text}»</div>
              <div className="as-review-author">{r.author}</div>
              <div className="as-review-car">{r.car}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="as-section">
        <div className="as-section-label">Записаться</div>
        <h2>Оставить заявку</h2>
        <p>Заполните форму и мы перезвоним в течение 15 минут</p>

        <div className="as-form-section">
          <form onSubmit={e => e.preventDefault()}>
            <div className="as-form-grid">
              <div className="as-form-group">
                <label>Имя</label>
                <input type="text" placeholder="Ваше имя" />
              </div>
              <div className="as-form-group">
                <label>Телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="as-form-group full">
                <label>Марка / модель</label>
                <input type="text" placeholder="Например: Toyota Camry 2019" />
              </div>
              <div className="as-form-group full">
                <label>Опишите проблему</label>
                <textarea placeholder="Расскажите, что беспокоит — поможем разобраться"></textarea>
              </div>
            </div>
            <button type="submit" className="as-btn as-btn-primary as-form-submit">Отправить заявку</button>
          </form>
        </div>
      </section>

      <div className="as-section" style={{ paddingTop: 0, paddingBottom: 0, overflow: 'hidden' }}>
        <div className="as-cta">
          <div className="as-cta-inner">
            <h2>Бесплатная диагностика при ремонте</h2>
            <p>Запишитесь на ремонт и получите полную диагностику вашего авто бесплатно</p>
            <a href="#contact" className="as-btn">Записаться сейчас</a>
          </div>
        </div>
      </div>

      <div className="as-hazard"></div>

      <footer className="as-footer">
        © 2026 АвтоМастер PRO — Демо-сайт от WEB CAN
      </footer>
    </div>
  )
}
