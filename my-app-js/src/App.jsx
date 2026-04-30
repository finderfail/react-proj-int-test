import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Card } from './assets/components/cards.jsx'
import styles from './assets/components/cards.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.container}>
                  <header className={styles.header}>
                      <nav className={styles.nav}>
                          <ul className={styles.menuButtons}>
                              <li className={`${styles.menuButton} ${styles.firstLetter}`}>
                                  <h1><strong>Портал Разработчика</strong></h1>
                              </li>
                              <li className={styles.menuButton}>
                                  <button type="button">Мое обучение</button>
                              </li>
                              <li className={styles.menuButton}>
                                  <button type="button">Задачи</button>
                              </li>
                          </ul>
                      </nav>
                  </header>
      
                  <main className={styles.main}>
                      <section className={styles.section}>
                          <p className={styles.headline}>Рекомендуемые темы</p>
                          <div className={styles.whiteBlock}>
                              <div className={styles.circle}>
                                  <svg width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M85 8C101.261 8 117.104 13.1478 130.259 22.7057C143.415 32.2636 153.206 45.7408 158.231 61.2057C163.256 76.6706 163.256 93.3294 158.231 108.794C153.206 124.259 143.415 137.736 130.259 147.294C117.104 156.852 101.261 162 85 162C68.7392 162 52.8958 156.852 39.7405 147.294C26.5853 137.736 16.7935 124.259 11.7686 108.794C6.74378 93.3294 6.74378 76.6706 11.7687 61.2057"
                                          stroke="#24C38E"
                                          strokeWidth="16"
                                      />
                                  </svg>
                                  <div className={styles.textInsideBlock}>
                                      <p>8/10</p>
                                      <p>заданий</p>
                                  </div>
                              </div>
                              <div className={styles.mainBlock}>
                                  <h2>Начало работы</h2>
                                  <p className={styles.smallText}>Для новичка * Основы работы</p>
                                  <p className={styles.description}>Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете</p>
                                  <button className={styles.primaryButton} type="button">Продолжить тему</button>
                              </div>
                          </div>
                      </section>
      
                      <section className={styles.section}>
                          <div className={styles.secondBlock}>
                              <button className={styles.secondaryButton} type="button">Показать еще</button>
                          </div>
                      </section>
      
                      <section className={styles.section}>
                          <div className={styles.secondBlocks}>
                              <div className={styles.sectionHeader}>
                                  <h2>Путь FrontEnd Developer</h2>
                                  <button className={styles.lightButton} type="button">Скрыть пройденные</button>
                              </div>
      
                              <div className={styles.cardGrid}>
                                  <Card title="Добро пожаловать!" categories={["Для новичка", "Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                                  <Card title="Начало работы" categories={["Для новичка", "Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                                  <Card title="Введение в рабочую среду" categories={["Для новичка", "Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                                  
                              </div>
                          </div>
                      </section>
      
                      <section className={styles.section}>
                          <p className={styles.headline}>Каталог тем</p>
      
                          <div className={styles.filterRow}>
                              <button className={styles.littralySelectedButton} type="button">Все</button>
                              <button className={styles.notSelectedButton} type="button">Рабочая среда</button>
                              <button className={styles.notSelectedButton} type="button">Библиотеки</button>
                              <button className={styles.notSelectedButton} type="button">Пройденые</button>
                              <button className={styles.notSelectedButton} type="button">не пройденые</button>
                          </div>
      
                          <div className={styles.notWhiteBlock}>
                              <Card title="Начало работы" categories={["Для новичка", "Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                              <Card title="Работа с библиотеками GPN" categories={["Профессионалу", "Библиотеки"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                              <Card title="Введение в рабочую среду" categories={["Профессионалу", "Библиотеки"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                              <Card title="Начало работы" categories={["Для новичка", "Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                              <Card title="Работа с библиотеками GPN" categories={["Профессионалу", "Библиотеки"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"  />
                              <Card title="Введение в рабочую среду" categories={["Профессионалу", "Библиотеки"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"  />
                          </div>
                      </section>
                  </main>
              </div>
    </>
  )
}

export default App
