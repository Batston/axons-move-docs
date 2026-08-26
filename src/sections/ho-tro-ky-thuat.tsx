import ContactCard from "../components/ContactCard";

export default function HoTroKyThuat() {
    return (
        <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Hỗ trợ kỹ thuật</h2>
            <div className="grid grid-cols-3 gap-4 mt-8">
                <ContactCard
                icon="☎"
                label="Phan Thanh Tú"
                value="0908 390 252"
                description="Liên hệ 24/7."
            />
            <ContactCard
                icon="✉"
                label="Phan Thanh Tú"
                value="phantu@cp.com.vn"
                description="Phản hồi trong 5 giây."
            />
            <ContactCard
                icon="◈"
                label="Ticket hệ thống"
                value="Gửi ticket"
                description="Gửi yêu cầu hỗ trợ."
            />
            </div>   
            <div className="rounded-xl border border-slate-200 bg-white p-6 mt-8">
               <h3 className="text-xl text-semibold text-slate-800">Gửi yêu cầu hỗ trợ</h3> 
                <p className="mt-1 text-sm text-slate-500">Vui lòng điền đầy đủ thông tin để được hỗ trợ nhanh nhất.</p>
                <div className="mt-6">
                    <label>Mô tả vấn đề</label>
                    <textarea
                    rows={5}
                    placeholder="Mô tả vấn đề gập phải..." 
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                    <div className="mt-6 grid grid-cols-2 gap-5">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Số SO</label>
                            <input type="text" placeholder="Nhấp số SO" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Biển số xe</label>
                            <input type="text" placeholder="Nhập biển số xe" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label className="mb-2 block text-sm font-medium text-slate-700">Đính kèm hình ảnh</label>
                        <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 px-6 py-8 text-center hover:border-blue-400 hover:bg-blue-50/30">
                            <div className="text-2xl">
                                📎
                            </div>
                            <p className="mt-2 text-sm text-slate-600">
                                <span className="font-medium text-blue-600">
                                    Chọn file
                                </span>
                            </p>
                            <p className="mt-1 text-xs text-slate-400">
                                PNG, JPG, PDF hoặc các file liên quan
                            </p>
                             <input type="file"
                                multiple
                                className="hidden"
                            />
                        </label>             
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
                        >
                            Gửi yêu cầu
                        </button>
                    </div>
                </div>
               </div>  
        </div>
    )
}