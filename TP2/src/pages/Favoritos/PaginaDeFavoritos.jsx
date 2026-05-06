import { useFavoritos } from "../../context/ContextoFavoritos";
import { useTranslation } from "react-i18next";
import TarjetaPelicula from "../../Components/TarjetaPelicula/TarjetaPelicula";

const PaginaDeFavoritos = () => {
  const { t } = useTranslation();
  const { favoritos, alternarFavorito, esFavorito } = useFavoritos();

  if (favoritos.length === 0) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">{t("favoritos")}</h1>
        <p className="text-slate-400 text-lg">{t("noFavoritos")}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f172a] pb-10">
      <h1 className="text-4xl font-bold text-white text-center py-10">
        {t("favoritos")}
      </h1>
      <TarjetaPelicula
        datos={favoritos}
        esFavorito={esFavorito}
        alternarFavorito={alternarFavorito}
      />
    </main>
  );
};

export default PaginaDeFavoritos;
