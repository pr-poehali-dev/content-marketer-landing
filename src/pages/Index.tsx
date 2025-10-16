import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary/20 to-accent/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-foreground">Cofessия</div>
          <div className="hidden md:flex space-x-8">
            {['Главная', 'Обо мне', 'Услуги', 'Блог', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`text-foreground hover:text-primary transition-colors font-medium ${
                  activeSection === item.toLowerCase().replace(' ', '-') ? 'text-primary' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">Связаться</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="главная" className="pt-24">
        <div className="relative w-full h-[600px] overflow-hidden">
          <img 
            src="https://cdn.poehali.dev/files/9125b748-83d9-4dde-aab9-c1fbfcb125e2.jpg" 
            alt="Content Marketing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl space-y-6 text-white">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  СПЕЦИАЛИСТ<br />ПО КОНТЕНТ-<br />МАРКЕТИНГУ
                </h1>
                <p className="text-xl font-light">
                  Создаю контент, который работает
                </p>
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
                    onClick={() => scrollToSection('услуги')}
                  >
                    Услуги
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-foreground rounded-full px-8"
                    onClick={() => scrollToSection('контакты')}
                  >
                    Связаться
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="обо-мне" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Обо мне</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Специалист по контент-маркетингу с опытом создания стратегий, которые говорят на языке клиента.
                  Помогаю брендам находить свой голос и выстраивать доверительные отношения с аудиторией через качественный контент.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Моя миссия — превращать сложные идеи в понятные истории, которые вовлекают, обучают и вдохновляют.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Анализ эффективности контента и метрики
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'PenTool', title: 'Создание контента', desc: 'Разработка контент-стратегий и написание текстов' },
              { icon: 'TrendingUp', title: 'Аналитика', desc: 'Глубокий анализ метрик и KPI контента' },
              { icon: 'MessageCircle', title: 'SMM', desc: 'Управление социальными сетями и комьюнити' },
              { icon: 'FileText', title: 'Copywriting', desc: 'Продающие и информационные тексты' },
            ].map((service, idx) => (
              <Card 
                key={idx} 
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer bg-white"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Metrics Visualization */}
          <div className="mt-16">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-8">Ключевые метрики эффективности</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { label: 'Вовлеченность', value: '8.5%', trend: '+2.3%', color: 'bg-green-500' },
                    { label: 'ROI контента', value: '340%', trend: '+45%', color: 'bg-blue-500' },
                    { label: 'Конверсия', value: '4.2%', trend: '+1.8%', color: 'bg-primary' },
                  ].map((metric, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground font-medium">{metric.label}</span>
                        <span className="text-xs text-green-600 font-semibold">{metric.trend}</span>
                      </div>
                      <div className="text-3xl font-bold text-foreground">{metric.value}</div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className={`${metric.color} h-2 rounded-full`} style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="блог" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Блог</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '5 трендов контент-маркетинга 2025',
                excerpt: 'Что будет работать в новом году и как подготовиться',
                date: '15 октября 2024',
              },
              {
                title: 'Как измерить ROI контента',
                excerpt: 'Практическое руководство по аналитике и метрикам',
                date: '8 октября 2024',
              },
              {
                title: 'Сторителлинг в B2B',
                excerpt: 'Почему истории работают даже в серьезном бизнесе',
                date: '1 октября 2024',
              },
            ].map((post, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/30 h-40 rounded-xl"></div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                    <h3 className="font-bold text-lg text-foreground">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">Свяжитесь со мной для обсуждения проекта</p>
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Имя</label>
                  <Input placeholder="Ваше имя" className="border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" className="border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={5} className="border-border" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                  Отправить сообщение
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex justify-center space-x-6">
                  {[
                    { icon: 'Mail', label: 'Email' },
                    { icon: 'Linkedin', label: 'LinkedIn' },
                    { icon: 'Instagram', label: 'Instagram' },
                    { icon: 'Send', label: 'Telegram' },
                  ].map((social, idx) => (
                    <button
                      key={idx}
                      className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon name={social.icon} size={24} />
                      <span className="text-xs">{social.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Content Marketing Specialist. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;