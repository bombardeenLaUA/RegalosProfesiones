import { Info } from "lucide-react";

export default function PriceDisclaimer() {
  return (
    <div className="border-b border-blue-200 bg-blue-50/80 px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center gap-3 sm:px-6 lg:px-8">
        <Info className="h-5 w-5 flex-shrink-0 text-blue-600" />
        <p className="text-sm text-gray-800">
          <span className="font-semibold">Nota:</span> Los precios mostrados son
          el precio base de cada producto y no reflejan los descuentos activos.
          A su vez, este precio base no se verá afectado por los posibles cambios de precio por parte de Amazon.
          Las etiquetas de Top Ventas y Calidad/Precio hacen caso a los precios base, sin descuentos.
          Los precios de envío no se tienen en cuenta.
          Haz clic en los productos para ver el precio final en Amazon; los precios varían a menudo.
        </p>
      </div>
    </div>
  );
}
