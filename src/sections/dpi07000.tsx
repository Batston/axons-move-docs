export default function DPI07000() {
    return (
        <div className="space-y-9">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">DPI07000 - GPS View Report</h2>
                <p className="leading-relaxed mt-3">Màn hình DPI07000 cho phép tra cứu dữ liệu
                    định vị GPS của xe theo từng chuyến, dựa trên biển số xe, kế hoạch giao hàng (Plan) và khoảng thời gian.</p>
                <p className="">Sử dụng màn hình này khi cần kiểm tra hành trình, tốc độ, hoặc trạng thái hoạt động thực tế của xe
                    trong một khoảng thời gian cụ thể — ví dụ để đối chiếu với lịch trình giao hàng hoặc xác minh sự cố.</p>
            </div>
            <section>
                <h1 className="text-xl mb-2">1. Dữ liệu GPS</h1>
                <p className="text-slate-600 leading-relaxed">
                    Chọn{" "}
                    <strong className="text-slate-800">License plate</strong> (biển số xe) →
                    chọn <strong className="text-slate-800">Plan</strong> (kế hoạch giao
                    hàng) → chọn khoảng thời gian tại{" "}
                    <strong className="text-slate-800">Delivery date start</strong> và{" "}
                    <strong className="text-slate-800">Delivery date end</strong> → bấm{" "}
                    <strong className="text-slate-800">Search</strong>.
                </p>
                <p className="mt-3 text-slate-600 leading-relaxed">
                    Nút <strong className="text-slate-800">Export</strong> cho phép xuất dữ
                    liệu kết quả ra file Excel.
                </p>
                <img src="/images/dpi07000-1.jpg" alt="" className="rounded-lg border shadow mt-6" />
                <figcaption className="mt-2 mb-6 text-sm text-slate-500">Bảng kết quả dữ liệu GPS theo thời gian</figcaption>
                <p className=" leading-relaxed">
                    Sau khi bấm Search, hệ thống trả về danh sách các điểm GPS theo thời
                    gian, kèm trạng thái xe và thiết bị tại từng thời điểm. Cuộn bảng sang
                    phải để xem đầy đủ các cột.
                </p>
                <div className="mt-6">
                    <h1 className="mb-3 text-xl">Chú thích</h1>
                    <div className="space-y-6 flex gap-8">
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-slate-800 mb-3">
                                Thông tin GPS
                            </h4>

                            <ul className="space-y-3 text-slate-600">
                                <li>
                                    <strong className="text-slate-800">Status:</strong>{" "}
                                    Trạng thái tổng hợp của xe tại thời điểm ghi nhận (Driving / Parking / Stoping).
                                </li>

                                <li>
                                    <strong className="text-slate-800">GPS Last Date:</strong>{" "}
                                    Thời gian gần nhất hệ thống nhận được dữ liệu GPS.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Speed:</strong>{" "}
                                    Tốc độ hiện tại của xe.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Latitude:</strong>{" "}
                                    Vĩ độ GPS của vị trí xe.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Longitude:</strong>{" "}
                                    Kinh độ GPS của vị trí xe.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Direction:</strong>{" "}
                                    Hướng di chuyển của xe.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Temp (°C):</strong>{" "}
                                    Nhiệt độ được ghi nhận trong thùng xe, tính bằng °C.
                                </li>

                                <li>
                                    <strong className="text-slate-800">GPS Provider:</strong>{" "}
                                    Nhà cung cấp dữ liệu GPS.
                                </li>

                                <li>
                                    <strong className="text-slate-800">License Plate:</strong>{" "}
                                    Biển số của xe đang được theo dõi.
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-slate-800 mb-3">
                                Trạng thái xe
                            </h4>

                            <ul className="space-y-5 text-slate-600">
                                <li>
                                    <strong className="text-slate-800">Driving Status:</strong>{" "}
                                    Trạng thái di chuyển của xe.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Engine On/Off:</strong>{" "}
                                    Trạng thái bật/tắt của động cơ.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Vehicle Parking:</strong>{" "}
                                    Trạng thái đỗ xe.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Speed over limits:</strong>{" "}
                                    Cho biết xe có vượt giới hạn tốc độ hay không.
                                </li>
                            </ul>

                            <h4 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                                Thiết bị trên xe
                            </h4>

                            <ul className="space-y-5 text-slate-600">
                                <li>
                                    <strong className="text-slate-800">On/Off PTO:</strong>{" "}
                                    Trạng thái bật/tắt PTO.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Power On/Off GPS:</strong>{" "}
                                    Trạng thái nguồn của thiết bị GPS.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Reset GPS Box:</strong>{" "}
                                    Trạng thái reset của thiết bị GPS.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="text-xl mb-2">2. Thông tin điểm giao và bản đồ lộ trình</h1>
                <p className="text-slate-600 leading-relaxed">
                    Khu vực phía dưới bảng GPS hiển thị song song hai phần: {" "}
                    <strong className="text-slate-800">Customer/POD locations</strong> bên
                    trái là bảng liệt kê chi tiết từng đơn hàng trong kế hoạch giao, bao gồm vị trí
                    khách hàng cần giao và vị trí tài xế thực tế xác nhận giao hàng. <strong className="text-slate-800">Map</strong> bên phải là bản đồ hiển thị tuyến đường thực tế xe đã di chuyển theo dữ liệu GPS,
                    cùng các vị trí liên quan đến quá trình giao hàng.
                </p>
                <img src="/images/dpi07000-2.png" alt="" className="rounded-lg border shadow mt-6" />
                <figcaption className="mt-2 mb-6 text-sm text-slate-500">Bảng kết quả dữ liệu GPS theo thời gian</figcaption>
                <div className="mt-6">
                    <h4 className="text-xl mb-3">
                        Chú thích
                    </h4>
                    <div className="space-y-6 flex gap-8">
                        <div className="flex-1">
                            <ul className="space-y-3 text-slate-600">
                                <li>
                                    <strong className="text-slate-800">Customer code:</strong>{" "}
                                    Mã khách hàng.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Ship to:</strong>{" "}
                                    Mã điểm giao.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Shipment No.:</strong>{" "}
                                    Số vận đơn.
                                </li>

                                <li>
                                    <strong className="text-slate-800">CV Latitude / CV Longitude:</strong>{" "}
                                    Tọa độ điểm giao hàng theo kế hoạch (vị trí khách hàng).
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1">
                            <ul className="space-y-3 text-slate-600">
                                <li>
                                    <strong className="text-slate-800">POD Latitude / POD Longitude:</strong>{" "}
                                    Tọa độ thực tế nơi tài xế ký xác nhận giao hàng (POD).
                                </li>

                                <li>
                                    <strong className="text-slate-800">Time POD signed:</strong>{" "}
                                    Thời gian tài xế ký xác nhận giao hàng.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Sequence Plan:</strong>{" "}
                                    Thứ tự giao hàng theo kế hoạch.
                                </li>

                                <li>
                                    <strong className="text-slate-800">Sequence POD:</strong>{" "}
                                    Thứ tự giao hàng thực tế, tính theo thời gian làm POD.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-800 mt-2">
                        Ký hiệu
                    </h4>
                    <div className="flex gap-8">
                        <div className="flex-1">
                            <div className="flex items-center border rounded-lg mt-5 bg-slate-100">
                                <img src="/icons/pod_signed_pin_icon.svg" alt="" className="w-20 h-20 px-3 py-3" />
                                <p>Tọa độ tài xế thực tế làm POD.</p>
                            </div>
                            <div className="flex items-center border rounded-lg mt-5 bg-slate-100">
                                <img src="/icons/store_pin_icon.svg" alt="" className="w-20 h-20 px-3 py-3" />
                                <p>Tọa độ điểm khách hàng cần giao.</p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center border rounded-lg mt-5 bg-slate-100">
                                <img src="/icons/truck_icon.png" alt="" className="w-20 h-20 px-3 py-3" />
                                <p>Vị trí xe tải theo dữ liệu GPS.</p>
                            </div>
                            <div className="flex items-center border rounded-lg mt-5 bg-slate-100">
                                <img src="/icons/route_line_icon.svg" alt="" className="w-20 h-20 px-3 py-3" />
                                <p>Tuyến đường thực tế xe đã di chuyển (dữ liệu GPS ghi nhận).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="text-xl mb-2">3. Biều đồ nhiệt độ</h1>
                <p className="text-slate-600 leading-relaxed">
                    Biểu đồ thể hiện diễn biến nhiệt độ trong thùng xe theo thời gian,
                    tương ứng với khoảng thời gian đã chọn ở phần tìm kiếm. Dùng để kiểm
                    tra điều kiện bảo quản hàng hóa trong suốt hành trình.
                </p>
                <img src="/images/dpi07000-3.jpg" alt="RMT01500" className="rounded-lg border shadow mt-6" />
                <figcaption className="mt-2 mb-6 text-sm text-slate-500">Bảng biểu đồ nhiệt độ theo thời gian</figcaption>
            </section>
        </div>
    )
}