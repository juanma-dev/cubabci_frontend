import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'
import Diplomatics from './Diplomatics.jsx';
import Articles from './Articles.jsx';
import HomeEN from './en/Home.jsx';
import DiplomaticsEN from './en/Diplomatics.jsx';
import ArticlesEN from './en/Articles.jsx';
import Article1 from './articles/Article1.jsx';
import Article2 from './articles/Article2.jsx';
import Article3 from './articles/Article3.jsx';
import Article1EN from './en/articles/Article1.jsx';
import Article2EN from './en/articles/Article2.jsx';
import Article3EN from './en/articles/Article3.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<HomeEN />} />
        <Route path="/diplomatics" element={<Diplomatics />} />
        <Route path="/diplomatics/en" element={<DiplomaticsEN />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/en" element={<ArticlesEN />} />
        <Route path="/articles/1" element={<Article1 />} />
        <Route path="/articles/2" element={<Article2 />} />
        <Route path="/articles/3" element={<Article3 />} />
        <Route path="/articles/1/en" element={<Article1EN />} />
        <Route path="/articles/2/en" element={<Article2EN />} />
        <Route path="/articles/3/en" element={<Article3EN />} />
      </Routes>
    </>
  )
}

export default App
