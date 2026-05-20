export const renderShipmentHome = () => {
    return `
    <main class="p-4 space-y-4 select-none pb-24 text-right">
        
        <div class="bg-slate-900 text-white p-3.5 rounded-xl border border-gray-800 space-y-2">
            <span class="text-[8px] font-black text-orange-400 block uppercase tracking-wider">لائیو پارسل ٹریکنگ (Live Tracking)</span>
            <div class="relative">
                <span class="material-icons absolute left-3 top-2.5 text-gray-400 text-base">local_shipping</span>
                <input type="text" placeholder="شپمنٹ نمبر درج کریں... Ex: TZ-SH-99" class="w-full bg-slate-850 pl-9 pr-4 py-1.5 text-xs border border-transparent focus:bg-slate-800 focus:border-orange-500 outline-none rounded-lg text-left font-mono font-bold text-white">
            </div>
        </div>

        <div class="space-y-2">
            <h3 class="text-[9px] font-black text-gray-400 uppercase tracking-wider px-0.5">ڈیلیوری موڈ کا انتخاب کریں (Delivery Modes)</h3>
            <div class="grid grid-cols-3 gap-2.5">
                <div onclick="window.loadShipmentDetails('food', 'فوری فوڈ ڈیلیوری')" class="border border-gray-200 p-2.5 rounded-xl bg-white flex flex-col items-center justify-between gap-1 cursor-pointer hover:border-gray-300 active:scale-95 transition-all">
                    <img src="/public/butans/food-delevry.jpg" class="h-8 w-8 object-contain" alt="Food">
                    <span class="text-[8px] font-black text-gray-900 text-center">فوڈ ڈیلیوری</span>
                </div>
                <div onclick="window.loadShipmentDetails('parcel', 'باکس و دستاویزی پارسل')" class="border border-gray-200 p-2.5 rounded-xl bg-white flex flex-col items-center justify-between gap-1 cursor-pointer hover:border-gray-300 active:scale-95 transition-all">
                    <span class="material-icons text-2xl text-orange-500">inventory_2</span>
                    <span class="text-[8px] font-black text-gray-900 text-center">کوریئر پارسل</span>
                </div>
                <div onclick="window.loadShipmentDetails('cargo', 'بلک کارگو و لاجسٹکس')" class="border border-gray-200 p-2.5 rounded-xl bg-white flex flex-col items-center justify-between gap-1 cursor-pointer hover:border-gray-300 active:scale-95 transition-all">
                    <span class="material-icons text-2xl text-[#0D47A1]">local_shipping</span>
                    <span class="text-[8px] font-black text-gray-900 text-center">بڑا کارگو سامان</span>
                </div>
            </div>
        </div>

        <div class="border border-blue-100 bg-blue-50/50 p-3 rounded-xl flex items-center justify-between gap-2">
            <span class="material-icons text-xl text-blue-600">shield</span>
            <div class="min-w-0">
                <span class="text-[9px] font-black text-gray-900 block">ٹیزرو محفوظ لاجسٹکس گارنٹی</span>
                <span class="text-[7.5px] font-bold text-gray-400 block mt-0.5">ہر پیکیج ٹیزرو سیکیورٹی شیلڈ اور لائیو لوکیشن سے لیس ہے</span>
            </div>
        </div>
    </main>
    `;
};
