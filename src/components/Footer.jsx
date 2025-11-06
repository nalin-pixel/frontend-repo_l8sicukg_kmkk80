function Footer() {
  return (
    <footer className="bg-[#232f3e] text-gray-200 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-3">Pour mieux nous connaître</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Carrières</a></li>
            <li><a href="#" className="hover:underline">À propos d'Amazon</a></li>
            <li><a href="#" className="hover:underline">Durabilité</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Gagnez de l'argent</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Vendez sur Amazon</a></li>
            <li><a href="#" className="hover:underline">Devenez affilié</a></li>
            <li><a href="#" className="hover:underline">Annonces</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Moyens de paiement</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Cartes cadeaux</a></li>
            <li><a href="#" className="hover:underline">Chèques-cadeaux</a></li>
            <li><a href="#" className="hover:underline">Recharges</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Besoin d'aide ?</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Suivre un colis</a></li>
            <li><a href="#" className="hover:underline">Retours et remplacements</a></li>
            <li><a href="#" className="hover:underline">Service Client</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-sm bg-yellow-400" />
            <span className="font-semibold">amazoni</span>
          </div>
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} Amazoni Clone — Démo</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
