import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import { Card } from './components/Card/Card.jsx'
import style from './App.module.css'
import { Header } from './components/Header/Header.jsx'
import { ProgressBar } from './components/ProgressBar/ProgressBar.jsx'
import { MainBlock } from './components/MainBlock/MainBlock.jsx'
import { Row } from './components/Row/Row.jsx'
import { Circle } from './components/Circle/Circle.jsx'




function App() {
  return (
    <>
      <div className={style.container}>
                  <Header title="Портал разработчика" learn="Мое обучение" task="Задачи"  />
                    <main className={style.main}>
                      <section className={style.section}>
                          <p className={style.headline}>Рекомендуемые темы</p>
                          <div className={style.whiteBlock}>
                              <div className={style.circle}>
                                  <Circle />
                                  <ProgressBar />
                              </div>
                              <MainBlock title="Начало работы" categories={["Для новичка", " Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" prButton="Продолжить тему"  />
      
                          </div>
                      </section>
      
                      <section className={style.section}>
                          <div className={style.secondBlock}>
                              <button className={style.secondaryButton} type="button">Показать еще</button>
                          </div>
                      </section>
      
                      <section className={style.section}>
                          <div className={style.secondBlocks}>
                              <div className={style.sectionHeader}>
                                  <h2>Путь FrontEnd Developer</h2>
                                  <button className={style.lightButton} type="button">Скрыть пройденные</button>
                              </div>
      
                              <div className={style.cardGrid}>
                                  <Card title="Добро пожаловать!" categories={["Для новичка", " Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                                  <Card title="Начало работы" categories={["Для новичка", " Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                                  <Card title="Введение в рабочую среду" categories={["Для новичка", " Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                                  
                              </div>
                          </div>
                      </section>
      
                      <section className={style.section}>
                          <p className={style.headline}>Каталог тем</p>
      
                          <Row  />
      
                          <div className={style.notWhiteBlock}>
                              <Card title="Начало работы" categories={["Для новичка", " Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                              <Card title="Работа с библиотеками GPN" categories={["Профессионалу", " Библиотеки"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                              <Card title="Введение в рабочую среду" categories={["Профессионалу", " Библиотеки"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                              <Card title="Начало работы" categories={["Для новичка", " Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                              <Card title="Работа с библиотеками GPN" categories={["Профессионалу", " Библиотеки"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"  />
                              <Card title="Введение в рабочую среду" categories={["Профессионалу", "Библиотеки"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"  />
                          </div>
                      </section>
                  </main>
              </div>
    </>
  )
}

export default App
