import { Menu, Search, ShoppingCart, MapPin } from "lucide-react";

function Header() {
  return (
    <header className="w-full bg-[#131921] text-white">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="h-8 w-8 rounded-sm bg-yellow-400" />
            <span className="text-xl font-bold tracking-wide">amazoni</span>
          </a>

          {/* Deliver to */}
          <button className="hidden md:flex items-center gap-2 px-3 py-2 hover:outline hover:outline-1 hover:outline-white/30 rounded">
            <MapPin size={18} />
            <div className="leading-tight text-left">
              <p className="text-xs text-gray-200">Livrer à</p>
              <p className="text-sm font-semibold">France</p>
            </div>
          </button>

          {/* Search */}
          <div className="flex-1">
            <div className="flex items-stretch bg-white rounded-md overflow-hidden">
              <button className="hidden sm:block bg-gray-100 px-3 text-sm text-gray-700">Tous</button>
              <input
                type="text"
                placeholder="Rechercher des produits, marques et plus..."
                className="w-full px-3 py-2 text-gray-900 outline-none"
              />
              <button className="bg-yellow-400 px-3 sm:px-4 text-gray-900 flex items-center justify-center">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Account */}
          <button className="hidden lg:flex flex-col leading-tight px-3 py-2 hover:outline hover:outline-1 hover:outline-white/30 rounded">
            <span className="text-xs text-gray-200">Bonjour, identifiez-vous</span>
            <span className="text-sm font-semibold">Compte et listes</span>
          </button>

          {/* Returns */}
          <button className="hidden md:flex flex-col leading-tight px-3 py-2 hover:outline hover:outline-1 hover:outline-white/30 rounded">
            <span className="text-xs text-gray-200">Retours</span>
            <span className="text-sm font-semibold">et Commandes</span>
          </button>

          {/* Cart */}
          <button className="flex items-center gap-2 px-3 py-2 hover:outline hover:outline-1 hover:outline-white/30 rounded">
            <div className="relative">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </div>
            <span className="hidden sm:block font-semibold">Panier</span>
          </button>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bg-[#232f3e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-6 py-2 text-sm">
            <button className="flex items-center gap-2 font-semibold">
              <Menu size={18} />
              Toutes
            </button>
            <a href="#" className="hover:underline">Meilleures ventes</a>
            <a href="#" className="hover:underline">Amazon Basics</a>
            <a href="#" className="hover:underline">Informatique</a>
            <a href="#" className="hover:underline">Maison</a>
            <a href="#" className="hover:underline">High-Tech</a>
            <a href="#" className="hover:underline">Offres</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
