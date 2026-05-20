export const renderShipmentDetails = (modeKey, modeName) => {
    // موڈ کے حساب سے فرضی تخمینہ ریٹ سیٹ کرنا
    const baseRates = { food: 'Rs. 150', parcel: 'Rs. 250', cargo: 'Rs. 2,500' };
    const estRate = baseRates[modeKey] || 'Rs. 200';

    return `
    <main class="p-4 space-y-4 select-none pb-24 text-right">
        <div class="flex items-center justify-between border-b border-gray-100 pb-2">
            <button onclick="window.loadShipmentTab('home')" class="p-1.5 bg-gray-100 text-gray-700 rounded-lg active:scale-90 transition-transform">
                <span class="material-icons text-lg block">arrow_forward</span>
            </button>
            <h2 class="text-xs font-black text-gray-900 text-center">${modeName}</h2>
            <div class="w-8"></div>
        </div>

        <div class="space-y-3">
            <div class="bg-gray-50 border border-gray-200 p-3 rounded-xl space-y-2">
                <span class="text-[8px] font-black text-gray-400 block">پک اپ ایڈریس (Pick Up)</span>
                <input type="text" value="موجودہ لوکیشن (ٹیزرو میپ سنک)" class="w-full bg-white px-3 py-1.5 text-xs border border-gray-200 outline-none rounded-md font-bold text-right">
            </div>

            <div class="bg-gray-50 border border-gray-200 p-3 rounded-xl space-y-2">
                <span class="text-[8px] font-black text-gray-400 block">ڈراپ آف ایڈریس (Drop Off)</span>
                <input type="text" placeholder="منزل کا ایڈریس لکھیں..." class="w-full bg-white px-3 py-1.5 text-xs border border-gray-200 outline-none rounded-md font-bold text-right">
            </div>

            <div class="bg-gray-50 border border-gray-200 p-3 rounded-xl flex justify-between items-center">
                <span class="text-xs font-mono font-black text-[#0D47A1]">${estRate}</span>
                <span class="text-[8.5px] font-black text-gray-700">تخمینہ کرایہ (Tezro Estimate)</span>
            </div>
        </div>

        <button onclick="window.triggerShipmentCheckout('${modeName}', '${estRate}')" class="w-full bg-[#0A192F] hover:bg-[#0D47A1] text-white py-3 rounded-xl font-black text-xs tracking-wide uppercase transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-1.5 mt-4">
            <span class="material-icons text-sm">local_shipping</span>
            آرڈر کنفرم کریں (CONFIRM SHIPMENT)
        </button>
    </main>
    `;
};
