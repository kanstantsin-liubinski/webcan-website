import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'
import './autoparts.css'

const allParts = [
  { id: 1, name: 'Колодки тормозные передние', brand: 'Brembo', car: 'Toyota Camry', price: 130, cat: 'Тормоза', inStock: true },
  { id: 2, name: 'Фильтр масляный', brand: 'Mann', car: 'BMW 3 Series', price: 25, cat: 'Фильтры', inStock: true },
  { id: 3, name: 'Амортизатор передний', brand: 'KYB', car: 'Hyundai Tucson', price: 195, cat: 'Подвеска', inStock: true },
  { id: 4, name: 'Свечи зажигания (комплект)', brand: 'NGK', car: 'Volkswagen Tiguan', price: 95, cat: 'Двигатель', inStock: true },
  { id: 5, name: 'Ремень ГРМ + ролики', brand: 'Gates', car: 'Kia Sportage', price: 270, cat: 'Двигатель', inStock: false },
  { id: 6, name: 'Радиатор охлаждения', brand: 'Nissens', car: 'Mercedes C-Class', price: 380, cat: 'Охлаждение', inStock: true },
  { id: 7, name: 'Стойка стабилизатора', brand: 'Lemforder', car: 'Audi A4', price: 85, cat: 'Подвеска', inStock: true },
  { id: 8, name: 'Комплект сцепления', brand: 'LUK', car: 'Toyota Camry', price: 450, cat: 'Трансмиссия', inStock: false },
  { id: 9, name: 'Фильтр воздушный', brand: 'Mahle', car: 'BMW 3 Series', price: 35, cat: 'Фильтры', inStock: true },
]

const categories = ['Все', 'Тормоза', 'Фильтры', 'Подвеска', 'Двигатель', 'Охлаждение', 'Трансмиссия']

function fmt(n) { return new Intl.NumberFormat('ru-RU').format(n) }

const advantages = [
  { icon: '🔍', name: 'Подбор по VIN', desc: 'Точный подбор запчастей по VIN-коду вашего автомобиля' },
  { icon: '🚚', name: 'Быстрая доставка', desc: 'Отправляем в день заказа, доставка 1–2 рабочих дня' },
  { icon: '↩️', name: 'Возврат 12 мес', desc: 'Гарантия возврата в течение 12 месяцев с момента покупки' },
  { icon: '💰', name: 'Честные цены', desc: 'Прямые поставки от производителей, без накруток' },
]

export default function AutoPartsDemo() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('Все')
  const [cart, setCart] = useState([])
  const [vin, setVin] = useState('')

  const filtered = useMemo(() => {
    return allParts.filter(p => {
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.car.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase())
      const matchCat = cat === 'Все' || p.cat === cat
      return matchSearch && matchCat
    })
  }, [search, cat])

  const addToCart = (part) => {
    if (!cart.find(c => c.id === part.id)) setCart([...cart, part])
  }

  const cartTotal = cart.reduce((sum, p) => sum + p.price, 0)

  return (
    <div className="ap">
      <Link to="/" className="demo-back">← WEB CAN</Link>

      {/* NAV */}
      <nav className="ap-nav">
        <div className="ap-nav-brand">⚙️ АвтоДетали</div>
        <button className="ap-nav-cart">
          🛒 Корзина
          {cart.length > 0 && (
            <span className="ap-cart-badge ap-pulse" key={cart.length}>{cart.length}</span>
          )}
          {cartTotal > 0 && <span> — {fmt(cartTotal)} BYN</span>}
        </button>
      </nav>

      {/* HERO */}
      <section className="ap-hero">
        <h1>Запчасти для вашего авто</h1>
        <p className="ap-hero-sub">Оригинальные и аналоговые запчасти с гарантией качества</p>
        <div className="ap-search-box">
          <span className="ap-search-icon">🔍</span>
          <input
            className="ap-search-input"
            type="text"
            placeholder="Поиск по названию, бренду или автомобилю..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="ap-cats">
          {categories.map(c => (
            <button
              key={c}
              className={`ap-cat-chip${cat === c ? ' active' : ''}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="ap-stats">
        <div className="ap-stat">
          <div className="ap-stat-num">50K+</div>
          <div className="ap-stat-label">позиций в каталоге</div>
        </div>
        <div className="ap-stat">
          <div className="ap-stat-num">1–2 дня</div>
          <div className="ap-stat-label">доставка по Беларуси</div>
        </div>
        <div className="ap-stat">
          <div className="ap-stat-num">100%</div>
          <div className="ap-stat-label">гарантия качества</div>
        </div>
        <div className="ap-stat">
          <div className="ap-stat-num">12 мес</div>
          <div className="ap-stat-label">возврат и обмен</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="ap-products">
        <h2 className="ap-products-title">Каталог запчастей</h2>
        <p className="ap-products-count">Найдено: {filtered.length} {filtered.length === 1 ? 'товар' : 'товаров'}</p>
        {filtered.length === 0 ? (
          <div className="ap-empty">Ничего не найдено. Попробуйте изменить запрос или категорию.</div>
        ) : (
          <div className="ap-table-wrap">
            <table className="ap-table">
              <thead>
                <tr>
                  <th>Название</th>
                  <th>Бренд</th>
                  <th>Автомобиль</th>
                  <th>Категория</th>
                  <th>Наличие</th>
                  <th>Цена</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(part => {
                  const inCart = cart.find(c => c.id === part.id)
                  return (
                    <tr key={part.id}>
                      <td className="ap-td-name">{part.name}</td>
                      <td><span className="ap-brand-chip">{part.brand}</span></td>
                      <td className="ap-td-car">{part.car}</td>
                      <td className="ap-td-cat">{part.cat}</td>
                      <td>
                        <span className={`ap-stock ${part.inStock ? 'in' : 'order'}`}>
                          {part.inStock ? 'В наличии' : 'Под заказ'}
                        </span>
                      </td>
                      <td className="ap-td-price">{fmt(part.price)} BYN</td>
                      <td>
                        <button
                          className={`ap-add-btn${inCart ? ' added' : ''}`}
                          onClick={() => addToCart(part)}
                          disabled={!!inCart}
                        >
                          {inCart ? '✓' : 'В корзину'}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ADVANTAGES */}
      <section className="ap-advantages">
        <h2 className="ap-advantages-title">Почему выбирают нас</h2>
        <div className="ap-adv-grid">
          {advantages.map((a, i) => (
            <div className="ap-adv-card" key={i}>
              <div className="ap-adv-icon">{a.icon}</div>
              <div className="ap-adv-name">{a.name}</div>
              <div className="ap-adv-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ap-cta">
        <h2>Не нашли нужную запчасть?</h2>
        <p>Введите VIN-код — мы подберём деталь и свяжемся с вами</p>
        <div className="ap-cta-form">
          <input
            className="ap-cta-input"
            type="text"
            placeholder="Введите VIN-код автомобиля"
            value={vin}
            onChange={e => setVin(e.target.value)}
          />
          <button className="ap-cta-btn">Подобрать</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ap-footer">
        © 2026 АвтоДетали — Демо-сайт от WEB CAN
      </footer>

      {/* BANNER */}
      <div className="demo-banner">
        ✨ Это демо-сайт — пример работы WEB CAN для магазинов автозапчастей
        <Link to="/#niches">Заказать такой же</Link>
      </div>
    </div>
  )
}
