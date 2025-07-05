import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-minecraft-green rounded-sm flex items-center justify-center">
                <Icon name="Box" size={16} className="text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-minecraft-green">
                UnusualVanilla
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-gray-600 hover:text-minecraft-green transition-colors"
              >
                О сервере
              </a>
              <a
                href="#discord"
                className="text-gray-600 hover:text-minecraft-green transition-colors"
              >
                Discord
              </a>
              <a
                href="#map"
                className="text-gray-600 hover:text-minecraft-green transition-colors"
              >
                Карта
              </a>
              <a
                href="#shop"
                className="text-gray-600 hover:text-minecraft-green transition-colors"
              >
                Магазин
              </a>
              <a
                href="#rules"
                className="text-gray-600 hover:text-minecraft-green transition-colors"
              >
                Правила
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Unusual<span className="text-minecraft-green">Vanilla</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ванильный Minecraft сервер с удобными фишками для выживания
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Badge
                variant="outline"
                className="text-minecraft-green border-minecraft-green px-4 py-2"
              >
                Версия 1.21.6
              </Badge>
              <Badge
                variant="outline"
                className="text-minecraft-green border-minecraft-green px-4 py-2"
              >
                Vanilla+
              </Badge>
              <Badge
                variant="outline"
                className="text-minecraft-green border-minecraft-green px-4 py-2"
              >
                Выживание
              </Badge>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-md mx-auto">
              <p className="text-sm text-gray-500 mb-2">IP адрес сервера:</p>
              <p className="text-2xl font-mono font-bold text-minecraft-green">
                play.unusualvanilla.ru
              </p>
              <Button className="mt-4 bg-minecraft-green hover:bg-minecraft-green/90 text-white px-8">
                Копировать IP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              О сервере
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              UnusualVanilla - это ванильный сервер с качественными
              дополнениями, которые делают выживание более комфортным, не
              нарушая баланс игры
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 bg-minecraft-lightgreen rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Zap" size={20} className="text-minecraft-green" />
                </div>
                <CardTitle className="text-minecraft-green">
                  Удобные фишки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Полезные дополнения для выживания: улучшенная навигация,
                  оптимизация крафта и другие QoL улучшения
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 bg-minecraft-lightgreen rounded-lg flex items-center justify-center mb-3">
                  <Icon
                    name="Shield"
                    size={20}
                    className="text-minecraft-green"
                  />
                </div>
                <CardTitle className="text-minecraft-green">Защита</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Надёжная защита от гриферов и читеров. Система регионов для
                  защиты построек и приватных территорий
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 bg-minecraft-lightgreen rounded-lg flex items-center justify-center mb-3">
                  <Icon
                    name="Users"
                    size={20}
                    className="text-minecraft-green"
                  />
                </div>
                <CardTitle className="text-minecraft-green">
                  Сообщество
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Дружелюбное сообщество игроков. Регулярные ивенты, конкурсы и
                  совместные проекты
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Discord Section */}
      <section
        id="discord"
        className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-purple-50"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
            Discord сообщество
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-8">
              Присоединяйся к нашему Discord серверу для общения с другими
              игроками, получения новостей и поддержки
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Присоединиться к Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Карта мира
            </h2>
            <p className="text-gray-600">Исследуй наш мир онлайн</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Icon
                name="Map"
                size={48}
                className="text-minecraft-green mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Интерактивная карта
              </h3>
              <p className="text-gray-600 mb-6">
                Просматривайте построенные города, находите интересные места и
                планируйте свои путешествия
              </p>
              <Button
                variant="outline"
                className="border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-white"
              >
                Открыть карту
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Магазин
            </h2>
            <p className="text-gray-600">Поддержи сервер и получи бонусы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-minecraft-green">Базовый</CardTitle>
                <p className="text-2xl font-bold text-gray-900">199₽</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Цветной ник</li>
                  <li>✓ Дополнительные /home</li>
                  <li>✓ Особый префикс</li>
                </ul>
                <Button className="w-full mt-4 bg-minecraft-green hover:bg-minecraft-green/90 text-white">
                  Купить
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-minecraft-green">
              <CardHeader>
                <CardTitle className="text-minecraft-green">Премиум</CardTitle>
                <p className="text-2xl font-bold text-gray-900">499₽</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Всё из базового</li>
                  <li>✓ Приватные регионы</li>
                  <li>✓ Полёт в лобби</li>
                  <li>✓ Эксклюзивные команды</li>
                </ul>
                <Button className="w-full mt-4 bg-minecraft-green hover:bg-minecraft-green/90 text-white">
                  Купить
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-minecraft-green">VIP</CardTitle>
                <p className="text-2xl font-bold text-gray-900">999₽</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Всё из премиум</li>
                  <li>✓ Больше регионов</li>
                  <li>✓ Особые эффекты</li>
                  <li>✓ Приоритет в очереди</li>
                </ul>
                <Button className="w-full mt-4 bg-minecraft-green hover:bg-minecraft-green/90 text-white">
                  Купить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Правила сервера
            </h2>
            <p className="text-gray-600">
              Соблюдение правил обеспечивает комфортную игру для всех
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-minecraft-green flex items-center">
                    <Icon name="CheckCircle" size={20} className="mr-2" />
                    Разрешено
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Строительство и творчество</li>
                    <li>• Торговля с игроками</li>
                    <li>• Создание городов и регионов</li>
                    <li>• Использование редстоун механизмов</li>
                    <li>• Кооперативная игра</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600 flex items-center">
                    <Icon name="XCircle" size={20} className="mr-2" />
                    Запрещено
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Использование читов и модов</li>
                    <li>• Гриферство и воровство</li>
                    <li>• Мат и токсичность</li>
                    <li>• Спам и флуд</li>
                    <li>• Реклама других серверов</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minecraft-green text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center mr-3">
              <Icon name="Box" size={14} className="text-minecraft-green" />
            </div>
            <span className="text-lg font-heading font-bold">
              UnusualVanilla
            </span>
          </div>
          <p className="text-minecraft-lightgreen mb-4">
            Лучший ванильный сервер с удобными дополнениями
          </p>
          <p className="text-sm text-minecraft-lightgreen">
            © 2024 UnusualVanilla. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
